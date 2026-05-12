import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', van: '', naar: '', datum: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 text-white text-center" style={{ backgroundColor: dark }}>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: p }} />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact & Reservering</h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Vraag direct een rit aan of stel ons uw vraag. Wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold mb-6" style={{ color: dark }}>Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-sm hover:underline" style={{ color: p }}>{value}</a>
                    ) : (
                      <p className="font-medium text-sm" style={{ color: dark }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 items-start pt-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Openingstijden</p>
                  <p className="font-medium text-sm" style={{ color: dark }}>Ma–Vr: {config.contact.hours.weekday}</p>
                  <p className="font-medium text-sm" style={{ color: dark }}>Za–Zo: {config.contact.hours.weekend}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{config.contact.hours.note}</p>
                </div>
              </div>

              {/* Direct bellen CTA */}
              <div className="mt-6 p-5 rounded-2xl border-2 border-dashed text-center" style={{ borderColor: `${p}50` }}>
                <p className="text-sm text-gray-500 mb-3">Spoed? Bel ons direct.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">🚖</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: dark }}>Aanvraag ontvangen!</h3>
                  <p className="text-gray-500 text-sm">Wij nemen zo snel mogelijk contact met u op ter bevestiging van uw rit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 space-y-4">
                    <p className="text-sm font-semibold" style={{ color: dark }}>Ritgegevens</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Van (adres)</label>
                        <input
                          type="text"
                          value={form.van}
                          onChange={(e) => setForm({ ...form, van: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2"
                          placeholder="Vertrekadres"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Naar (adres)</label>
                        <input
                          type="text"
                          value={form.naar}
                          onChange={(e) => setForm({ ...form, naar: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2"
                          placeholder="Bestemmingsadres"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Gewenste datum & tijd</label>
                      <input
                        type="datetime-local"
                        value={form.datum}
                        onChange={(e) => setForm({ ...form, datum: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Uw naam *</label>
                      <input
                        required
                        type="text"
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        placeholder="Voor- en achternaam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Telefoon *</label>
                      <input
                        required
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">E-mailadres *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Opmerking / extra info</label>
                    <textarea
                      rows={3}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      placeholder="Bijv. rolstoel nodig, retour, bagage..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    🚖 Rit aanvragen
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Wij nemen contact op ter bevestiging.
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
