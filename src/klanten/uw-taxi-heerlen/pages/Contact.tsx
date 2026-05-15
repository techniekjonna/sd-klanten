import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const { darkBlue, yellow, lightBlue, bgLight, textLight } = config.colors;

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-white" style={{ backgroundColor: darkBlue }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact</h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: lightBlue }}>
            Heeft u een vraag of wilt u een rit boeken? Neem gerust contact op — wij reageren snel.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: bgLight }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: darkBlue }}>Bereikbaarheid</h2>
              <div className="space-y-5">
                {[
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '📍', label: 'Locatie', value: config.contact.address, href: undefined },
                  { icon: '🕐', label: 'Openingstijden', value: `Ma t/m Zo: ${config.contact.hours.weekday}`, href: undefined },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border-2" style={{ borderColor: lightBlue }}>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: darkBlue }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: textLight }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-bold hover:underline" style={{ color: darkBlue }}>{item.value}</a>
                      ) : (
                        <p className="font-bold" style={{ color: darkBlue }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct bellen CTA */}
              <a
                href={`tel:${config.contact.phone}`}
                className="mt-8 flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                style={{ backgroundColor: yellow, color: darkBlue }}
              >
                📞 Direct bellen: {config.contact.phoneDisplay}
              </a>
            </div>

            {/* Contactformulier */}
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: darkBlue }}>Stuur een bericht</h2>
              {sent ? (
                <div
                  className="rounded-2xl p-8 text-center border-2"
                  style={{ borderColor: yellow, backgroundColor: yellow + '20' }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-black mb-2" style={{ color: darkBlue }}>Bericht verzonden!</h3>
                  <p style={{ color: textLight }}>Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Uw naam', type: 'text', value: name, set: setName, placeholder: 'Jan de Vries' },
                    { label: 'E-mailadres', type: 'email', value: email, set: setEmail, placeholder: 'jan@email.nl' },
                    { label: 'Telefoonnummer', type: 'tel', value: phone, set: setPhone, placeholder: '+31 6 12345678' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={f.value}
                        onChange={e => f.set(e.target.value)}
                        placeholder={f.placeholder}
                        required
                        className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none"
                        style={{ borderColor: lightBlue }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: textLight }}>
                      Bericht
                    </label>
                    <textarea
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                      placeholder="Vertel ons over uw rit of vraag..."
                      rows={5}
                      required
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none resize-none"
                      style={{ borderColor: lightBlue }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: darkBlue, color: yellow }}
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
