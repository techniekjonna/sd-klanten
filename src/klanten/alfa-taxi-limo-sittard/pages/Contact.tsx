import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const { primary, accent, text, primaryLight } = config.colors;
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);
  const inp = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white transition-all';

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primary }}>Contact</p>
          <h1 className="text-3xl md:text-4xl font-black" style={{ color: text }}>Neem Contact Op</h1>
          <p className="text-gray-500 text-sm mt-2">Vragen of een rit boeken? Wij zijn dag en nacht voor u bereikbaar.</p>
        </div>
      </section>

      {/* Quick bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={`tel:${config.contact.phone}`} className="flex items-center gap-3 font-bold text-base hover:opacity-80 transition-opacity" style={{ color: primary }}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: accent }}>📞</span>
            {config.contact.phone}
          </a>
          <span className="text-gray-200 hidden sm:block">|</span>
          <a href={`mailto:${config.contact.email}`} className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: primary }}>✉️</span>
            {config.contact.email}
          </a>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-black mb-5" style={{ color: text }}>Onze Gegevens</h2>

              {[
                { icon: '📍', label: 'Adres', value: config.contact.address },
                { icon: '📞', label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                { icon: '🕐', label: 'Beschikbaarheid', value: `7 dagen — ${config.contact.hours.weekday}` },
                { icon: '🏢', label: 'KVK', value: config.contact.kvk },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: primaryLight }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-bold mt-0.5 block hover:underline" style={{ color: primary }}>{value}</a>
                    ) : (
                      <p className="text-sm font-semibold mt-0.5" style={{ color: text }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="font-black text-sm mb-1" style={{ color: text }}>Direct een rit boeken?</p>
                <p className="text-xs text-gray-400 mb-4">Bel of boek online — geen wachtrij, altijd bereikbaar.</p>
                <a href={`tel:${config.contact.phone}`} className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-xl mb-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: accent }}>
                  📞 Bel Direct
                </a>
                <Link to={config.basePath + '/tarieven'} className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors" style={{ color: primary }}>
                  Online Boeken →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: text }}>Bericht ontvangen!</h3>
                    <p className="text-gray-400 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                    <h3 className="text-lg font-black mb-5" style={{ color: text }}>Stuur ons een bericht</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-400">Naam <span style={{ color: accent }}>*</span></label>
                        <input type="text" required value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })} className={inp} placeholder="Uw naam" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-400">Telefoon</label>
                        <input type="tel" value={form.telefoon} onChange={(e) => setForm({ ...form, telefoon: e.target.value })} className={inp} placeholder="+31 6 ..." />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-400">E-mailadres <span style={{ color: accent }}>*</span></label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inp} placeholder="uw@email.nl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-400">Uw bericht <span style={{ color: accent }}>*</span></label>
                      <textarea required rows={5} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })} className={inp + ' resize-none'} placeholder="Hoe kunnen wij u helpen?" />
                    </div>
                    <button type="submit" className="w-full py-4 font-bold text-white rounded-xl hover:opacity-90 transition-opacity" style={{ backgroundColor: accent }}>
                      Verstuur Bericht →
                    </button>
                    <p className="text-[11px] text-gray-400 text-center">* Verplichte velden. Uw gegevens worden nooit gedeeld met derden.</p>
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
