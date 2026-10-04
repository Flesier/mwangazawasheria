import { Mail, Phone, MapPin, BookOpen, Heart } from 'lucide-react';
import Logo from '@/components/Logo';
import { Link } from '@/lib/router';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-100/70 pt-20 pb-8 mt-20">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Logo size="small" link={false} />
              <div>
                <div className="font-serif text-lg font-semibold text-white">Mwangaza wa Sheria</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-300/80">Light of Justice</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-sand-100/60 max-w-xs">
              Bridging the gap in legal literacy, supporting prisoner rehabilitation,
              and delivering compassionate legal aid to marginalized communities across Kenya.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="link-underline hover:text-gold-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="link-underline hover:text-gold-200 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="link-underline hover:text-gold-200 transition-colors">Programs & Services</Link></li>
              <li><Link to="/store" className="link-underline hover:text-gold-200 transition-colors">The Defendant's Guide</Link></li>
              <li><Link to="/contact" className="link-underline hover:text-gold-200 transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Western & Nyanza Regional Offices, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>info@mwangazawasheria.org</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-5">Take Action</h4>
            <div className="flex flex-col gap-3">
              <Link to="/store" className="btn-primary text-xs">
                <BookOpen className="w-4 h-4" />
                Buy the Guide
              </Link>
              <Link to="/contact" className="btn-secondary text-xs">
                <Heart className="w-4 h-4" />
                Become a Member
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand-100/40">
          <p>© {new Date().getFullYear()} Mwangaza wa Sheria Organization. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Delivering justice with dignity across Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
