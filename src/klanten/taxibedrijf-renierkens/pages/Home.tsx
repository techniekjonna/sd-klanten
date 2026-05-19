import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';
import type { BookingForm } from '../types';

const p = config.colors.primary;
const accent = config.colors.accent;

/* ── SVG icon helpers ── */
const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
  </svg>
);

const IconBadge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const IconMap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
  </svg>
);

const featureIcons: Record<string, JSX.Element> = {
  shield: <IconShield />,
  badge: <IconBadge />,
  map: <IconMap />,
  clock: <IconClock />,
};

const serviceIcons: Record<string, JSX.Element> = {
  car: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H3a3 3 0 106 0h3.75a.75.75 0 00.75-.75V15z" />
      <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
      <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
  ),
  plane: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
    </svg>
  ),
};

/* ── Booking Widget ── */
const BookingWidget = () => {
  const [form, setForm] = useState<BookingForm>({
    van: '',
    naar: '',
    datum: '',
    tijd: '',
    passagiers: 1,
    retour: false,
    bagage: 'nee',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: config.colors.primaryLight }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: p }}>
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: config.colors.text }}>Aanvraag ontvangen!</h3>
        <p className="text-gray-500 text-sm mb-4">Wij nemen zo snel mogelijk contact met u op.</p>
        <p className="text-sm font-medium" style={{ color: p }}>
          Of bel direct:{' '}
          <a href="tel:0455327470" className="underline">045 532 7470</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Widget header */}
      <div className="px-6 py-4 border-b border-gray-100" style={{ backgroundColor: config.colors.primaryLight }}>
        <h3 className="text-lg font-bold" style={{ color: config.colors.text }}>
          Rit Aanvragen
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">Vul in en wij nemen contact op met de ritprijs</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Van */}
        <div className="relative">
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide text-gray-500">
            Vertrekadres
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: p }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              required
              value={form.van}
              onChange={(e) => setForm({ ...form, van: e.target.value })}
              placeholder="Bijv. Margraten, Maastricht..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ ['--tw-ring-color' as string]: p }}
            />
          </div>
        </div>

        {/* Naar */}
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide text-gray-500">
            Bestemming
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: accent }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.841a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.061l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 101.061 1.06l8.69-8.689z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
            <input
              type="text"
              required
              value={form.naar}
              onChange={(e) => setForm({ ...form, naar: e.target.value })}
              placeholder="Bijv. Schiphol, Brussel..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ ['--tw-ring-color' as string]: p }}
            />
          </div>
        </div>

        {/* Datum + Tijd */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide text-gray-500">
              Datum
            </label>
            <input
              type="date"
              required
              value={form.datum}
              onChange={(e) => setForm({ ...form, datum: e.target.value })}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ ['--tw-ring-color' as string]: p }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide text-gray-500">
              Tijd
            </label>
            <input
              type="time"
              required
              value={form.tijd}
              onChange={(e) => setForm({ ...form, tijd: e.target.value })}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ ['--tw-ring-color' as string]: p }}
            />
          </div>
        </div>

        {/* Passagiers */}
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide text-gray-500">
            Passagiers
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setForm({ ...form, passagiers: Math.max(1, form.passagiers - 1) })}
              className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-lg font-bold text-gray-500 hover:border-gray-400 transition-colors"
            >
              &minus;
            </button>
            <span className="w-8 text-center font-bold text-base" style={{ color: config.colors.text }}>
              {form.passagiers}
            </span>
            <button
              type="button"
              onClick={() => setForm({ ...form, passagiers: Math.min(8, form.passagiers + 1) })}
              className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-lg font-bold text-gray-500 hover:border-gray-400 transition-colors"
            >
              +
            </button>
            <span className="text-xs text-gray-400 ml-1">max. 8 personen</span>
          </div>
        </div>

        {/* Retour + Bagage */}
        <div className="flex flex-wrap gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.retour}
              onChange={(e) => setForm({ ...form, retour: e.target.checked })}
              className="w-4 h-4 rounded accent-green-700"
            />
            <span className="text-sm text-gray-700 font-medium">Retourrit</span>
          </label>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 font-medium">Bagage:</span>
            {(['ja', 'nee'] as const).map((opt) => (
              <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="bagage"
                  value={opt}
                  checked={form.bagage === opt}
                  onChange={() => setForm({ ...form, bagage: opt })}
                  className="w-4 h-4 accent-green-700"
                />
                <span className="text-sm capitalize text-gray-700">{opt === 'ja' ? 'Ja' : 'Nee'}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: p }}
        >
          Rit Aanvragen
        </button>

        <p className="text-xs text-gray-400 text-center leading-relaxed">
          Online reserveringen minimaal 24 uur van tevoren.{' '}
          <a href="tel:0455327470" className="font-semibold underline" style={{ color: p }}>
            Spoedritten? Bel direct.
          </a>
        </p>
      </form>
    </div>
  );
};

