import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const navy = config.colors.navy;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 text-white" style={{ backgroundColor: navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FDBA74' }}>
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Neem contact op</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Heeft u een vraag, wilt u een rit reserveren of een offerte aanvragen?
              Wij reageren zo snel mogelijk – meestal binnen 1 uur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: config.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-extrabold" style={{ color: navy }}>Onze gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phoneHref}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: `${p}18` }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline transition-colors" style={{ color: p }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold" style={{ color: config.colors.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 items-start">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${p}18` }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Bereikbaarheid</p>
                  <p className="font-semibold" style={{ color: config.colors.text }}>
                    Dagelijks: {config.contact.hours.weekday}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">Weekend: {config.contact.hours.weekend}</p>
                </div>
              </div>

              {/* Quick call CTA */}
              <div
                className="rounded-2xl p-6 mt-4"
                style={{ backgroundColor: navy }}
              >
                <p className="text-white font-bold mb-1">Direct een rit boeken?</p>
                <p className="text-gray-400 text-sm mb-4">Bel ons en wij helpen u direct verder.</p>
                <a
                  href={`tel:${config.contact.phoneHref}`}
                  className="flex items-center gap-2 font-bold py-3 px-5 rounded-xl text-sm transition-opacity hover:opacity-90 text-white"
                  style={{ backgroundColor: p }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {config.contact.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-5">✅</div>
                  <h3 className="text-2xl font-extrabold mb-2" style={{ color: navy }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500">
                    Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-extrabold mb-6" style={{ color: navy }}>Stuur een bericht</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>
                          Naam *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          value={form.telefoon}
                          onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                          placeholder="+31 6 ..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: config.colors.text }}>
                        Uw bericht *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.bericht}
                        onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                        placeholder="Hoe kunnen wij u helpen? (bijv. rit aanvragen, vraag over tarieven, ...)"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                      style={{ backgroundColor: p }}
                    >
                      Verstuur bericht →
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      * Verplichte velden. Uw gegevens worden nooit gedeeld met derden.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
