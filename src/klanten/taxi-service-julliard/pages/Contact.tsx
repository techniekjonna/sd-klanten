import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '', dienst: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="relative py-24 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-white/70 max-w-xl mx-auto">Heeft u een vraag, wilt u een prijs opvragen of reserveren? Wij staan 24/7 voor u klaar.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: primary }}>Bereikbaarheid</h2>
              {[
                { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                { icon: '🕐', label: 'Openingstijden', value: '24 uur per dag, 7 dagen per week' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline" style={{ color: primary }}>{value}</a>
                    ) : (
                      <p className="font-semibold" style={{ color: primary }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl p-6 mt-6" style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}20` }}>
                <p className="font-bold mb-2" style={{ color: primary }}>Snel een taxi nodig?</p>
                <p className="text-sm text-gray-600 mb-4">Bel ons direct voor de snelste service.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: primary }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-2" style={{ color: primary }}>Stuur ons een bericht</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Naam *</label>
                      <input type="text" required value={form.naam} onChange={e => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2" placeholder="Uw naam" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Telefoon</label>
                      <input type="tel" value={form.telefoon} onChange={e => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2" placeholder="+31 6 ..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">E-mailadres *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2" placeholder="uw@email.nl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Dienst</label>
                    <select value={form.dienst} onChange={e => setForm({ ...form, dienst: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 bg-white">
                      <option value="">Selecteer een dienst...</option>
                      {config.services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      <option value="schoolvervoer">Schoolvervoer</option>
                      <option value="kortingskaart">Kortingskaart</option>
                      <option value="overig">Overig</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Bericht *</label>
                    <textarea required rows={5} value={form.bericht} onChange={e => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 resize-none" placeholder="Hoe kunnen wij u helpen?" />
                  </div>
                  <button type="submit" className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90" style={{ backgroundColor: primary }}>
                    Verstuur bericht
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
