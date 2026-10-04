import { Scale, Heart, Shield, BookOpen, Users, ArrowRight, Quote, Sparkles, HandHeart, Target, GraduationCap, HeartHandshake } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';

const values = [
  { icon: Shield, title: 'Integrity', text: 'We act with honesty, transparency, and courage — even when the path is difficult.' },
  { icon: Heart, title: 'Rehabilitation', text: 'We believe people can change, heal, and contribute meaningfully to their communities.' },
  { icon: Users, title: 'Non-discrimination', text: 'Every person deserves dignity and access to justice, regardless of their background.' },
  { icon: BookOpen, title: 'Legal Literacy', text: 'Knowledge of the law is a fundamental tool for protecting rights and building fair communities.' },
];

const objectives = [
  { icon: GraduationCap, title: 'Legal Literacy Programs', text: 'Provide basic legal literacy programs to equip communities with knowledge of their rights and the justice system.' },
  { icon: Heart, title: 'Prisoner Rehabilitation', text: 'Advocate for the rehabilitation and reintegration of incarcerated individuals into society.' },
  { icon: HeartHandshake, title: 'Paralegal Support', text: 'Offer paralegal support to vulnerable groups navigating complex legal proceedings.' },
];

export default function About() {
  return (
    <div>
      {/* Page hero */}
      <section className="relative bg-forest-gradient pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMAGES.communityGathering} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <div className="section-eyebrow text-gold-300 mb-5"><Sparkles className="w-4 h-4" /> Who We Are</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">The Light We Carry</h1>
            <p className="text-lg sm:text-xl text-sand-100/80 leading-relaxed max-w-2xl">
              Mwangaza wa Sheria is a Kenyan organization born from lived experience and built on a simple conviction: justice should never depend on what you can afford.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="py-24 bg-sand-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft border-l-4 border-gold-400 card-hover">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-gold-600" />
              </div>
              <div className="section-eyebrow mb-3">Our Mission</div>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-forest-950 mb-4">Compassionate Legal Aid</h2>
              <p className="text-forest-800/70 leading-relaxed">
                To provide high-quality, compassionate legal aid, representation, and mediation services to marginalized individuals.
              </p>
            </div>
            <div className="bg-forest-900 rounded-3xl p-8 sm:p-10 shadow-card border-l-4 border-gold-400 card-hover">
              <div className="w-12 h-12 rounded-2xl bg-gold-300/20 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-gold-300" />
              </div>
              <div className="section-eyebrow text-gold-300 mb-3">Our Vision</div>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-4">Justice for All</h2>
              <p className="text-sand-100/70 leading-relaxed">
                Equitable access to justice for all, regardless of socio-economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic objectives */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-eyebrow justify-center mb-4"><Target className="w-4 h-4" /> Our Path Forward</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-forest-950 mb-4">Strategic Objectives</h2>
            <p className="text-forest-800/70">Three pillars guide everything we do — from the classroom to the courtroom to the community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, i) => (
              <div key={obj.title} className="bg-sand-50 rounded-3xl p-8 shadow-soft card-hover animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold mb-6">
                  <obj.icon className="w-7 h-7 text-forest-950" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-forest-900 mb-3">{obj.title}</h3>
                <p className="text-sm text-forest-800/65 leading-relaxed">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders story */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-card aspect-[3/4]">
                    <img src={IMAGES.founderMusila} alt="Erick Musila Makau, co-founder of Mwangaza wa Sheria" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-card aspect-[3/4]">
                    <img src={IMAGES.founderMomanyi} alt="Dennis Momanyi Ongera, co-founder of Mwangaza wa Sheria" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gold-gradient rounded-full px-5 py-2.5 shadow-gold whitespace-nowrap">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-950">From experience to action</span>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="section-eyebrow mb-4"><HandHeart className="w-4 h-4" /> The Founders' Story</div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-forest-950 mb-6">Two Lives Changed.<br /><span className="text-forest-600">A Movement Born.</span></h2>
              <div className="space-y-5 text-forest-800/75 leading-relaxed">
                <p>
                  Mwangaza wa Sheria was founded by <strong className="text-forest-900">Erick Musila Makau</strong> and <strong className="text-forest-900">Dennis Momanyi Ongera</strong> — two men whose understanding of justice was forged inside Kisumu Maximum Prison.
                </p>
                <p>
                  As inmate-paralegals, they saw first-hand how a lack of legal knowledge could turn a difficult moment into a life sentence. They also discovered something powerful: when people understand the law, they can begin to change the course of their lives.
                </p>
                <p>
                  After their rehabilitation and reintegration into society, Erick and Dennis made a promise — to take the knowledge that transformed their own lives and place it in the hands of those who need it most. Today, they are national champions for legal empowerment, leading an organization that believes every person deserves a second chance and a fair hearing.
                </p>
              </div>
              <div className="mt-8 pl-5 border-l-2 border-gold-400">
                <Quote className="w-6 h-6 text-gold-500 mb-2" />
                <p className="font-serif text-lg italic text-forest-900">"Your past may explain your story, but it does not have to decide your future."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-sand-100">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-eyebrow justify-center mb-4"><Heart className="w-4 h-4" /> What Guides Us</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-forest-950 mb-4">Our Core Values</h2>
            <p className="text-forest-800/70">These are not just words on a wall. They are the principles that shape every conversation, program, and decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={value.title} className="bg-white rounded-2xl p-7 shadow-soft card-hover" style={{ animationDelay: `${i * 0.1}s` }}>
                <value.icon className="w-8 h-8 text-gold-500 mb-5" strokeWidth={1.6} />
                <h3 className="text-xl font-serif font-semibold text-forest-900 mb-3">{value.title}</h3>
                <p className="text-sm text-forest-800/65 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-900">
        <div className="container-page text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-5">Help Us Carry the Light</h2>
          <p className="text-sand-100/70 max-w-xl mx-auto mb-8">Whether you volunteer your time, share your skills, or simply spread the word, there is a place for you in this movement.</p>
          <Link to="/contact" className="btn-primary">Join the Movement <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
