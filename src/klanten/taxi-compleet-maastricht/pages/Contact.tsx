import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', bericht: '' });
  const [sent, setSent] = useState(false);
  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 text-white" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Heeft u een vraag of wilt u een rit reserveren? Wij staan voor u klaar.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact cards */}
            <div className="space-y-5">
              {[
                { icon: '📞', title: 'Telefonisch', info: config.contact.phoneDisplay, sub: '24/7 bereikbaar', href: `tel:${config.contact.phone}` },
                { icon: '✉️', title: 'E-mail', info: config.contact.email, sub: 'Reactie binnen 24 uur', href: `mailto:${config.contact.email}` },
                { icon: '📍', title: 'Werkgebied', info: 'Maastricht en omstreken', sub: 'Zuid-Limburg & verder', href: undefined },
                { icon: '🕐', title: 'Openingstijden', info: '24 uur per dag', sub: '7 dagen per week', href: undefined },
              ].map(c => (
                <div key={c.title} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: config.colors.lightBg }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="font-semibold text-sm hover:underline" style={{ color: primary }}>{c.info}</a>
                    ) : (
                      <p className="font-semibold text-sm" style={{ color: primary }}>{c.info}</p>
                    )}
                    <p className="text-xs text-gray-400">{c.sub}</p>
                  </div>
                </div>
              ))}

              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel direct: {config.contact.phoneDisplay}
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold mb-6" style={{ color: primary }}>Stuur ons een bericht</h2>

              {sent ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: primary }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naam *</label>
                    <input required type="text" value={form.naam} onChange={e => set('naam', e.target.value)} placeholder="Uw naam"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Telefoon</label>
                    <input type="tel" value={form.telefoon} onChange={e => set('telefoon', e.target.value)} placeholder="Uw telefoonnummer"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">E-mail *</label>
                    <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="uw@email.nl"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Bericht *</label>
                    <textarea required rows={6} value={form.bericht} onChange={e => set('bericht', e.target.value)} placeholder="Uw vraag of ritaanvraag..."
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors resize-none" />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: primary }}>
                      Bericht versturen →
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3">* Verplichte velden. Uw gegevens worden niet gedeeld met derden.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
