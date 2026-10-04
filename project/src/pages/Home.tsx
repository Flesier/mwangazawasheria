import { Scale, BookOpen, Users, Heart, ArrowRight, Gavel, GraduationCap, Handshake, Sparkles, Quote } from 'lucide-react';
import { Link } from '@/lib/router';
import Logo from '@/components/Logo';
import { IMAGES } from '@/lib/images';

const impacts = [
  {
    icon: GraduationCap,
    title: 'Legal Literacy Programs',
    description: 'Empowering communities with knowledge of their constitutional rights, court procedures, and legal protections through workshops and accessible educational materials.',
    image: IMAGES.communityMeeting,
  },
  {
    icon: Gavel,
    title: 'Paralegal Assistance for Incarcerated Individuals',
    description: 'Trained inmate-paralegals and community advocates guide defendants through complex legal proceedings, ensuring fair trials and dignified treatment behind bars.',
    image: IMAGES.inmateReading,
  },
  {
    icon: Handshake,
    title: 'Community Mediation',
    description: 'Resolving disputes at the grassroots level through restorative justice practices, reducing case backlogs and keeping families out of costly court battles.',
    image: IMAGES.communityGathering,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(240,199,87,0.16),transparent_28%),linear-gradient(135deg,rgba(10,32,24,0.96),rgba(25,67,46,0.9))]" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[620px] w-[620px] rounded-full border border-gold-300/20 bg-gold-300/[0.04]" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 h-[440px] w-[440px] rounded-full border border-gold-300/20 bg-forest-950/20" />

        <div className="container-page relative z-10 pt-32 pb-20">
          {/* Centered logo as backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fade-in">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] lg:h-[560px] lg:w-[560px] rounded-full bg-gold-300/10 blur-3xl" />
              <div className="absolute h-[260px] w-[260px] sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px] rounded-full border border-gold-300/20" />
              <div className="relative opacity-25 sm:opacity-30">
                <Logo size="large" link={false} />
              </div>
            </div>
          </div>

          {/* Text on the left */}
          <div className="relative max-w-3xl text-left">
            <div className="section-eyebrow mb-6 animate-fade-up text-gold-300">
              <Sparkles className="w-4 h-4" />
              A Movement for Legal Empowerment in Kenya
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-[1.1] text-balance animate-fade-up animate-delay-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              Mwangaza wa Sheria
              <span className="block text-gold-300 mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">Light of Justice</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg lg:text-xl text-sand-100/90 leading-relaxed max-w-2xl animate-fade-up animate-delay-200 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Bridging the gap in legal literacy, supporting prisoner rehabilitation,
              and delivering compassionate legal aid to marginalized communities across Kenya.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <Link to="/store" className="btn-primary">
                <BookOpen className="w-5 h-5" />
                Buy "The Defendant's Guide"
              </Link>
              <Link to="/contact" className="btn-secondary">
                <Heart className="w-5 h-5" />
                Become a Member
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-sand-100/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold-300/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Impact highlights */}
      <section className="py-24 bg-sand-50">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-eyebrow justify-center mb-4">
              <Scale className="w-4 h-4" />
              Our Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-950 mb-5 text-balance">
              Justice Begins with Understanding
            </h2>
            <p className="text-lg text-forest-800/70 leading-relaxed">
              We turn legal knowledge into practical power — equipping defendants, prisoners,
              and communities with the tools to navigate the justice system with confidence and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impacts.map((item, i) => (
              <div
                key={item.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title === 'Paralegal Assistance for Incarcerated Individuals' ? 'Kenyan prisoners at Shimo la Tewa maximum prison in black and white striped uniforms' : item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
                      <item.icon className="w-6 h-6 text-forest-950" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-serif font-semibold text-forest-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-forest-800/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders quote */}
      <section className="py-24 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.inmatePrayer}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-gold-300/40 mx-auto mb-8" />
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white leading-relaxed text-balance italic">
              "We lived the reality of a justice system that feels out of reach.
              Now we return as paralegals — not just to survive it, but to help
              others understand it, navigate it, and reclaim their dignity within it."
            </blockquote>
            <div className="mt-8 flex flex-col items-center gap-1">
              <div className="text-gold-300 font-serif text-lg font-semibold">
                Erick Musila Makau & Dennis Momanyi Ongera
              </div>
              <div className="text-sm text-sand-100/50">
                Founders, Mwangaza wa Sheria Organization
              </div>
            </div>
            <Link to="/about" className="btn-secondary mt-10">
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured book */}
      <section className="py-24 bg-sand-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-white">
                  <img src={IMAGES.bookCovers[0]} alt="The Defendant's Guide: A Practical Legal Manual" className="w-full h-full object-cover" />
                </div>
                {/* Decorative shadow */}
                <div className="absolute -inset-4 bg-gold-300/10 rounded-3xl -z-10 blur-2xl" />
              </div>
            </div>

            <div className="animate-fade-up animate-delay-200">
              <div className="section-eyebrow mb-4">
                <BookOpen className="w-4 h-4" />
                Featured Publication
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-forest-950 mb-5 text-balance">
                The Defendant's Guide: A Practical Legal Manual
              </h2>
              <p className="text-lg text-forest-800/70 leading-relaxed mb-6">
                A comprehensive guide demystifying Kenyan criminal and civil law.
                Designed to assist unrepresented defendants, paralegals, and vulnerable
                groups in securing fair trials and understanding statutory rights.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Constitutional Framework, Bail & Bond, and Criminal Trial Processes',
                  'Analysis of Capital, Non-Capital, and Sexual Offences',
                  'Alternative Dispute Resolution, Plea Bargaining & Diversion',
                  'Civil Litigation, Appeals, Revision & Sample Legal Drafts',
                ].map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-forest-800/80">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    </div>
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/store" className="btn-primary">
                  <BookOpen className="w-5 h-5" />
                  Get Your Copy
                </Link>
                <Link to="/store" className="btn-outline">
                  Sponsor a Copy
                  <Heart className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-forest-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 text-gold-300 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-5 text-balance">
              Stand With Us for Equal Justice
            </h2>
            <p className="text-lg text-sand-100/80 mb-8 leading-relaxed">
              Join our movement to make legal knowledge accessible to every Kenyan,
              regardless of socio-economic status. Become a member, sponsor a book,
              or volunteer your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <Heart className="w-5 h-5" />
                Become a Member
              </Link>
              <Link to="/programs" className="btn-secondary">
                Explore Our Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
