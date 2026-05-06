import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const pd = config.colors.primaryDark;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="relative py-24 text-white text-center" style={{ backgroundColor: pd }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Heeft u een vraag? Wij reageren altijd binnen 1 werkdag. Of neem gerust direct contact op.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>
                Onze Gegevens
              </h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
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
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-green-100"
                >
                  💬
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a
                    href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-green-600 hover:underline"
                  >
                    Stuur een bericht
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-sm text-gray-400">Bereikbaar</p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    Ma–Vr: {config.contact.hours.weekday}
                  </p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    Za–Zo: {config.contact.hours.weekend}
                  </p>
                </div>
              </div>

              {/* Bedrijfsgegevens blok */}
              <div
                className="p-5 rounded-xl mt-4 text-sm space-y-1"
                style={{ backgroundColor: config.colors.primaryLight }}
              >
                <p className="font-bold mb-2" style={{ color: pd }}>Bedrijfsgegevens</p>
                <p className="text-gray-600"><span className="text-gray-500">KvK:</span> {config.kvk}</p>
                <p className="text-gray-600"><span className="text-gray-500">Rechtsvorm:</span> Eenmanszaak</p>
                <p className="text-gray-600"><span className="text-gray-500">Vestiging:</span> Geleen, Zuid-Limburg</p>
              </div>

              <div className="pt-2">
                <Link
                  to={config.basePath + '/afspraak'}
                  className="inline-block px-6 py-3 font-semibold text-white rounded-xl text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p }}
                >
                  Direct een afspraak maken →
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-500">
                    Wij nemen binnen 1 werkdag contact met u op. Tot snel!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                    Stuur ons een bericht
                  </h3>
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
                      rows={6}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      placeholder="Waar kunnen wij u mee helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur Bericht
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Uw gegevens worden nooit gedeeld met derden. Zie onze privacyverklaring.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
