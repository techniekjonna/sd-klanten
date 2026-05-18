import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const cfg = config as any;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="relative py-20 text-white text-center" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Contact</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Neem contact op voor een rit of informatie. Wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: cfg.contact.phoneDisplay, href: `tel:${cfg.contact.phone}` },
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
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline" style={{ color: p }}>{value}</a>
                    ) : (
                      <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Bereikbaarheid</p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    {config.contact.hours.weekday}
                  </p>
                  <p className="font-medium" style={{ color: config.colors.text }}>
                    {config.contact.hours.weekend}
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl p-5 mt-2"
                style={{ backgroundColor: '#E8A020' + '22', borderLeft: '4px solid #E8A020' }}
              >
                <p className="text-sm font-semibold" style={{ color: config.colors.text }}>
                  Spoed of directe boeking?
                </p>
                <a
                  href={`tel:${cfg.contact.phone}`}
                  className="text-lg font-black hover:underline block mt-1"
                  style={{ color: p }}
                >
                  {cfg.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border-2 border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>Naam *</label>
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
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>Telefoon</label>
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
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>E-mailadres *</label>
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
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>Uw bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      placeholder="Van/naar, datum, aantal personen..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur Bericht
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
    </Layout>
  );
};
