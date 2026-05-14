import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const y = config.colors.primary;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="max-w-xl mx-auto" style={{ color: '#aaa' }}>
            Heeft u een vraag of wilt u een rit reserveren? Wij staan 24/7 voor u klaar.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-extrabold mb-7" style={{ color: config.colors.dark }}>Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: `${config.contact.address}, ${config.contact.city}` },
                { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: y, color: '#111' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline text-sm" style={{ color: config.colors.dark }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-sm" style={{ color: config.colors.dark }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: y, color: '#111' }}>
                  🕐
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Beschikbaarheid</p>
                  <p className="font-semibold text-sm" style={{ color: config.colors.dark }}>24 uur per dag</p>
                  <p className="font-semibold text-sm" style={{ color: config.colors.dark }}>7 dagen per week</p>
                </div>
              </div>

              {/* Business details */}
              <div className="p-5 rounded-xl text-xs space-y-1.5" style={{ backgroundColor: '#f0f0f0', color: '#666' }}>
                <p><strong>KVK:</strong> {config.contact.kvk}</p>
                <p><strong>KIWA:</strong> {config.contact.kiwa}</p>
                <p><strong>BTW:</strong> {config.contact.btw}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-14">
                    <div className="text-5xl mb-5">✅</div>
                    <h3 className="text-xl font-extrabold mb-2" style={{ color: config.colors.dark }}>Bericht verzonden!</h3>
                    <p className="text-gray-500 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-extrabold mb-1" style={{ color: config.colors.dark }}>Stuur ons een bericht</h2>
                    <p className="text-sm text-gray-500 mb-5">Wij reageren doorgaans binnen enkele uren.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#555' }}>Naam *</label>
                        <input
                          type="text"
                          required
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#555' }}>Telefoon</label>
                        <input
                          type="tel"
                          value={form.telefoon}
                          onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all"
                          placeholder="+31 6 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#555' }}>E-mailadres *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all"
                        placeholder="uw@email.nl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#555' }}>Bericht *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.bericht}
                        onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 resize-none transition-all"
                        placeholder="Stel uw vraag of beschrijf uw rit..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 font-extrabold text-sm rounded-xl transition-opacity hover:opacity-90"
                      style={{ backgroundColor: y, color: '#111' }}
                    >
                      Verstuur Bericht →
                    </button>
                    <p className="text-xs text-gray-400 text-center">* Verplichte velden. Uw gegevens worden niet gedeeld met derden.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
