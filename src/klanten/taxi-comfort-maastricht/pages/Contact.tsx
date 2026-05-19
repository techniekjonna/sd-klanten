import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const a = config.colors.accent;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${config.colors.text} 0%, ${p} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact</h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Neem contact op of bel ons direct. Wij zijn 24/7 bereikbaar voor uw ritaanvraag.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-black" style={{ color: config.colors.text }}>Onze gegevens</h2>

              {[
                { icon: '📍', label: 'Locatie', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 text-white"
                    style={{ backgroundColor: p }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline" style={{ color: p }}>{value}</a>
                    ) : (
                      <p className="font-semibold" style={{ color: config.colors.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 text-white"
                  style={{ backgroundColor: p }}>
                  🕐
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Beschikbaarheid</p>
                  <p className="font-semibold" style={{ color: config.colors.text }}>24 uur per dag</p>
                  <p className="font-semibold" style={{ color: config.colors.text }}>7 dagen per week</p>
                </div>
              </div>

              {/* Direct bellen block */}
              <div className="rounded-2xl p-6 mt-4" style={{ backgroundColor: config.colors.primaryLight }}>
                <p className="font-black text-lg mb-2" style={{ color: config.colors.text }}>Liever direct bellen?</p>
                <p className="text-gray-500 text-sm mb-4">Wij staan altijd voor u klaar. Geen wachttijden.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="block w-full text-center py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: a }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 border-2 border-gray-100 rounded-2xl">
                  <div className="text-6xl mb-5">✅</div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: config.colors.text }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-black mb-2" style={{ color: config.colors.text }}>Stuur ons een bericht</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={e => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-200 transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>Telefoon</label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={e => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-200 transition-colors"
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>E-mailadres *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-200 transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>Dienst</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-200 transition-colors bg-white"
                    >
                      <option value="">Selecteer een dienst (optioneel)</option>
                      {config.services.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>Uw bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={e => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-200 transition-colors resize-none"
                      placeholder="Beschrijf uw ritaanvraag of vraag..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90 text-sm uppercase tracking-widest"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur bericht
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
