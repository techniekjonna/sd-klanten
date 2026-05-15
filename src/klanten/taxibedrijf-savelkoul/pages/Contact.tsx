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
          <p className="text-gray-300 max-w-md mx-auto text-sm">
            Bel ons direct of stuur een bericht. Wij zijn 24/7 bereikbaar en reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-extrabold mb-8" style={{ color: config.colors.primary }}>
                Bereikbaarheid
              </h2>
              <div className="space-y-4">
                {[
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                  { icon: '🕐', label: 'Beschikbaar', value: '24 uur per dag, 7 dagen per week', href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: `${config.colors.accent}18` }}
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
                className="mt-8 rounded-2xl p-6 text-white"
                style={{ backgroundColor: config.colors.accent }}
              >
                <p className="font-bold text-lg mb-1">Direct een taxi?</p>
                <p className="text-white/80 text-sm mb-4">Bel ons — wij zijn altijd bereikbaar.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-block bg-white font-bold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
                  style={{ color: config.colors.primary }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Formulier */}
            <div>
              <h2 className="text-2xl font-extrabold mb-8" style={{ color: config.colors.primary }}>
                Stuur een bericht
              </h2>
              {sent ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 text-white"
                    style={{ backgroundColor: config.colors.accent }}
                  >
                    ✓
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: config.colors.primary }}>
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">Wij nemen zo snel mogelijk contact met u op.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Nieuw bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
                  {[
                    { id: 'naam', label: 'Uw naam', type: 'text', placeholder: 'Jan Jansen' },
                    { id: 'telefoon', label: 'Telefoonnummer', type: 'tel', placeholder: '06 12 34 56 78' },
                    { id: 'email', label: 'E-mailadres', type: 'email', placeholder: 'jan@email.nl' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Bericht
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Beschrijf uw vervoersbehoefte, gewenste datum en tijdstip..."
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-white font-bold rounded-xl text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: config.colors.accent }}
                  >
                    Bericht versturen →
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
