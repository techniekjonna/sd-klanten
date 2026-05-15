import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = '#1B3F6E';
const ORANGE = '#F97316';
const NAVY_LIGHT = '#EEF4FB';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', van: '', naar: '', datum: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Naam: ${form.naam}\nTelefoon: ${form.telefoon}\nE-mail: ${form.email}\nVan: ${form.van}\nNaar: ${form.naar}\nDatum: ${form.datum}\n\n${form.bericht}`;
    window.location.href = `mailto:${config.contact.email}?subject=Taxirit aanvraag van ${form.naam}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass = "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors placeholder-gray-400";

  return (
    <Layout>
      <section className="py-16" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Neem Contact Op</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact &amp; Boeken</h1>
          <p className="text-blue-200 max-w-lg mx-auto">Vul het formulier in of bel ons direct. Wij reageren zo snel mogelijk met een vaste prijs.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>Bereikbaar 24/7</h2>
              <div className="space-y-5">
                {[
                  { icon: '📞', label: 'Telefoon', value: '045 570 03 00', href: 'tel:+31455700300' },
                  { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                  { icon: '🕐', label: 'Openingstijden', value: '24 uur per dag, 7 dagen per week', href: undefined },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: NAVY_LIGHT }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: ORANGE + '22' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="font-semibold hover:opacity-80 transition" style={{ color: NAVY }}>{value}</a>
                      ) : (
                        <p className="font-semibold" style={{ color: NAVY }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl border-2 border-orange-200 bg-orange-50">
                <p className="font-bold text-sm mb-1" style={{ color: ORANGE }}>💡 Tip: Bel voor de snelste service</p>
                <p className="text-sm text-gray-600">Voor directe reserveringen belt u ons het beste. Wij geven u direct een vaste prijs voor uw rit.</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>Rit Aanvragen</h2>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Aanvraag Verzonden!</h3>
                  <p className="text-gray-600">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Naam *</label>
                      <input name="naam" required value={form.naam} onChange={handleChange} placeholder="Uw naam" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Telefoon *</label>
                      <input name="telefoon" required value={form.telefoon} onChange={handleChange} placeholder="06 12 34 56 78" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">E-mail</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="uw@email.nl" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Van</label>
                      <input name="van" value={form.van} onChange={handleChange} placeholder="Vertrekadres" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Naar</label>
                      <input name="naar" value={form.naar} onChange={handleChange} placeholder="Bestemming" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Datum &amp; Tijd</label>
                    <input name="datum" value={form.datum} onChange={handleChange} placeholder="bijv. 20 mei 2026 om 09:00" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Bericht / Bijzonderheden</label>
                    <textarea name="bericht" value={form.bericht} onChange={handleChange} rows={3} placeholder="Aantal passagiers, bagage, rolstoel, etc." className={inputClass + ' resize-none'} />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white rounded-xl text-base transition-all hover:opacity-90 hover:scale-[1.01] shadow-lg"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Rit Aanvragen →
                  </button>
                  <p className="text-center text-xs text-gray-400">Of bel direct: <a href="tel:+31455700300" className="font-semibold" style={{ color: NAVY }}>045 570 03 00</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
