import { Gavel, HeartHandshake, BookOpen, Scale, ArrowRight, CheckCircle2, Sparkles, Users, HandHeart } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';

const programs = [
  {
    number: '01', icon: Gavel, title: 'Paralegal Support & Advocacy', subtitle: 'A guide through the system', image: IMAGES.judgeDesk,
    description: 'We assist laypersons and "barefoot lawyers" who are navigating complex legal proceedings without formal representation. Our trained advocates make the language of the law clearer, the process less intimidating, and every voice more informed.',
    points: ['Court process orientation and case preparation', 'Rights awareness for accused persons and families', 'Paralegal training and mentorship', 'Referrals to qualified legal professionals'],
  },
  {
    number: '02', icon: HeartHandshake, title: 'Rehabilitation & Reintegration', subtitle: 'A pathway back to belonging', image: IMAGES.inmateLetter,
    description: 'Justice does not end at the prison gate. We empower justice-impacted individuals with the knowledge, skills, and community support to re-enter society productively and rebuild lives with dignity.',
    points: ['In-prison legal literacy and peer support', 'Inmate-paralegal development programs', 'Family and community reintegration support', 'Post-release skills and referral networks'],
  },
  {
    number: '03', icon: BookOpen, title: 'Legal Literacy & Community Mediation', subtitle: 'Knowledge that prevents conflict', image: IMAGES.communityMeeting,
    description: 'We bring practical guidance on civil and criminal law directly to communities. Through workshops and mediation, we help people understand their rights, resolve disputes peacefully, and avoid preventable journeys through the courts.',
    points: ['Community legal education workshops', 'Civil and criminal law awareness', 'Restorative and alternative dispute resolution', 'Youth and school legal literacy programs'],
  },
];

export default function Programs() {
  return (
    <div>
      <section className="relative bg-forest-gradient pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15"><img src={IMAGES.gavelBook} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <div className="section-eyebrow text-gold-300 mb-5"><Sparkles className="w-4 h-4" /> What We Do</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">From Knowledge to Justice</h1>
            <p className="text-lg sm:text-xl text-sand-100/80 leading-relaxed max-w-2xl">Our work meets people where they are — in prisons, in communities, and at the moments when a little understanding can change everything.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand-50">
        <div className="container-page">
          <div className="space-y-12">
            {programs.map((program, i) => (
              <article key={program.number} className={`grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-soft bg-white ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative min-h-[320px] lg:min-h-[480px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent" />
                  <div className="absolute top-7 left-7 flex items-center gap-3">
                    <span className="text-5xl font-serif font-semibold text-gold-300/80">{program.number}</span>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold"><program.icon className="w-7 h-7 text-forest-950" strokeWidth={1.8} /></div>
                    <span className="text-xs uppercase tracking-widest text-white/60">Mwangaza wa Sheria</span>
                  </div>
                </div>
                <div className={`p-8 sm:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="section-eyebrow mb-3">{program.subtitle}</div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-forest-950 mb-5">{program.title}</h2>
                  <p className="text-forest-800/70 leading-relaxed mb-7">{program.description}</p>
                  <ul className="space-y-3">
                    {program.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm text-forest-800/80"><CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0" />{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src={IMAGES.volunteerBoxes} alt="" className="w-full h-full object-cover" /></div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 text-gold-300 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-5">There Is a Role for You</h2>
            <p className="text-lg text-sand-100/70 leading-relaxed mb-8">Our programs grow because people choose to show up — with time, expertise, resources, and the belief that every person deserves a fair chance.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4"><Link to="/contact" className="btn-primary"><HandHeart className="w-5 h-5" /> Get Involved</Link><Link to="/store" className="btn-secondary">Support Our Work <ArrowRight className="w-4 h-4" /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
