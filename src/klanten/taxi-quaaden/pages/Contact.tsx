import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', dienst: '', bericht: '' });
  const [submitted, setSubmitted] = useState(false);

  const p = config.colors.primary;
  const gold = config.colors.gold;

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-white" style={{ backgroundColor: p }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Neem contact op voor een rit, offerte of voor meer informatie over onze diensten.
          </p>
        </div>
      </section>
      <div className="h-1.5" style={{ backgroundColor: gold }} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black mb-6" style={{ color: p }}>Gegevens</h2>
              <ul className="space-y-5">
                {[
                  { icon: '📍', label: 'Adres', value: config.contact.address },
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '🕐', label: 'Bereikbaar', value: '24 uur per dag, 7 dagen per week' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: config.colors.light }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold hover:underline" style={{ color: p }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-gray-700">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-xl border-l-4" style={{ backgroundColor: config.colors.light, borderColor: gold }}>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wilt u direct een rit boeken? Bel ons dan op{' '}
                  <a href={`tel:${config.contact.phone}`} className="font-bold hover:underline" style={{ color: p }}>
                    {config.contact.phoneDisplay}
                  </a>
                  . Wij zijn 24 uur per dag, 7 dagen per week bereikbaar.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mb-6 shadow-lg"
                    style={{ backgroundColor: gold }}
                  >
                    ✓
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: p }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <h2 className="text-2xl font-black mb-6" style={{ color: p }}>Stuur ons een bericht</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Naam <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="naam"
                        required
                        value={form.naam}
                        onChange={handle}
                        placeholder="Uw volledige naam"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Telefoon</label>
                      <input
                        type="tel"
                        name="telefoon"
                        value={form.telefoon}
                        onChange={handle}
                        placeholder="Uw telefoonnummer"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                      E-mail <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handle}
                      placeholder="uw@email.nl"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Gewenste dienst</label>
                    <select
                      name="dienst"
                      value={form.dienst}
                      onChange={handle}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none bg-white"
                    >
                      <option value="">Selecteer een dienst...</option>
                      {config.services.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                      Bericht <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="bericht"
                      required
                      value={form.bericht}
                      onChange={handle}
                      rows={5}
                      placeholder="Omschrijf uw rit of stel uw vraag..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg text-sm uppercase tracking-widest"
                    style={{ backgroundColor: p }}
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
