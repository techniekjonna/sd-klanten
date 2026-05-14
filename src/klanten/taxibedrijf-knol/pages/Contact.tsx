import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const p = config.colors.primary;
const dark = config.colors.dark;

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', van: '', naar: '', datum: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-16 px-6" style={{ backgroundColor: dark }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: p }}>Neem contact op</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-none">Contact &<br/>Reservering</h1>
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90 self-start"
              style={{ backgroundColor: p }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: p }}>Bereikbaarheid</p>
              <div className="space-y-5">
                {[
                  { label: 'Adres', value: config.contact.address, href: undefined },
                  { label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-bold text-sm hover:underline" style={{ color: p }}>{value}</a>
                    ) : (
                      <p className="font-semibold text-sm" style={{ color: dark }}>{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#F9FAFB' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">Openingstijden</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Maandag – Vrijdag</span>
                  <span className="font-semibold" style={{ color: dark }}>{config.contact.hours.weekday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Zaterdag – Zondag</span>
                  <span className="font-semibold" style={{ color: dark }}>{config.contact.hours.weekend}</span>
                </div>
                <p className="text-xs text-gray-400 pt-2 border-t border-gray-200 mt-2">{config.contact.hours.note}</p>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: dark }}
            >
              <p className="text-gray-400 text-sm mb-4">Spoed of direct een rit?</p>
              <a
                href={`tel:${config.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: p }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Bel direct: {config.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div
                className="h-full min-h-[400px] rounded-2xl flex flex-col items-center justify-center text-center p-12"
                style={{ backgroundColor: '#F9FAFB' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: p + '20' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p} strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-2" style={{ color: dark }}>Aanvraag ontvangen!</h3>
                <p className="text-gray-500 text-sm max-w-xs">Wij nemen zo snel mogelijk contact met u op ter bevestiging van uw rit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: p }}>Ritaanvraag</p>

                {/* Rit details */}
                <div className="rounded-2xl p-5 space-y-4" style={{ backgroundColor: '#F9FAFB' }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Ritgegevens</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Vertrekadres</label>
                      <input
                        type="text"
                        value={form.van}
                        onChange={(e) => setForm({ ...form, van: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{ ['--tw-ring-color' as string]: p + '40' }}
                        placeholder="Van..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Bestemmingsadres</label>
                      <input
                        type="text"
                        value={form.naar}
                        onChange={(e) => setForm({ ...form, naar: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{ ['--tw-ring-color' as string]: p + '40' }}
                        placeholder="Naar..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Datum & tijd</label>
                    <input
                      type="datetime-local"
                      value={form.datum}
                      onChange={(e) => setForm({ ...form, datum: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ ['--tw-ring-color' as string]: p + '40' }}
                    />
                  </div>
                </div>

                {/* Persoonlijke gegevens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Naam *</label>
                    <input
                      required
                      type="text"
                      value={form.naam}
                      onChange={(e) => setForm({ ...form, naam: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ ['--tw-ring-color' as string]: p + '40' }}
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Telefoon *</label>
                    <input
                      required
                      type="tel"
                      value={form.telefoon}
                      onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ ['--tw-ring-color' as string]: p + '40' }}
                      placeholder="06..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">E-mailadres *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                    style={{ ['--tw-ring-color' as string]: p + '40' }}
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Opmerking</label>
                  <textarea
                    rows={3}
                    value={form.bericht}
                    onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 resize-none transition-all"
                    style={{ ['--tw-ring-color' as string]: p + '40' }}
                    placeholder="Bijv. rolstoel, retour, extra bagage..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-black text-white rounded-xl transition-all hover:opacity-90 active:scale-[0.99] text-sm"
                  style={{ backgroundColor: p }}
                >
                  Rit aanvragen →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  * Verplichte velden. Wij nemen contact op ter bevestiging.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};
