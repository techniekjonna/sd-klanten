import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const { primary, accent, dark, text, primaryLight } = config.colors;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Header */}
      <section
        className="relative py-20 text-white"
        style={{ background: `linear-gradient(135deg, ${dark} 0%, ${primary} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Neem Contact Op</h1>
          <p className="text-white/70 max-w-lg">
            Vragen of een rit boeken? Wij zijn dag en nacht voor u bereikbaar.
          </p>
        </div>
      </section>

      {/* Quick contact */}
      <div style={{ backgroundColor: accent }}>
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`tel:${config.contact.phone}`}
            className="flex items-center gap-3 text-white font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <span className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">📞</span>
            {config.contact.phone}
          </a>
          <span className="text-white/30 hidden sm:block">|</span>
          <a
            href={`mailto:${config.contact.email}`}
            className="flex items-center gap-3 text-white font-medium hover:opacity-80 transition-opacity"
          >
            <span className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">✉️</span>
            {config.contact.email}
          </a>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-black" style={{ color: text }}>Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">{label}</p>
                    {href ? (
                      <a href={href} className="font-bold text-sm hover:underline mt-0.5 block" style={{ color: primary }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-sm mt-0.5" style={{ color: text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: primaryLight }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Beschikbaarheid</p>
                  <p className="font-semibold text-sm mt-0.5" style={{ color: text }}>
                    7 dagen per week, {config.contact.hours.weekday}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: primaryLight }}
                >
                  🏢
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400">KVK-nummer</p>
                  <p className="font-semibold text-sm mt-0.5" style={{ color: text }}>
                    {config.contact.kvk}
                  </p>
                </div>
              </div>

              {/* Direct bellen CTA */}
              <div
                className="p-5 rounded-2xl"
                style={{ backgroundColor: dark }}
              >
                <p className="text-white font-black text-base mb-1">Snel een rit nodig?</p>
                <p className="text-white/50 text-sm mb-4">Bel direct — geen wachtrij, altijd bereikbaar.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  <span>📞</span>
                  <span>Bel Nu</span>
                </a>
                <Link
                  to={config.basePath + '/tarieven'}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 mt-2 text-sm font-bold rounded-xl border-2 border-white/20 text-white hover:bg-white/5 transition-colors"
                >
                  Online Boeken →
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border-2 rounded-2xl" style={{ borderColor: primary, backgroundColor: primaryLight }}>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: text }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-black" style={{ color: text }}>Stuur ons een bericht</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                        Naam <span style={{ color: accent }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                      E-mailadres <span style={{ color: accent }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                      Uw bericht <span style={{ color: accent }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 resize-none"
                      placeholder="Hoe kunnen wij u helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90 text-base"
                    style={{ backgroundColor: accent }}
                  >
                    Verstuur Bericht →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
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
