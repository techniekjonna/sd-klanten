import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const ac = config.colors.accent;
  const dk = config.colors.dark;

  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors bg-white';

  return (
    <Layout>
      <section className="py-16 text-white" style={{ backgroundColor: dk }}>
        <div className="container mx-auto px-4">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ac }}>
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Neem contact met ons op</h1>
          <p className="text-gray-400 max-w-lg">
            Bel ons 24/7 of stuur een bericht. Wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-extrabold mb-6" style={{ color: dk }}>Contactgegevens</h2>
                <div className="space-y-4">
                  {[
                    { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phoneTel}` },
                    { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                    { icon: '📍', label: 'Locatie', value: config.contact.address, href: undefined },
                    { icon: '🕐', label: 'Beschikbaar', value: '24 uur per dag, 7 dagen per week', href: undefined },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-semibold text-sm hover:opacity-70 transition-opacity"
                            style={{ color: dk }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-sm" style={{ color: dk }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`tel:${config.contact.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full py-4 font-extrabold rounded-xl text-white transition-opacity hover:opacity-90 shadow-lg"
                style={{ backgroundColor: dk }}
              >
                📞 Direct bellen: {config.contact.phone}
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-extrabold mb-6" style={{ color: dk }}>Stuur een bericht</h2>

              {sent ? (
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{ backgroundColor: ac + '22', border: `2px solid ${ac}` }}
                >
                  <span className="text-4xl block mb-4">✅</span>
                  <h3 className="font-extrabold text-lg mb-2" style={{ color: dk }}>Bericht verstuurd!</h3>
                  <p className="text-gray-600 text-sm">
                    Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naam</label>
                      <input
                        type="text"
                        required
                        placeholder="Uw naam"
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Telefoon</label>
                      <input
                        type="tel"
                        placeholder="Uw telefoonnummer"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="uw@email.nl"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Bericht</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Uw bericht..."
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className={inputClass + ' resize-none'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-extrabold rounded-xl text-white transition-opacity hover:opacity-90 shadow-md"
                    style={{ backgroundColor: dk }}
                  >
                    Verstuur bericht →
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
