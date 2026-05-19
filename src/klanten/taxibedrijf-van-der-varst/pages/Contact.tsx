import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', bericht: '' });

  const set = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all bg-white';
  const inputStyle = { borderColor: '#D1D5DB' };
  const labelClass = 'block text-xs font-semibold text-gray-600 mb-1.5';

  return (
    <Layout>
      {/* Header */}
      <section
        className="py-20 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #0D1F3C 100%)` }}
      >
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Neem contact op</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-lg mx-auto text-white/75 text-lg">
            Heeft u een vraag of wilt u een rit boeken? Wij staan 24/7 voor u klaar.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contactinfo */}
            <div>
              <h2 className="text-xl font-extrabold mb-6" style={{ color: config.colors.text }}>Contactgegevens</h2>
              <div className="space-y-5">
                {[
                  { icon: '📍', label: 'Adres', value: config.contact.address },
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '🕐', label: 'Bereikbaar', value: '24/7, dag en nacht' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: config.colors.light }}>
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-bold text-sm hover:opacity-80 transition" style={{ color: PRIMARY }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-bold text-sm" style={{ color: config.colors.text }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Taxi foto */}
              <div className="mt-8 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501191830500-0513b5d594cd?q=80&w=800&auto=format&fit=crop"
                  alt="Taxi Van der Varst"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>

            {/* Contactformulier */}
            <div>
              <h2 className="text-xl font-extrabold mb-6" style={{ color: config.colors.text }}>Stuur een bericht</h2>
              {sent ? (
                <div
                  className="text-center py-14 px-8 rounded-2xl border"
                  style={{ backgroundColor: config.colors.light, borderColor: '#BFDBFE' }}
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-extrabold text-lg mb-2" style={{ color: config.colors.text }}>Bericht ontvangen!</h3>
                  <p className="text-sm text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ naam: '', telefoon: '', email: '', bericht: '' }); }}
                    className="mt-6 px-5 py-2.5 rounded-xl font-bold text-white text-sm"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Nieuw bericht
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Naam *</label>
                      <input type="text" required value={form.naam} onChange={(e) => set('naam', e.target.value)}
                        className={inputClass} style={inputStyle} placeholder="Uw naam" />
                    </div>
                    <div>
                      <label className={labelClass}>Telefoon</label>
                      <input type="tel" value={form.telefoon} onChange={(e) => set('telefoon', e.target.value)}
                        className={inputClass} style={inputStyle} placeholder="06 - ..." />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>E-mailadres *</label>
                    <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)}
                      className={inputClass} style={inputStyle} placeholder="uw@email.nl" />
                  </div>
                  <div>
                    <label className={labelClass}>Bericht *</label>
                    <textarea rows={5} required value={form.bericht} onChange={(e) => set('bericht', e.target.value)}
                      className={inputClass + ' resize-none'} style={inputStyle}
                      placeholder="Stel uw vraag of laat een bericht achter..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-md hover:opacity-90 transition"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Bericht versturen
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
