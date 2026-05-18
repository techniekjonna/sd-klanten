import { useState } from 'react';
import { config } from '../config';

const yellow = config.colors.primary;
const dark = config.colors.dark;

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', dienst: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="py-20 text-white" style={{ backgroundColor: dark }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-gray-400 max-w-xl">Heeft u een vraag of wilt u een rit reserveren? Wij zijn 24/7 bereikbaar.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-extrabold" style={{ color: dark }}>Onze gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: `${config.contact.address}, ${config.contact.city}` },
                { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                { icon: '🕐', label: 'Bereikbaarheid', value: config.contact.hours },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: '#FFF9C4' }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline" style={{ color: dark }}>{value}</a>
                    ) : (
                      <p className="font-semibold" style={{ color: dark }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 mt-4">
                <div className="h-48 flex items-center justify-center text-sm text-gray-400" style={{ backgroundColor: config.colors.surface }}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📍</div>
                    <p className="font-medium" style={{ color: dark }}>Ampèrestraat 6</p>
                    <p>6372 BB Landgraaf</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-extrabold mb-2" style={{ color: dark }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-extrabold mb-6" style={{ color: dark }}>Stuur een bericht</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: dark }}>Naam *</label>
                      <input type="text" required value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Uw naam" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: dark }}>Telefoon</label>
                      <input type="tel" value={form.telefoon} onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="045 - ..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: dark }}>E-mailadres *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="uw@email.nl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: dark }}>Dienst</label>
                    <select value={form.dienst} onChange={(e) => setForm({ ...form, dienst: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
                      <option value="">Selecteer een dienst (optioneel)</option>
                      {config.services.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: dark }}>Bericht *</label>
                    <textarea required rows={5} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                      placeholder="Hoe kunnen wij u helpen?" />
                  </div>
                  <button type="submit"
                    className="w-full py-4 font-bold rounded-xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: yellow, color: dark }}>
                    Verstuur bericht
                  </button>
                  <p className="text-xs text-gray-400 text-center">* Verplichte velden. Uw gegevens worden nooit gedeeld met derden.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
