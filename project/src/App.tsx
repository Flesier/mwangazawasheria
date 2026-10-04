import { RouterProvider, useRouter } from '@/lib/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Programs from '@/pages/Programs';
import Store from '@/pages/Store';
import Contact from '@/pages/Contact';

function AppContent() {
  const { route } = useRouter();
  const normalizedRoute = route.replace(/\/$/, '') || '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {normalizedRoute === '/' && <Home />}
        {normalizedRoute === '/about' && <About />}
        {normalizedRoute === '/programs' && <Programs />}
        {normalizedRoute === '/store' && <Store />}
        {normalizedRoute === '/contact' && <Contact />}
        {!['/', '/about', '/programs', '/store', '/contact'].includes(normalizedRoute) && <Home />}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
