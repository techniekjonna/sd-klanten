import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section
        className="py-16 text-white"
        style={{ backgroundColor: config.colors.primary }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contact</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Bel ons direct of stuur een bericht. Wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-extrabold mb-8" style={{ color: config.colors.primary }}>
                Bereikbaarheid
              </h2>
              <div className="space-y-5">
                {[
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                  { icon: '🕐', label: 'Beschikbaar', value: '24 uur per dag, 7 dagen per week', href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: `${config.colors.accent}20` }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-sm hover:opacity-70 transition-opacity"
                          style={{ color: config.colors.primary }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: config.colors.primary }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-xl p-6 text-white"
                style={{ backgroundColor: config.colors.accent }}
              >
                <p className="font-bold text-lg mb-1">Direct een taxi?</p>
                <p className="text-white/80 text-sm mb-4">Bel ons — binnen 15 minuten staan wij voor uw deur.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-block bg-white font-bold px-5 py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90"
                  style={{ color: config.colors.primary }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-extrabold mb-8" style={{ color: config.colors.primary }}>
                Stuur een bericht
              </h2>
              {sent ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 text-white"
                    style={{ backgroundColor: config.colors.accent }}
                  >
                    ✓
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: config.colors.primary }}>
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-500 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
                >
                  {[
                    { id: 'naam', label: 'Naam', type: 'text', placeholder: 'Uw volledige naam', key: 'naam' },
                    { id: 'telefoon', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 ...', key: 'telefoon' },
                    { id: 'email', label: 'E-mailadres', type: 'email', placeholder: 'uw@email.nl', key: 'email' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Bericht
                    </label>
                    <textarea
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      placeholder="Beschrijf uw vraag of rit..."
                      rows={4}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    Versturen →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
