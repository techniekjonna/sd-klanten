import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

// Shared gradient backgrounds
const gradHero  = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 50%, ${c.gradientLight} 100%)`;
const gradDark  = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;
const gradMid   = `linear-gradient(135deg, ${c.gradientFrom}DD 0%, ${c.gradientMid}DD 100%)`;

export const Home = () => (
  <Layout>

    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" style={{ background: gradHero }}>
      {/* dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      <div className="relative container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/60 mb-6">
              <span className="w-6 h-px bg-white/40" />
              Geleen · Sittard-Geleen · Limburg
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              Jouw rijbewijs,<br/>
              <span style={{ color: c.gradientLight }}>onze trots.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
              30+ jaar ervaring. Moderne Mercedes lesauto. <strong className="text-white font-semibold">90% slaagt de eerste keer</strong> — ver boven het regionale gemiddelde.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={config.basePath + '/contact'}
                className="px-8 py-4 font-bold text-sm rounded-2xl shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                style={{ backgroundColor: 'white', color: c.accent }}>
                Gratis kennismakingsgesprek
              </Link>
              <Link to={config.basePath + '/over-van-der-sande'}
                className="px-8 py-4 font-semibold text-sm rounded-2xl border border-white/30 text-white hover:bg-white/10 transition-all">
                Even voorstellen →
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={config.logoUrl} alt="Autorijschool van der Sande"
              className="w-64 h-64 md:w-80 md:h-80 object-contain opacity-80"
              style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>

      {/* wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48L1440 48L1440 16C1080 48 720 0 360 24C180 36 90 12 0 16Z" fill={c.primaryLight}/>
        </svg>
      </div>
    </section>

    {/* ── STATS ────────────────────────────────────────────────── */}
    <section style={{ backgroundColor: c.primaryLight }} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-3xl overflow-hidden"
          style={{ backgroundColor: `${c.gradientFrom}33` }}>
          {config.stats.map((s, i) => (
            <div key={i} className="py-12 px-8 text-center" style={{ backgroundColor: c.primaryLight }}>
              <div className="text-6xl font-extrabold leading-none mb-3" style={{ color: c.gradientFrom }}>{s.value}</div>
              <p className="text-sm font-medium" style={{ color: c.textBody }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTIES — modern numbered list ───────────────────────── */}
    <section style={{ background: gradMid }} className="py-24 relative overflow-hidden">
      {/* faint circle decoration */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10 opacity-40" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10 opacity-40" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4 block">Wat wij bieden</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 leading-tight">
            Van nul tot rijbewijs —<br/>wij regelen het.
          </h2>
        </div>

        <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          {config.sections.map((s, i) => (
            <Link key={s.path} to={config.basePath + s.path}
              className="group flex items-center gap-8 py-7 transition-all hover:pl-2"
              style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              {/* number */}
              <span className="text-5xl font-black leading-none select-none flex-shrink-0 w-16 text-right"
                style={{ color: 'rgba(255,255,255,0.15)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90">{s.label}</h3>
                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{s.desc}</p>
              </div>
              {/* arrow */}
              <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all text-2xl flex-shrink-0">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── WAAROM VAN DER SANDE — bold typographic stats ────────── */}
    <section style={{ backgroundColor: c.primaryLight }} className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 items-baseline mb-16">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c.primary }}>Waarom van der Sande?</span>
          <div className="flex-1 h-px hidden lg:block" style={{ backgroundColor: `${c.gradientFrom}30` }} />
          <Link to={config.basePath + '/over-van-der-sande'}
            className="text-xs font-bold tracking-wide hover:opacity-70 transition-opacity"
            style={{ color: c.primary }}>Leer Mike kennen →</Link>
        </div>

        {/* 4 feiten als grote typografische rijen */}
        {[
          { stat: '90%',   label: 'slaagt de eerste keer',    desc: 'Ver boven het regionale gemiddelde van 55–60% in Sittard-Geleen.' },
          { stat: '30+',   label: 'jaar rijervaring',         desc: 'Doorgewinterde kennis die zorgt dat jij aantoonbaar minder lessen nodig hebt.' },
          { stat: 'MB',    label: 'Moderne Mercedes lesauto', desc: 'Gloednieuw voertuig met de nieuwste veiligheidssystemen en airco.' },
          { stat: '100%',  label: 'inzet voor jouw rijbewijs', desc: 'Op maat begeleiding — regulier of spoed — in jouw tempo.' },
        ].map(({ stat, label, desc }, i) => (
          <div key={i}
            className="grid grid-cols-12 gap-6 py-8 border-t items-center"
            style={{ borderColor: `${c.gradientFrom}22` }}>
            {/* Groot stat getal */}
            <div className="col-span-3 lg:col-span-2">
              <span className="text-4xl md:text-5xl font-extrabold leading-none" style={{ color: c.gradientFrom }}>
                {stat}
              </span>
            </div>
            {/* Label + beschrijving */}
            <div className="col-span-9 lg:col-span-7">
              <h3 className="text-lg font-extrabold mb-1" style={{ color: c.text }}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.textBody }}>{desc}</p>
            </div>
            {/* Rechter accent-lijn */}
            <div className="hidden lg:block col-span-3 h-px" style={{ backgroundColor: `${c.gradientFrom}20` }} />
          </div>
        ))}
      </div>
    </section>

    {/* ── CTA BANNER ───────────────────────────────────────────── */}
    <section className="py-24 text-white relative overflow-hidden" style={{ background: gradDark }}>
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="relative container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Klaar om te starten?</h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Neem vandaag nog contact op voor een gratis en vrijblijvend gesprek over jouw rijopleiding in Geleen.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={config.basePath + '/contact'}
            className="px-10 py-4 font-bold rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            style={{ backgroundColor: 'white', color: c.accent }}>
            Maak een afspraak
          </Link>
          <Link to={config.basePath + '/prijzen'}
            className="px-10 py-4 font-semibold rounded-2xl border border-white/30 hover:bg-white/10 transition-all">
            Bekijk prijzen
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