/* ── Home page ── */
export const Home = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Gradient overlay: dark left, lighter right */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(10,30,18,0.88) 0%, rgba(10,30,18,0.65) 55%, rgba(10,30,18,0.3) 100%)' }}
        />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
            {/* Left: headline + CTAs */}
            <div className="text-white">
              {/* Label pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: 'rgba(200,150,62,0.25)', color: accent, border: `1px solid ${accent}` }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                28+ jaar in Zuid-Limburg
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
                {config.hero.title}{' '}
                <span style={{ color: accent }}>{config.hero.highlight}</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                {config.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0455327470"
                  className="inline-flex items-center gap-2 px-7 py-4 font-bold text-white rounded-xl shadow-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                  </svg>
                  Bel direct: 045 532 7470
                </a>
                <Link
                  to={config.basePath + '/diensten'}
                  className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-white border-2 border-white rounded-xl hover:bg-white transition-colors"
                  style={{ ['--hover-color' as string]: config.colors.text }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = config.colors.text; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                >
                  Bekijk Diensten
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: booking widget */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: config.colors.text }}>
              Waarom kiezen voor Renierkens?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Vier redenen waarom reizigers in Zuid-Limburg al 28 jaar op ons vertrouwen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-7 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  {featureIcons[f.icon] ?? <span className="text-2xl">{f.icon}</span>}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: config.colors.text }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="py-16" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: config.colors.text }}>
              Onze Diensten
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Van dagelijkse ritten tot luchthavens en zorgvervoer — wij hebben een passende oplossing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.services.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  {serviceIcons[s.icon] ?? <span className="text-2xl">{s.icon}</span>}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                {s.priceLabel && (
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: config.colors.primaryLight, color: p }}
                  >
                    {s.priceLabel}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={config.basePath + '/diensten'}
              className="inline-block px-8 py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 shadow-md"
              style={{ backgroundColor: p }}
            >
              Alle Diensten Bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1708344377484-cb444e6d665d?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Taxibedrijf Renierkens - Zuid-Limburg"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              {/* Gold accent line */}
              <div
                className="w-12 h-1 rounded-full mb-6"
                style={{ backgroundColor: accent }}
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: config.colors.text }}>
                Al 28 jaar uw vaste<br />partner in het Heuvelland
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {config.about.story}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {config.about.mission}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {config.about.values.map((v, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{ backgroundColor: config.colors.primaryLight, color: p }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                    {v}
                  </span>
                ))}
              </div>
              <Link
                to={config.basePath + '/over-ons'}
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: p }}
              >
                Meer over ons
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: config.colors.text }}>
              Wat onze passagiers zeggen
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Beoordelingen van vaste klanten uit de regio Zuid-Limburg.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill={accent}>
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                {/* Quote mark */}
                <p className="text-3xl leading-none mb-2" style={{ color: config.colors.primaryLight }}>"</p>
                <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: p }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: config.colors.text }}>{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spoedrit CTA banner ── */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: p }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-extrabold mb-2">Spoedrit nodig?</h2>
              <p className="text-lg opacity-90">
                Wij zijn 24 uur per dag, 7 dagen per week bereikbaar. Bel direct voor een directe rit.
              </p>
            </div>
            <a
              href="tel:0455327470"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: accent, color: '#fff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
              </svg>
              045 532 7470
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
