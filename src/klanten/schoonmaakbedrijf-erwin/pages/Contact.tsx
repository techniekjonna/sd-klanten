import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

const inputClass =
  'w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow';
const inputStyle = { backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' };
const labelClass = 'block text-xs font-bold uppercase tracking-wide text-blue-300 mb-2';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section style={{ backgroundColor: c.primaryDark }} className="py-24 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Bereikbaarheid</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact</h1>
          <p className="text-blue-300 max-w-xl mx-auto">
            Heeft u een vraag? Wij reageren altijd binnen 1 werkdag. Of neem direct contact op.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: c.primary }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-xl font-black text-white mb-6">Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-center p-4 rounded-xl" style={{ backgroundColor: c.primaryDark }}>
                  <div className="text-2xl w-10 text-center flex-shrink-0">{icon}</div>
                  <div>
                    <p className="text-blue-400 text-xs">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-white hover:text-blue-200 transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center p-4 rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <div className="text-2xl w-10 text-center flex-shrink-0">💬</div>
                <div>
                  <p className="text-green-100 text-xs">WhatsApp</p>
                  <p className="font-semibold text-white text-sm">Stuur een bericht</p>
                </div>
              </a>

              <div className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: c.primaryDark }}>
                <div className="text-2xl w-10 text-center flex-shrink-0">🕐</div>
                <div>
                  <p className="text-blue-400 text-xs">Bereikbaar</p>
                  <p className="text-white text-sm">Ma–Vr: {config.contact.hours.weekday}</p>
                  <p className="text-white text-sm">Za–Zo: {config.contact.hours.weekend}</p>
                </div>
              </div>

              {/* Bedrijfsgegevens */}
              <div className="p-5 rounded-2xl" style={{ backgroundColor: c.primaryDark }}>
                <p className="font-black text-white text-xs uppercase tracking-widest mb-3">Bedrijfsgegevens</p>
                <div className="space-y-1 text-sm">
                  <p className="text-blue-300"><span className="text-blue-500">KvK:</span> {config.kvk}</p>
                  <p className="text-blue-300"><span className="text-blue-500">Rechtsvorm:</span> Eenmanszaak</p>
                  <p className="text-blue-300"><span className="text-blue-500">Vestiging:</span> Geleen, Zuid-Limburg</p>
                </div>
              </div>

              <Link
                to={config.basePath + '/afspraak'}
                className="inline-block px-6 py-3 font-bold text-white rounded-xl text-sm transition-all hover:scale-105"
                style={{ backgroundColor: c.primaryDark, border: '2px solid rgba(255,255,255,0.2)' }}
              >
                Direct een afspraak maken →
              </Link>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="text-center py-16 px-8 rounded-2xl"
                  style={{ backgroundColor: c.primaryDark }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-white mb-2">Bericht ontvangen!</h3>
                  <p className="text-blue-300">Wij nemen binnen 1 werkdag contact met u op. Tot snel!</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ backgroundColor: c.primaryDark }}
                >
                  <h3 className="text-lg font-black text-white mb-1">Stuur ons een bericht</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Naam *</label>
                      <input
                        type="text" required value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className={inputClass} style={inputStyle} placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Telefoon</label>
                      <input
                        type="tel" value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className={inputClass} style={inputStyle} placeholder="06-..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>E-mailadres *</label>
                    <input
                      type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass} style={inputStyle} placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Uw bericht *</label>
                    <textarea
                      required rows={6} value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className={`${inputClass} resize-none`} style={inputStyle}
                      placeholder="Waar kunnen wij u mee helpen?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-black text-white rounded-xl transition-all hover:scale-[1.01] shadow-xl"
                    style={{ backgroundColor: c.primary }}
                  >
                    Verstuur Bericht
                  </button>
                  <p className="text-xs text-blue-400 text-center">
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
