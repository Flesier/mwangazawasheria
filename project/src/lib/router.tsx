import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type RouterContextType = {
  route: string;
  navigate: (path: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  route: '/',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setRoute(hash || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className, onClick }: { to: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const { navigate } = useRouter();
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
