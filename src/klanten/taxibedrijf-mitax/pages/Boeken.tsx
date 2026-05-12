import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const NAVY = config.colors.navy;
const NAVY_DARK = config.colors.navyDark;
const ORANGE = config.colors.orange;
const BGLIGHT = config.colors.bgLight;
const MUTED = config.colors.muted;

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

export const Boeken = () => {
  const [form, setForm] = useState<BookingForm>({
    van: '',
    tussenstop: '',
    naar: '',
    datum: '',
    retour: false,
    retourDatum: '',
    bagage: true,
    reizigers: 1,
    naam: '',
    telefoon: '',
    email: '',
    opmerking: '',
  });
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [step, setStep] = useState<'form' | 'sent'>('form');

  const set = <K extends keyof BookingForm>(k: K, v: BookingForm[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const swapLocations = () =>
    setForm((p) => ({ ...p, van: p.naar, naar: p.van }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('sent');
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 transition-all';

  return (
    <Layout>
      {/* Header */}
      <section
        className="relative py-24 text-white text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=500&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27,58,107,0.91)' }} />
        <div className="relative container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
            Snel & eenvoudig
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rit Boeken</h1>
          <p className="max-w-xl mx-auto text-blue-200 opacity-80 text-lg">
            Vul het formulier in en wij bevestigen uw boeking zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: BGLIGHT }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold" style={{ color: NAVY }}>Hoe werkt het?</h2>
              {[
                { stap: '1', titel: 'Vul uw rit in', tekst: 'Vertrek, bestemming, datum, tijd en het aantal reizigers.' },
                { stap: '2', titel: 'Bevestiging ontvangen', tekst: 'Wij bevestigen uw boeking zo snel mogelijk — meestal binnen 30 minuten.' },
                { stap: '3', titel: 'Chauffeur staat klaar', tekst: 'Op de afgesproken tijd staat uw Mitax-chauffeur voor de deur.' },
              ].map(({ stap, titel, tekst }) => (
                <div key={stap} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {stap}
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5 text-sm" style={{ color: NAVY }}>{titel}</p>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{tekst}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-xl border-l-4"
                style={{ backgroundColor: `${ORANGE}10`, borderColor: ORANGE }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>Liever bellen?</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-lg font-bold transition-opacity hover:opacity-80 block"
                  style={{ color: ORANGE }}
                >
                  {config.contact.phoneDisplay}
                </a>
                <p className="text-xs mt-1" style={{ color: MUTED }}>24/7 bereikbaar</p>
              </div>

              {/* Tarieven quick ref */}
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <div
                  className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  Indicatieve tarieven
                </div>
                {config.tarieven[0].regels.slice(0, 3).map((r, i) => (
                  <div
                    key={r.omschrijving}
                    className="flex justify-between px-4 py-2.5 text-xs border-b border-gray-100 last:border-0"
                    style={{ backgroundColor: i % 2 === 0 ? BGLIGHT : 'white' }}
                  >
                    <span style={{ color: MUTED }}>{r.omschrijving}</span>
                    <span className="font-bold" style={{ color: NAVY }}>{r.tarief}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {step === 'sent' ? (
                <div className="text-center py-20 px-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                    style={{ backgroundColor: `${ORANGE}15` }}
                  >
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: NAVY }}>Aanvraag ontvangen!</h3>
                  <p className="max-w-sm mx-auto text-sm" style={{ color: MUTED }}>
                    Wij nemen zo snel mogelijk — uiterlijk binnen 30 minuten — contact met u op om uw rit te bevestigen.
                  </p>
                  <button
                    onClick={() => setStep('form')}
                    className="mt-8 px-6 py-3 font-bold rounded-xl text-white text-sm"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Nieuwe aanvraag
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Route sectie */}
                  <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                    <h2 className="text-xl font-extrabold mb-5" style={{ color: NAVY }}>Boek uw Mitax</h2>

                    <p className="text-sm font-bold mb-3" style={{ color: NAVY }}>Waar wil je heen?</p>

                    {/* Van */}
                    <div className="relative flex items-center">
                      <div className="absolute left-4 w-3 h-3 rounded-full border-2 z-10" style={{ borderColor: NAVY }} />
                      <input
                        type="text"
                        required
                        value={form.van}
                        onChange={(e) => set('van', e.target.value)}
                        className={inputCls}
                        style={{ paddingLeft: '2.5rem', borderRadius: '12px 12px 0 0', borderBottom: 'none' }}
                        placeholder="van   straatnaam met huisnummer"
                      />
                      <button
                        type="button"
                        onClick={swapLocations}
                        className="absolute right-3 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all hover:opacity-80"
                        style={{ backgroundColor: NAVY }}
                        title="Omwisselen"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </button>
                    </div>

                    {/* Tussenstop */}
                    <div
                      className="flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer bg-gray-50 border-x border-gray-200 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowTussenstop(!showTussenstop)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ color: ORANGE }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <span style={{ color: ORANGE }}>tussenstop toevoegen</span>
                    </div>
                    {showTussenstop && (
                      <input
                        type="text"
                        value={form.tussenstop}
                        onChange={(e) => set('tussenstop', e.target.value)}
                        className={inputCls}
                        style={{ borderRadius: 0, borderTop: 'none', borderBottom: 'none' }}
                        placeholder="tussenstop adres"
                      />
                    )}

                    {/* Naar */}
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 z-10">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: ORANGE }}>
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        required
                        value={form.naar}
                        onChange={(e) => set('naar', e.target.value)}
                        className={inputCls}
                        style={{ paddingLeft: '2.5rem', borderRadius: '0 0 12px 12px', borderTop: 'none' }}
                        placeholder="naar   straatnaam met huisnummer"
                      />
                    </div>

                    {/* Bagage */}
                    <div className="mt-5">
                      <p className="text-sm font-medium mb-3" style={{ color: MUTED }}>Reis je met bagage?</p>
                      <div className="flex gap-6">
                        {([true, false] as const).map((v) => (
                          <label key={String(v)} className="flex items-center gap-2 cursor-pointer text-sm" style={{ color: NAVY }}>
                            <span
                              className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                              style={{
                                borderColor: form.bagage === v ? ORANGE : '#D1D5DB',
                                backgroundColor: form.bagage === v ? ORANGE : 'transparent',
                              }}
                              onClick={() => set('bagage', v)}
                            >
                              {form.bagage === v && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            {v ? 'Ja' : 'Nee, ik heb geen bagage'}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Datum / Retour / Reizigers */}
                  <div className="px-8 py-6 border-b border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: MUTED }}>
                            Ophaalmoment taxi
                          </p>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">📅</span>
                            <input
                              type="datetime-local"
                              required
                              value={form.datum}
                              onChange={(e) => set('datum', e.target.value)}
                              className={inputCls}
                              style={{ paddingLeft: '2.5rem', colorScheme: 'light' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="flex items-center gap-3 cursor-pointer mb-3">
                            <div
                              className="w-12 h-6 rounded-full relative transition-all flex-shrink-0"
                              style={{ backgroundColor: form.retour ? NAVY : '#D1D5DB' }}
                              onClick={() => set('retour', !form.retour)}
                            >
                              <div
                                className="w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all shadow"
                                style={{ left: form.retour ? '26px' : '2px' }}
                              />
                            </div>
                            <span className="text-sm font-medium" style={{ color: NAVY }}>Retour</span>
                          </label>
                          {form.retour ? (
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">📅</span>
                              <input
                                type="datetime-local"
                                required
                                value={form.retourDatum}
                                onChange={(e) => set('retourDatum', e.target.value)}
                                className={inputCls}
                                style={{ paddingLeft: '2.5rem', colorScheme: 'light' }}
                              />
                            </div>
                          ) : (
                            <div className="px-4 py-3 rounded-xl text-sm text-gray-300 bg-gray-50 border border-gray-100">
                              📅 Enkele reis
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: MUTED }}>
                          Aantal reizigers
                        </p>
                        <div
                          className="inline-flex items-center gap-4 px-5 py-3 rounded-xl border border-gray-200 bg-white"
                        >
                          <button
                            type="button"
                            onClick={() => set('reizigers', Math.max(1, form.reizigers - 1))}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all hover:opacity-80 text-white"
                            style={{ backgroundColor: form.reizigers > 1 ? NAVY : '#D1D5DB' }}
                          >
                            −
                          </button>
                          <span className="font-bold text-lg w-8 text-center" style={{ color: NAVY }}>
                            {form.reizigers}
                          </span>
                          <button
                            type="button"
                            onClick={() => set('reizigers', Math.min(8, form.reizigers + 1))}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all hover:opacity-80 text-white"
                            style={{ backgroundColor: NAVY }}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-xs mt-2" style={{ color: MUTED }}>Max. 8 personen</p>
                      </div>
                    </div>
                  </div>

                  {/* Contactgegevens */}
                  <div className="px-8 py-6 space-y-4 border-b border-gray-100">
                    <h3 className="text-base font-bold" style={{ color: NAVY }}>Uw gegevens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: MUTED }}>Naam *</label>
                        <input
                          type="text"
                          required
                          value={form.naam}
                          onChange={(e) => set('naam', e.target.value)}
                          className={inputCls}
                          placeholder="Uw volledige naam"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: MUTED }}>Telefoon *</label>
                        <input
                          type="tel"
                          required
                          value={form.telefoon}
                          onChange={(e) => set('telefoon', e.target.value)}
                          className={inputCls}
                          placeholder="06 - ..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: MUTED }}>E-mailadres</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        className={inputCls}
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: MUTED }}>Opmerkingen</label>
                      <textarea
                        rows={3}
                        value={form.opmerking}
                        onChange={(e) => set('opmerking', e.target.value)}
                        className={inputCls + ' resize-none'}
                        placeholder="Bijv. vluchtnummer, rolstoel nodig, grote koffers..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="px-8 py-6">
                    <button
                      type="submit"
                      className="w-full py-4 font-bold rounded-xl transition-all hover:scale-[1.01] text-white text-base shadow-lg"
                      style={{ backgroundColor: ORANGE }}
                    >
                      Rit Aanvragen
                    </button>
                    <p className="text-xs text-center mt-3" style={{ color: MUTED }}>
                      * Verplichte velden. Bevestiging ontvangt u telefonisch of per e-mail.
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
