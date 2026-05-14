import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Contact</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Heeft u een vraag? Bel ons direct of stuur een bericht. Wij reageren snel.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-black tracking-tight">Onze gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                { icon: '🕐', label: 'Bereikbaar', value: '24 uur per dag, 7 dagen per week', href: undefined },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    <span>{icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline text-black">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-black">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-sm font-bold mb-2">Direct bellen?</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border-2 border-black rounded-xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black mb-2">Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={e => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Telefoon</label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={e => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                        placeholder="06 - ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={e => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors resize-none"
                      placeholder="Hoe kunnen wij u helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
                  >
                    Verstuur bericht
                  </button>
                  <p className="text-xs text-gray-400 text-center">* Verplichte velden. Uw gegevens worden nooit gedeeld.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
