import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const p = config.colors.primary;
  const hours = config.contact.hours;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center"
        style={{ backgroundColor: config.colors.primaryDark }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-green-200 max-w-xl mx-auto">
            Heeft u een vraag of wilt u een afspraak maken? Wij staan u graag te woord.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: config.colors.text }}>
                Onze Gegevens
              </h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '📱', label: 'Mobiel', value: config.contact.mobile, href: `tel:${config.contact.mobile}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: config.colors.primaryLight }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium hover:underline" style={{ color: p }}>
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium" style={{ color: config.colors.text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Opening hours */}
              <div className="flex gap-4 pt-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: config.colors.primaryLight }}
                >
                  🕐
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-2">Openingstijden</p>
                  <ul className="space-y-1">
                    {(
                      [
                        ['Maandag', hours.maandag],
                        ['Dinsdag', hours.dinsdag],
                        ['Woensdag', hours.woensdag],
                        ['Donderdag', hours.donderdag],
                        ['Vrijdag', hours.vrijdag],
                        ['Zaterdag', hours.zaterdag],
                      ] as [string, string][]
                    ).map(([day, time]) => (
                      <li key={day} className="flex justify-between gap-4 text-sm">
                        <span className="text-gray-500">{day}</span>
                        <span
                          className={time === 'Gesloten' ? 'text-red-500 font-medium' : 'font-medium'}
                          style={time !== 'Gesloten' ? { color: config.colors.text } : {}}
                        >
                          {time}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 mt-3">
                    * Pasfoto's zonder afspraak — altijd welkom tijdens openingstijden.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: config.colors.text }}>
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-500">
                    Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
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
                      <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
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
                    <label className="block text-sm font-medium mb-1.5" style={{ color: config.colors.text }}>
                      Uw bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none"
                      placeholder="Hoe kunnen wij u helpen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: p }}
                  >
                    Verstuur Bericht
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

      {/* Map placeholder */}
      <section className="h-64" style={{ backgroundColor: config.colors.primaryLight }}>
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-3">📍</div>
            <p className="font-semibold" style={{ color: config.colors.text }}>
              Paardestraat 16, 6131 HC Sittard
            </p>
            <a
              href="https://maps.google.com/?q=Paardestraat+16,+6131+HC+Sittard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-2 inline-block hover:underline"
              style={{ color: p }}
            >
              Bekijk op Google Maps →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
