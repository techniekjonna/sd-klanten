import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const OverOns = () => (
  <Layout>
    {/* Hero banner */}
    <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Over ons</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Taxi Centrale Service</h1>
        <p className="text-white/65 max-w-xl mx-auto text-sm leading-relaxed">
          Uw vertrouwde taxibedrijf in Kerkrade — lokaal verankerd, altijd bereikbaar, persoonlijk en betrouwbaar.
        </p>
      </div>
    </section>

    {/* Story + mission + image */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Ons verhaal</span>
            <h2 className="text-3xl font-black mt-2 mb-5 tracking-tight" style={{ color: config.colors.text }}>
              Kerkrade's eigen taxibedrijf
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">{config.about.story}</p>
            <p className="text-gray-600 leading-relaxed text-sm">{config.about.mission}</p>
          </div>
          <div className="relative">
            <img
              src={config.about.image}
              alt="Taxi Centrale Service Kerkrade"
              className="w-full rounded-2xl shadow-xl object-cover h-80"
            />
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl px-6 py-4 shadow-xl"
              style={{ backgroundColor: config.colors.accent }}
            >
              <p className="font-black text-2xl" style={{ color: config.colors.dark }}>T.C.S.</p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: config.colors.dark }}>Kerkrade</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16" style={{ backgroundColor: config.colors.light }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Onze waarden</span>
          <h2 className="text-2xl md:text-3xl font-black mt-2 tracking-tight" style={{ color: config.colors.text }}>Waar TCS voor staat</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.about.values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-sm"
                style={{ backgroundColor: config.colors.primary }}
              >
                {i + 1}
              </div>
              <p className="font-semibold text-sm" style={{ color: config.colors.text }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service area + company info */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service area */}
          <div className="rounded-2xl p-7 border-2" style={{ borderColor: config.colors.light }}>
            <h3 className="font-black text-lg mb-4" style={{ color: config.colors.text }}>Ons rijgebied</h3>
            <div className="flex flex-wrap gap-2">
              {config.serviceArea.map(area => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: config.colors.light, color: config.colors.primary }}
                >
                  {area}
                </span>
              ))}
              <span
                className="px-3 py-1.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: config.colors.primary, color: '#fff' }}
              >
                & heel Nederland
              </span>
            </div>
          </div>

          {/* Bedrijfsgegevens */}
          <div className="rounded-2xl p-7 border-2" style={{ borderColor: config.colors.light }}>
            <h3 className="font-black text-lg mb-4" style={{ color: config.colors.text }}>Bedrijfsgegevens</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5 shrink-0">🏢</span>
                <div>
                  <p className="font-bold" style={{ color: config.colors.text }}>Taxi Centrale Service (T.C.S.)</p>
                  <p className="text-gray-500">{config.contact.address}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base shrink-0">📞</span>
                <a href={`tel:${config.contact.phone}`} className="font-semibold hover:underline" style={{ color: config.colors.primary }}>
                  {config.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base shrink-0">✉️</span>
                <a href={`mailto:${config.contact.email}`} className="font-semibold hover:underline text-sm" style={{ color: config.colors.primary }}>
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base shrink-0">🕐</span>
                <span className="font-semibold" style={{ color: config.colors.text }}>24/7 bereikbaar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-md border-2" style={{ borderColor: config.colors.light }}>
          <iframe
            title="TCS Locatie Kerkrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5!2d6.0700!3d50.8666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b8a09f6b7c0d%3A0x1!2sLocht+75%2FA%2C+6466GT+Kerkrade!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-3 tracking-tight">Maak kennis met TCS</h2>
        <p className="text-white/55 text-sm mb-7 max-w-md mx-auto">
          Heeft u vragen of wilt u een rit reserveren? Bel ons direct — wij staan altijd voor u klaar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.contact.phone}`}
            className="px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
          >
            Bel: {config.contact.phoneDisplay}
          </a>
          <Link
            to={config.basePath + '/contact'}
            className="px-8 py-3.5 border-2 border-white/25 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm"
          >
            Stuur een bericht
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);
