import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const DARK = '#0B1D3E';
const DARK2 = '#0F2448';
const CARD = 'rgba(255,255,255,0.05)';
const BORDER = 'rgba(255,255,255,0.08)';
const MUTED = 'rgba(255,255,255,0.6)';

interface BookingForm {
  naam: string;
  telefoon: string;
  email: string;
  datum: string;
  tijd: string;
  vertrek: string;
  bestemming: string;
  passagiers: string;
  opmerking: string;
}

export const Boeken = () => {
  const accent = config.colors.accent;

  const [form, setForm] = useState<BookingForm>({
    naam: '',
    telefoon: '',
    email: '',
    datum: '',
    tijd: '',
    vertrek: '',
    bestemming: '',
    passagiers: '1',
    opmerking: '',
  });
  const [sent, setSent] = useState(false);

  const set = (field: keyof BookingForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all text-white';
  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.07)',
    border: `1px solid ${BORDER}`,
  };

  const labelClass = 'block text-xs font-semibold mb-1.5';

  return (
    <Layout>
      {/* Page header */}
      <section className="py-24 text-white text-center" style={{ backgroundColor: DARK2 }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
            Snel & eenvoudig
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rit Boeken</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: MUTED }}>
            Vul het formulier in en wij bevestigen uw boeking zo snel mogelijk — meestal binnen 30 minuten.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-xl font-bold text-white mb-6">Hoe werkt het?</h2>
              {[
                { stap: '1', titel: 'Formulier invullen', tekst: 'Vul uw vertrek- en aankomstlocatie, datum en tijd in.' },
                { stap: '2', titel: 'Bevestiging ontvangen', tekst: 'Wij bevestigen uw boeking binnen 30 minuten via telefoon of e-mail.' },
                { stap: '3', titel: 'Chauffeur staat klaar', tekst: 'Op de afgesproken tijd staat uw chauffeur bij u voor de deur.' },
              ].map(({ stap, titel, tekst }) => (
                <div key={stap} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-black"
                    style={{ backgroundColor: accent }}
                  >
                    {stap}
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm text-white">{titel}</p>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{tekst}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-xl border-l-4 mt-4"
                style={{ backgroundColor: `${accent}10`, borderColor: accent }}
              >
                <p className="text-sm font-semibold mb-1 text-white">Liever bellen?</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-lg font-bold transition-opacity hover:opacity-80"
                  style={{ color: accent }}
                >
                  {config.contact.phoneDisplay}
                </a>
                <p className="text-xs mt-1" style={{ color: MUTED }}>24/7 bereikbaar</p>
              </div>
            </div>

            {/* Boekingsformulier */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="text-center py-20 px-8 rounded-2xl"
                  style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                    style={{ backgroundColor: `${accent}20` }}
                  >
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Boeking ontvangen!
                  </h3>
                  <p className="max-w-sm mx-auto text-sm" style={{ color: MUTED }}>
                    Wij nemen zo snel mogelijk — uiterlijk binnen 30 minuten — contact met u op om uw rit te bevestigen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
                >
                  <h3 className="text-lg font-bold text-white">Uw gegevens</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} style={{ color: MUTED }}>Naam *</label>
                      <input type="text" required value={form.naam} onChange={set('naam')}
                        className={inputClass} style={inputStyle} placeholder="Uw volledige naam" />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: MUTED }}>Telefoon *</label>
                      <input type="tel" required value={form.telefoon} onChange={set('telefoon')}
                        className={inputClass} style={inputStyle} placeholder="06 - ..." />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} style={{ color: MUTED }}>E-mailadres</label>
                    <input type="email" value={form.email} onChange={set('email')}
                      className={inputClass} style={inputStyle} placeholder="uw@email.nl" />
                  </div>

                  <div className="border-t pt-5" style={{ borderColor: BORDER }}>
                    <h3 className="text-lg font-bold text-white mb-4">Ritgegevens</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} style={{ color: MUTED }}>Datum *</label>
                      <input type="date" required value={form.datum} onChange={set('datum')}
                        className={inputClass} style={{ ...inputStyle, colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: MUTED }}>Tijd *</label>
                      <input type="time" required value={form.tijd} onChange={set('tijd')}
                        className={inputClass} style={{ ...inputStyle, colorScheme: 'dark' }} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} style={{ color: MUTED }}>Vertreklocatie *</label>
                    <input type="text" required value={form.vertrek} onChange={set('vertrek')}
                      className={inputClass} style={inputStyle} placeholder="Straat + huisnummer, Stad" />
                  </div>

                  <div>
                    <label className={labelClass} style={{ color: MUTED }}>Bestemming *</label>
                    <input type="text" required value={form.bestemming} onChange={set('bestemming')}
                      className={inputClass} style={inputStyle} placeholder="Straat + huisnummer, Stad" />
                  </div>

                  <div>
                    <label className={labelClass} style={{ color: MUTED }}>Aantal passagiers *</label>
                    <select required value={form.passagiers} onChange={set('passagiers')}
                      className={inputClass} style={{ ...inputStyle, colorScheme: 'dark' }}>
                      {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                        <option key={n} value={n} style={{ backgroundColor: DARK2 }}>
                          {n} {n === '1' ? 'persoon' : 'personen'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass} style={{ color: MUTED }}>Opmerkingen</label>
                    <textarea rows={3} value={form.opmerking} onChange={set('opmerking')}
                      className={inputClass + ' resize-none'} style={inputStyle}
                      placeholder="Bijv. rolstoel nodig, vluchtnummer, grote bagage..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold rounded-xl transition-all hover:scale-[1.01] text-black text-base"
                    style={{ backgroundColor: accent }}
                  >
                    Rit Aanvragen
                  </button>
                  <p className="text-xs text-center" style={{ color: MUTED }}>
                    * Verplichte velden. Na uw aanvraag bevestigen wij uw boeking telefonisch of per e-mail.
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
