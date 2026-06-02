import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '', dienst: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white"
        style={{ backgroundColor: '#0F0F0F' }}
      >
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 opacity-60">Reserveer uw rit</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Contact</h1>
          <div className="w-16 h-0.5" style={{ backgroundColor: p }} />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: p }}>Gegevens</p>
                <div className="space-y-6">
                  {[
                    { label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                    { label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                    { label: 'Locatie', value: config.contact.address },
                    { label: 'Beschikbaarheid', value: config.contact.hours.weekday },
                  ].map(({ label, value, href }) => (
                    <div key={label} className="border-b border-gray-100 pb-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: config.colors.text }}>
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: config.colors.text }}>{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct bellen CTA */}
              <div className="p-6" style={{ backgroundColor: config.colors.text }}>
                <p className="text-white text-sm font-bold mb-1">Voorkeur voor telefonisch contact?</p>
                <p className="text-gray-400 text-xs mb-4">Wij zijn 24/7 bereikbaar voor uw rit.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-block px-6 py-3 text-sm font-bold text-black tracking-wide transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p }}
                >
                  {config.contact.phone}
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 border border-gray-100">
                  <div className="text-4xl mb-5" style={{ color: p }}>✓</div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: config.colors.text }}>
                    Aanvraag ontvangen
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: p }}>Uw gegevens</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Telefoon</label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">E-mailadres *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Dienst</label>
                    <select
                      value={form.dienst}
                      onChange={(e) => setForm({ ...form, dienst: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500 bg-white"
                    >
                      <option value="">Selecteer een dienst</option>
                      {config.services.map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-yellow-500 resize-none"
                      placeholder="Van, naar, datum, aantal personen..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-sm text-black tracking-wide transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur Aanvraag
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
