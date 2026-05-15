import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;
const MUTED = '#64748B';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 text-white" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Bereikbaar</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Heeft u een vraag, wilt u een rit boeken of een offerte aanvragen? Neem gerust contact op.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold mb-6" style={{ color: PRIMARY }}>Onze gegevens</h2>

              {[
                {
                  icon: '📍',
                  label: 'Adres',
                  content: <>{config.contact.address}<br />{config.contact.city}</>,
                },
                {
                  icon: '📞',
                  label: 'Telefoon',
                  content: (
                    <a href={`tel:${config.contact.phone}`} className="font-semibold hover:underline" style={{ color: ACCENT }}>
                      {config.contact.phoneDisplay}
                    </a>
                  ),
                },
                {
                  icon: '✉️',
                  label: 'E-mail',
                  content: (
                    <a href={`mailto:${config.contact.email}`} className="hover:underline" style={{ color: PRIMARY }}>
                      {config.contact.email}
                    </a>
                  ),
                },
                {
                  icon: '🕐',
                  label: 'Beschikbaarheid',
                  content: <>Dag & nacht: {config.contact.hours.weekday}</>,
                },
              ].map(({ icon, label, content }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: `${PRIMARY}0D` }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: MUTED }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: PRIMARY }}>{content}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90 text-sm"
                  style={{ backgroundColor: ACCENT }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Direct bellen
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY }}>Bericht ontvangen!</h3>
                    <p className="text-sm" style={{ color: MUTED }}>
                      Wij nemen zo snel mogelijk contact met u op.
                    </p>
                    <button
                      className="mt-4 text-sm font-semibold underline"
                      style={{ color: ACCENT }}
                      onClick={() => setSent(false)}
                    >
                      Nieuw bericht sturen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-bold mb-1" style={{ color: PRIMARY }}>Stuur ons een bericht</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: MUTED }}>
                          Naam *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: MUTED }}>
                          Telefoon *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.telefoon}
                          onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                          placeholder="06-..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: MUTED }}>
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: MUTED }}>
                        Bericht *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.bericht}
                        onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                        placeholder="Waar en wanneer wilt u een taxi? Of heeft u een andere vraag?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      Verstuur bericht
                    </button>
                    <p className="text-xs text-center" style={{ color: MUTED }}>
                      * Verplichte velden. Uw gegevens worden nooit gedeeld met derden.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
