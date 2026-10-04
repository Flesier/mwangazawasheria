import { Link } from '@/lib/router';

export default function Logo({ size = 'default', link = true }: { size?: 'small' | 'default' | 'large'; link?: boolean }) {
  const dimensions = size === 'small' ? 'h-10 w-10' : size === 'large' ? 'h-28 w-28 sm:h-36 sm:w-36' : 'h-11 w-11';
  const image = <img src="/assets/mwangaza-logo.svg" alt="Mwangaza wa Sheria — Light of Justice" className={`${dimensions} object-contain transition-transform duration-300 group-hover:scale-105`} />;

  if (!link) return image;

  return <Link to="/" className="group inline-flex shrink-0" aria-label="Mwangaza wa Sheria home">{image}</Link>;
}
