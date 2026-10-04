import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import Logo from '@/components/Logo';
import { Link, useRouter } from '@/lib/router';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: "The Defendant's Guide", path: '/store' },
  { label: 'Get Involved', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { route } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-950/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="small" />
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold text-white tracking-wide">Mwangaza wa Sheria</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-300/80">Light of Justice</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = route === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-gold-300 bg-forest-800/50'
                    : 'text-sand-100/80 hover:text-gold-200 hover:bg-forest-800/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/store" className="btn-primary ml-3 !py-2.5 !px-5 text-xs">
            <BookOpen className="w-4 h-4" />
            Buy the Guide
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pt-4 pb-6 flex flex-col gap-1 bg-forest-950/95 backdrop-blur-md mt-3 rounded-2xl">
          {navLinks.map((link) => {
            const isActive = route === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-gold-300 bg-forest-800/50'
                    : 'text-sand-100/80 hover:text-gold-200 hover:bg-forest-800/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/store" className="btn-primary mt-3">
            <BookOpen className="w-4 h-4" />
            Buy the Guide
          </Link>
        </div>
      </div>
    </header>
  );
}
