import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const h = config.contact.hours;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', dienst: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="relative py-24 text-white text-center" style={{ backgroundColor: config.colors.text }}>
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-60">Beatrix Nails & Beauty</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-xl mx-auto opacity-70">
            Maak een afspraak of stel uw vraag. Wij zijn er voor u!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium hover:underline" style={{ color: p }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">Openingstijden</p>
                  <div className="space-y-1 text-sm">
                    {[
                      ['Maandag', h.maandag],
                      ['Dinsdag', h.dinsdag],
                      ['Woensdag', h.woensdag],
                      ['Donderdag', h.donderdag],
                      ['Vrijdag', h.vrijdag],
                      ['Zaterdag', h.zaterdag],
                      ['Zondag', h.zondag],
                    ].map(([dag, tijd]) => (
                      <div key={dag} className="flex justify-between gap-6">
                        <span className="text-gray-500">{dag}</span>
                        <span className="font-medium" style={{ color: tijd === 'Gesloten' ? '#9ca3af' : config.colors.text }}>
                          {tijd}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 rounded-3xl border-2" style={{ borderColor: config.colors.primaryLight }}>
                  <div className="text-6xl mb-4">🌸</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>
                    Bedankt voor uw bericht!
                  </h3>
                  <p className="text-gray-500">
                    Wij nemen zo snel mogelijk contact met u op om een afspraak in te plannen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none transition-colors"
                        style={{ borderColor: config.colors.primaryLight }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = p; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = config.colors.primaryLight; }}
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none transition-colors"
                        style={{ borderColor: config.colors.primaryLight }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = p; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = config.colors.primaryLight; }}
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none transition-colors"
                      style={{ borderColor: config.colors.primaryLight }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = p; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = config.colors.primaryLight; }}
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Gewenste dienst
                    </label>
                    <select
                      value={form.dienst}
                      onChange={(e) => setForm({ ...form, dienst: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none transition-colors bg-white"
                      style={{ borderColor: config.colors.primaryLight }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = p; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = config.colors.primaryLight; }}
                    >
                      <option value="">Kies een dienst...</option>
                      <option value="gelpolish">Gelpolish – Gellak handen</option>
                      <option value="nieuwe-set-french">Gel/Acryl – Nieuwe set French</option>
                      <option value="nieuwe-set-naturel">Gel/Acryl – Nieuwe set Naturel/Kleur</option>
                      <option value="opvullen">Gel/Acryl – Nabehandeling/opvullen</option>
                      <option value="acrylnagels">Acrylnagels – verwijderen & opnieuw</option>
                      <option value="kunstnagel-los">Nieuwe kunstnagel los</option>
                      <option value="kunstnagels-verwijderen">Kunstnagels verwijderen</option>
                      <option value="nailart-3d">Nailart – 3D nail art</option>
                      <option value="nailart-gelpolish">Nailart – Gelpolish nail art</option>
                      <option value="steentjes">Steentjes per nagel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none transition-colors resize-none"
                      style={{ borderColor: config.colors.primaryLight }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = p; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = config.colors.primaryLight; }}
                      placeholder="Wanneer bent u beschikbaar? Heeft u nog vragen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white rounded-full transition-opacity hover:opacity-90 shadow-md"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur Bericht 🌸
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Uw gegevens worden nooit gedeeld met derden.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / address banner */}
      <section className="py-12" style={{ backgroundColor: config.colors.lightPink }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: p }}>
            Kom langs
          </p>
          <h2 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>
            {config.contact.address}
          </h2>
          <p className="text-gray-500 text-sm">Sittard, Holland</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(config.contact.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-8 py-3 font-semibold text-white rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: p }}
          >
            📍 Routebeschrijving
          </a>
        </div>
      </section>
    </Layout>
  );
};
