import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const accent = config.colors.accent;

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{ backgroundColor: config.colors.text }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: accent }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide"
            style={{ backgroundColor: 'rgba(200,150,62,0.2)', color: accent, border: `1px solid ${accent}` }}
          >
            24/7 Bereikbaar
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
            Voor ritten, vragen of contractvervoer — wij zijn dag en nacht bereikbaar.
          </p>
        </div>
      </section>

      {/* Phone hero block */}
      <section style={{ backgroundColor: p }} className="py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white opacity-80 text-sm mb-2">Direct een taxi nodig?</p>
          <a
            href="tel:0455327470"
            className="inline-flex items-center gap-3 text-3xl font-extrabold text-white hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
            </svg>
            045 532 7470
          </a>
          <p className="text-white opacity-70 text-sm mt-2">{config.contact.hours.weekday}</p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>
                Onze Gegevens
              </h2>

              {/* Address */}
              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Adres</p>
                  <p className="font-medium text-sm" style={{ color: config.colors.text }}>
                    {config.contact.address}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">KVK: {config.contact.kvk}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.5 11.5 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Telefoon</p>
                  <a
                    href="tel:0455327470"
                    className="font-bold text-base hover:underline"
                    style={{ color: p }}
                  >
                    045 532 7470
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">E-mail</p>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="font-medium text-sm hover:underline"
                    style={{ color: p }}
                  >
                    {config.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight, color: p }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Bereikbaarheid</p>
                  <p className="font-medium text-sm" style={{ color: config.colors.text }}>
                    Elke dag: {config.contact.hours.weekday}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Voor spoedritten kunt u altijd bellen.
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden border border-gray-100 mt-4"
                style={{ height: '200px', backgroundColor: config.colors.primaryLight }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" style={{ color: p }}>
                    <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
                  </svg>
                  <p className="font-semibold text-sm" style={{ color: config.colors.text }}>
                    Taxibedrijf Renierkens B.V.
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">{config.contact.address}</p>
                  <a
                    href="https://maps.google.com/?q=Haegerhofstraat+45+K,+6269+DP+Margraten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold underline"
                    style={{ color: p }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div
                  className="px-8 py-5 border-b border-gray-100"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  <h3 className="font-bold text-lg" style={{ color: config.colors.text }}>
                    Stuur een bericht
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Voor offertes, vragen of contractvervoer. Wij reageren binnen 1 werkdag.
                  </p>
                </div>

                <div className="p-8">
                  {sent ? (
                    <div className="text-center py-12">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                        style={{ backgroundColor: config.colors.primaryLight }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" style={{ color: p }}>
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2" style={{ color: config.colors.text }}>
                        Bericht ontvangen!
                      </h4>
                      <p className="text-gray-500 mb-4">
                        Wij nemen zo snel mogelijk contact met u op.
                      </p>
                      <p className="text-sm">
                        Liever direct contact?{' '}
                        <a href="tel:0455327470" className="font-bold underline" style={{ color: p }}>
                          045 532 7470
                        </a>
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
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                            style={{ ['--tw-ring-color' as string]: p }}
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
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                            placeholder="045 ..."
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
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                          placeholder="uw@email.nl"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                          Uw bericht *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.bericht}
                          onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                          placeholder="Omschrijf uw vraag of gewenste rit..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90 shadow-md"
                        style={{ backgroundColor: p }}
                      >
                        Verstuur Bericht
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        * Verplichte velden. Uw gegevens worden niet gedeeld met derden.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Spoedrit inline note */}
              <div
                className="mt-6 rounded-xl p-5 flex items-center gap-4"
                style={{ backgroundColor: config.colors.primaryLight, borderLeft: `4px solid ${accent}` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: accent }}>
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 1.999-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.501-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-sm" style={{ color: config.colors.text }}>
                    Spoedrit of last-minute boeking?
                  </p>
                  <p className="text-sm text-gray-600">
                    Bel direct op{' '}
                    <a href="tel:0455327470" className="font-bold underline" style={{ color: p }}>
                      045 532 7470
                    </a>
                    {' '}&mdash; wij zijn 24/7 bereikbaar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
