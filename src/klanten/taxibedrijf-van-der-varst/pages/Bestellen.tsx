import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const ACCENT = config.colors.accent;

interface BookingForm {
  van: string;
  tussenstop: string;
  naar: string;
  datum: string;
  retour: boolean;
  retourDatum: string;
  bagage: boolean;
  reizigers: number;
  naam: string;
  telefoon: string;
  email: string;
  opmerking: string;
}

export const Bestellen = () => {
  const [form, setForm] = useState<BookingForm>({
    van: '', tussenstop: '', naar: '', datum: '', retour: false,
    retourDatum: '', bagage: false, reizigers: 1,
    naam: '', telefoon: '', email: '', opmerking: '',
  });
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [step, setStep] = useState<'form' | 'sent'>('form');

  const set = <K extends keyof BookingForm>(field: K, value: BookingForm[K]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const labelClass = 'block text-xs font-semibold text-gray-600 mb-1.5';
  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all bg-white';
  const inputStyle = { borderColor: '#D1D5DB' };

  return (
    <Layout>
      {/* Header */}
      <section
        className="py-16 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #111827 100%)` }}
      >
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Snel & eenvoudig</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Bestel uw taxi</h1>
          <p className="max-w-lg mx-auto text-white/75">
            Vul het formulier in — wij bevestigen uw boeking doorgaans binnen 30 minuten.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-extrabold" style={{ color: config.colors.text }}>Hoe werkt het?</h2>
              {[
                { stap: '1', titel: 'Formulier invullen', tekst: 'Geef uw ophaallocatie, bestemming en gewenste tijdstip op.' },
                { stap: '2', titel: 'Bevestiging', tekst: 'Wij bevestigen uw rit telefonisch of per e-mail binnen 30 minuten.' },
                { stap: '3', titel: 'Chauffeur staat klaar', tekst: 'Op het afgesproken moment staat uw chauffeur voor de deur.' },
              ].map(({ stap, titel, tekst }) => (
                <div key={stap} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    {stap}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: config.colors.text }}>{titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{tekst}</p>
                  </div>
                </div>
              ))}

              {/* Bellen */}
              <div
                className="p-5 rounded-2xl border-l-4"
                style={{ backgroundColor: config.colors.light, borderColor: PRIMARY }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: config.colors.text }}>Liever bellen?</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-xl font-black block hover:opacity-80 transition"
                  style={{ color: PRIMARY }}
                >
                  {config.contact.phoneDisplay}
                </a>
                <p className="text-xs text-gray-500 mt-1">24/7 bereikbaar</p>
              </div>

              {/* Tarieven snippet */}
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
                <div className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: PRIMARY }}>
                  Indicatieve tarieven
                </div>
                {config.tarieven.slice(0, 4).map((t, i) => (
                  <div
                    key={t.omschrijving}
                    className="flex justify-between px-4 py-2.5 text-xs"
                    style={{ backgroundColor: i % 2 === 0 ? '#F9FAFB' : 'white', borderBottom: '1px solid #E5E7EB' }}
                  >
                    <span className="text-gray-600">{t.omschrijving}</span>
                    <span className="font-bold" style={{ color: PRIMARY }}>{t.tarief}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {step === 'sent' ? (
                <div className="text-center py-20 px-8 bg-white rounded-2xl shadow-sm border" style={{ borderColor: '#E5E7EB' }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                    style={{ backgroundColor: config.colors.light }}
                  >
                    ✅
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3" style={{ color: config.colors.text }}>Aanvraag ontvangen!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto">
                    Wij nemen zo snel mogelijk — uiterlijk binnen 30 minuten — contact met u op om uw rit te bevestigen.
                  </p>
                  <button
                    onClick={() => setStep('form')}
                    className="mt-8 px-6 py-3 font-bold rounded-xl text-white text-sm"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Nieuwe aanvraag
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setStep('sent'); }}
                  className="bg-white rounded-2xl shadow-sm border overflow-hidden"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  {/* Route */}
                  <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                    <h2 className="text-xl font-extrabold mb-5" style={{ color: config.colors.text }}>
                      Bestel je Van der Varst taxi
                    </h2>
                    <p className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">Waar wil je heen?</p>
                    <div className="flex flex-col">
                      {/* Van */}
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 w-2.5 h-2.5 rounded-full border-2 z-10" style={{ borderColor: PRIMARY }} />
                        <input
                          type="text" required value={form.van}
                          onChange={(e) => set('van', e.target.value)}
                          placeholder="van   straatnaam met huisnummer"
                          className={inputClass}
                          style={{ ...inputStyle, paddingLeft: '2.2rem', borderRadius: '12px 12px 0 0' }}
                        />
                        <button
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, van: p.naar, naar: p.van }))}
                          className="absolute right-3 w-7 h-7 rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
                          style={{ backgroundColor: PRIMARY }}
                          title="Omwisselen"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowTussenstop(!showTussenstop)}
                        className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-l border-r transition"
                        style={{ borderColor: '#D1D5DB', backgroundColor: '#F9FAFB', color: PRIMARY }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        tussenstop toevoegen
                      </button>

                      {showTussenstop && (
                        <input
                          type="text" value={form.tussenstop}
                          onChange={(e) => set('tussenstop', e.target.value)}
                          placeholder="tussenstop adres"
                          className={inputClass}
                          style={{ ...inputStyle, borderRadius: 0, borderTop: 'none' }}
                        />
                      )}

                      {/* Naar */}
                      <div className="relative flex items-center">
                        <div className="absolute left-3 z-10">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: ACCENT }}>
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          type="text" required value={form.naar}
                          onChange={(e) => set('naar', e.target.value)}
                          placeholder="naar   straatnaam met huisnummer"
                          className={inputClass}
                          style={{ ...inputStyle, paddingLeft: '2.2rem', borderRadius: '0 0 12px 12px', borderTop: 'none' }}
                        />
                      </div>
                    </div>

                    {/* Bagage */}
                    <div className="mt-5">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Reis je met bagage?</p>
                      <div className="flex gap-6">
                        {[{ label: 'Ja', value: true }, { label: 'Nee, geen bagage', value: false }].map(({ label, value }) => (
                          <label key={label} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                            <span
                              className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                              style={{
                                borderColor: form.bagage === value ? PRIMARY : '#D1D5DB',
                                backgroundColor: form.bagage === value ? PRIMARY : 'transparent',
                              }}
                              onClick={() => set('bagage', value)}
                            >
                              {form.bagage === value && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Datum / retour / reizigers */}
                  <div className="px-8 py-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Ophaalmoment taxi</p>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2">📅</span>
                            <input
                              type="datetime-local" required value={form.datum}
                              onChange={(e) => set('datum', e.target.value)}
                              className={inputClass}
                              style={{ ...inputStyle, paddingLeft: '2.3rem' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="flex items-center gap-3 cursor-pointer mb-3">
                            <div
                              className="w-11 h-6 rounded-full relative transition-all flex-shrink-0"
                              style={{ backgroundColor: form.retour ? PRIMARY : '#D1D5DB' }}
                              onClick={() => set('retour', !form.retour)}
                            >
                              <div className="w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all shadow" style={{ left: form.retour ? '22px' : '2px' }} />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Retour</span>
                          </label>
                          {form.retour ? (
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2">📅</span>
                              <input
                                type="datetime-local" required={form.retour} value={form.retourDatum}
                                onChange={(e) => set('retourDatum', e.target.value)}
                                className={inputClass}
                                style={{ ...inputStyle, paddingLeft: '2.3rem' }}
                              />
                            </div>
                          ) : (
                            <div className="px-4 py-3 rounded-xl text-sm text-gray-400 border" style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}>
                              📅 Enkele reis
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Aantal reizigers</p>
                        <div className="inline-flex items-center gap-4 px-5 py-3 rounded-xl border" style={{ borderColor: '#D1D5DB' }}>
                          <button
                            type="button"
                            onClick={() => set('reizigers', Math.max(1, form.reizigers - 1))}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-white text-sm"
                            style={{ backgroundColor: form.reizigers > 1 ? PRIMARY : '#D1D5DB' }}
                          >−</button>
                          <span className="font-bold text-lg w-8 text-center" style={{ color: config.colors.text }}>{form.reizigers}</span>
                          <button
                            type="button"
                            onClick={() => set('reizigers', Math.min(8, form.reizigers + 1))}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-white text-sm"
                            style={{ backgroundColor: PRIMARY }}
                          >+</button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Max. 8 personen</p>
                      </div>
                    </div>
                  </div>

                  {/* Contactgegevens */}
                  <div className="px-8 py-6 space-y-4 border-b" style={{ borderColor: '#E5E7EB' }}>
                    <h3 className="font-bold text-sm" style={{ color: config.colors.text }}>Uw gegevens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Naam *</label>
                        <input type="text" required value={form.naam} onChange={(e) => set('naam', e.target.value)}
                          className={inputClass} style={inputStyle} placeholder="Uw volledige naam" />
                      </div>
                      <div>
                        <label className={labelClass}>Telefoon *</label>
                        <input type="tel" required value={form.telefoon} onChange={(e) => set('telefoon', e.target.value)}
                          className={inputClass} style={inputStyle} placeholder="06 - ..." />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>E-mailadres</label>
                      <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
                        className={inputClass} style={inputStyle} placeholder="uw@email.nl" />
                    </div>
                    <div>
                      <label className={labelClass}>Opmerkingen</label>
                      <textarea rows={3} value={form.opmerking} onChange={(e) => set('opmerking', e.target.value)}
                        className={inputClass + ' resize-none'} style={inputStyle}
                        placeholder="Bijv. vluchtnummer, rolstoel nodig, grote bagage..." />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="px-8 py-6">
                    <button
                      type="submit"
                      className="w-full py-4 font-bold rounded-xl text-white text-base shadow-md hover:opacity-90 transition"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Bereken mijn ritprijs & Bestellen
                    </button>
                    <p className="text-xs text-center mt-3 text-gray-400">
                      * Verplichte velden. Wij bevestigen uw boeking telefonisch of per e-mail binnen 30 minuten.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
