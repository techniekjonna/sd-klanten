import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const yellow = config.colors.primary;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Contactbericht OneTaxi:\n\nNaam: ${form.naam}\nTelefoon: ${form.telefoon}\nEmail: ${form.email}\n\n${form.bericht}`;
    window.open(`https://wa.me/31647727247?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-center" style={{ backgroundColor: yellow }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-3">Contact</h1>
          <p className="text-black/70 max-w-xl mx-auto">
            Heeft u een vraag of wilt u een rit reserveren? Neem direct contact op.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-xl font-black text-black">Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: yellow }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-black hover:underline">{value}</a>
                    ) : (
                      <p className="font-semibold text-black">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: yellow }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Openingstijden</p>
                  <p className="text-sm font-medium text-black">Ma–Vr: {config.contact.hours.weekday}</p>
                  <p className="text-sm font-medium text-black">{config.contact.hours.weekend}</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/31647727247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-sm">Stuur een WhatsApp</p>
                  <p className="text-xs opacity-80">Snelle reactie gegarandeerd</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black mb-2 text-black">Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-black mb-1.5">Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-1.5">Telefoon</label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-1.5">E-mailadres *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-1.5">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                      placeholder="Hoe kunnen wij u helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-black text-black rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: yellow }}
                  >
                    Verstuur via WhatsApp →
                  </button>
                  <p className="text-xs text-gray-400 text-center">* Verplichte velden. U wordt doorgestuurd naar WhatsApp.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
