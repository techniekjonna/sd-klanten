import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const PRIMARY = '#3A3A3A';
const LIGHT = '#4A4A4A';
const ACCENT = '#F5C842';
const CARD = 'rgba(255,255,255,0.06)';
const BORDER = 'rgba(255,255,255,0.09)';
const MUTED = 'rgba(255,255,255,0.55)';

interface BookingForm {
  van: string;
  tussenstop: string;
  naar: string;
  datum: string;
  tijd: string;
  retour: boolean;
  retourDatum: string;
  retourTijd: string;
  bagage: boolean;
  reizigers: number;
  naam: string;
  telefoon: string;
  email: string;
  opmerking: string;
}

export const Bestellen = () => {
  const [form, setForm] = useState<BookingForm>({
    van: '',
    tussenstop: '',
    naar: '',
    datum: '',
    tijd: '',
    retour: false,
    retourDatum: '',
    retourTijd: '',
    bagage: true,
    reizigers: 1,
    naam: '',
    telefoon: '',
    email: '',
    opmerking: '',
  });
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [step, setStep] = useState<'form' | 'sent'>('form');

  const set = <K extends keyof BookingForm>(field: K, value: BookingForm[K]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const swapLocations = () => {
    setForm((prev) => ({ ...prev, van: prev.naar, naar: prev.van }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('sent');
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all text-white placeholder-gray-500';
  const inputStyle = { backgroundColor: 'rgba(255,255,255,0.08)', border: `1px solid ${BORDER}` };

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: LIGHT }}>
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
            Snel & eenvoudig
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bestellen & Contact</h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: MUTED }}>
            Vul het formulier in en wij bevestigen uw boeking zo snel mogelijk — meestal binnen 30 minuten.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: PRIMARY }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-white">Hoe werkt het?</h2>
              {[
                { stap: '1', titel: 'Rit invullen', tekst: 'Vul uw vertrek en bestemming in, kies datum en tijd.' },
                { stap: '2', titel: 'Bevestiging ontvangen', tekst: 'Wij bevestigen uw boeking binnen 30 minuten.' },
                { stap: '3', titel: 'Chauffeur staat klaar', tekst: 'Op de afgesproken tijd staat uw chauffeur voor de deur.' },
              ].map(({ stap, titel, tekst }) => (
                <div key={stap} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-gray-900"
                    style={{ backgroundColor: ACCENT }}
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
                style={{ backgroundColor: `${ACCENT}12`, borderColor: ACCENT }}
              >
                <p className="text-sm font-semibold mb-1 text-white">Liever bellen?</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-lg font-bold transition-opacity hover:opacity-80 block"
                  style={{ color: ACCENT }}
                >
                  {config.contact.phoneDisplay}
                </a>
                <a
                  href={`tel:${config.contact.phone2}`}
                  className="text-base font-bold transition-opacity hover:opacity-80 block mt-0.5"
                  style={{ color: ACCENT }}
                >
                  {config.contact.phoneDisplay2}
                </a>
                <p className="text-xs mt-1" style={{ color: MUTED }}>24/7 bereikbaar</p>
              </div>

              {/* Tarieven quick-ref */}
              <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                <div className="px-4 py-3 text-xs font-bold uppercase tracking-wide" style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}>
                  Indicatieve tarieven
                </div>
                {config.tarieven[0].regels.slice(0, 3).map((r, i) => (
                  <div
                    key={r.omschrijving}
                    className="flex justify-between px-4 py-2.5 text-xs"
                    style={{ backgroundColor: i % 2 === 0 ? CARD : 'transparent', color: MUTED, borderBottom: `1px solid ${BORDER}` }}
                  >
                    <span>{r.omschrijving}</span>
                    <span className="font-bold text-white">{r.tarief}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {step === 'sent' ? (
                <div
                  className="text-center py-20 px-8 rounded-2xl"
                  style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                    style={{ backgroundColor: `${ACCENT}20` }}
                  >
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Aanvraag ontvangen!</h3>
                  <p className="max-w-sm mx-auto text-sm" style={{ color: MUTED }}>
                    Wij nemen zo snel mogelijk — uiterlijk binnen 30 minuten — contact met u op om uw rit te bevestigen.
                  </p>
                  <button
                    onClick={() => setStep('form')}
                    className="mt-8 px-6 py-3 font-bold rounded-xl text-gray-900 text-sm"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Nieuwe aanvraag
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
                >
                  {/* Bestel je taxi header */}
                  <div className="px-8 pt-8 pb-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <h2 className="text-2xl font-extrabold text-white mb-6">Bestel je Omega Taxi</h2>

                    {/* Waar wil je heen */}
                    <div className="mb-6">
                      <p className="text-sm font-bold mb-4 text-white">Waar wil je heen?</p>
                      <div className="relative flex flex-col gap-0">
                        {/* Van */}
                        <div className="relative flex items-center">
                          <div className="absolute left-4 w-3 h-3 rounded-full border-2 border-white z-10" />
                          <input
                            type="text"
                            required
                            value={form.van}
                            onChange={(e) => set('van', e.target.value)}
                            className={inputClass}
                            style={{ ...inputStyle, paddingLeft: '2.5rem', borderRadius: '12px 12px 0 0' }}
                            placeholder="van   straatnaam met huisnummer"
                          />
                          {/* Swap */}
                          <button
                            type="button"
                            onClick={swapLocations}
                            className="absolute right-3 w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-70"
                            style={{ backgroundColor: ACCENT }}
                            title="Omwisselen"
                          >
                            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                          </button>
                        </div>

                        {/* Tussenstop toggle */}
                        <div
                          className="flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-opacity hover:opacity-80"
                          style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}` }}
                          onClick={() => setShowTussenstop(!showTussenstop)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ color: ACCENT }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          <span style={{ color: ACCENT }}>tussenstop toevoegen</span>
                        </div>

                        {showTussenstop && (
                          <input
                            type="text"
                            value={form.tussenstop}
                            onChange={(e) => set('tussenstop', e.target.value)}
                            className={inputClass}
                            style={{ ...inputStyle, paddingLeft: '1rem', borderRadius: 0, borderTop: 'none', borderBottom: 'none' }}
                            placeholder="tussenstop adres"
                          />
                        )}

                        {/* Naar */}
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 z-10">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: ACCENT }}>
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            required
                            value={form.naar}
                            onChange={(e) => set('naar', e.target.value)}
                            className={inputClass}
                            style={{ ...inputStyle, paddingLeft: '2.5rem', borderRadius: '0 0 12px 12px', borderTop: 'none' }}
                            placeholder="naar   straatnaam met huisnummer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bagage */}
                    <div>
                      <p className="text-sm font-medium mb-3" style={{ color: MUTED }}>Reis je met bagage?</p>
                      <div className="flex gap-6">
                        {[
                          { label: 'Ja', value: true },
                          { label: 'Nee, ik heb geen bagage', value: false },
                        ].map(({ label, value }) => (
                          <label key={label} className="flex items-center gap-2 cursor-pointer text-sm text-white">
                            <span
                              className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                              style={{
                                borderColor: form.bagage === value ? ACCENT : 'rgba(255,255,255,0.3)',
                                backgroundColor: form.bagage === value ? ACCENT : 'transparent',
                              }}
                            >
                              {form.bagage === value && (
                                <span className="w-2 h-2 rounded-full bg-gray-900" />
                              )}
                            </span>
                            <input
                              type="radio"
                              className="sr-only"
                              checked={form.bagage === value}
                              onChange={() => set('bagage', value)}
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Rechter kolom: datum/tijd/retour/reizigers */}
                  <div className="px-8 py-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Links: datum + retour */}
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
                              value={form.datum + (form.tijd ? 'T' + form.tijd : '')}
                              onChange={(e) => {
                                const val = e.target.value;
                                const [d, t] = val.split('T');
                                set('datum', d || '');
                                set('tijd', t || '');
                              }}
                              className={inputClass}
                              style={{ ...inputStyle, paddingLeft: '2.5rem', colorScheme: 'dark' }}
                              placeholder="Selecteer datum en tijd"
                            />
                          </div>
                        </div>

                        {/* Retour toggle */}
                        <div>
                          <label className="flex items-center gap-3 cursor-pointer mb-3">
                            <div
                              className="w-12 h-6 rounded-full relative transition-all flex-shrink-0"
                              style={{ backgroundColor: form.retour ? ACCENT : 'rgba(255,255,255,0.15)' }}
                              onClick={() => set('retour', !form.retour)}
                            >
                              <div
                                className="w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all shadow"
                                style={{ left: form.retour ? '26px' : '2px' }}
                              />
                            </div>
                            <span className="text-sm text-white font-medium">Retour</span>
                          </label>
                          {form.retour ? (
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base">📅</span>
                              <input
                                type="datetime-local"
                                required={form.retour}
                                value={form.retourDatum + (form.retourTijd ? 'T' + form.retourTijd : '')}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  const [d, t] = val.split('T');
                                  set('retourDatum', d || '');
                                  set('retourTijd', t || '');
                                }}
                                className={inputClass}
                                style={{ ...inputStyle, paddingLeft: '2.5rem', colorScheme: 'dark' }}
                                placeholder="Retour datum en tijd"
                              />
                            </div>
                          ) : (
                            <div
                              className="px-4 py-3 rounded-xl text-sm"
                              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: 'rgba(255,255,255,0.25)' }}
                            >
                              📅 Enkele reis
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Rechts: reizigers */}
                      <div>
                        <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: MUTED }}>
                          Aantal reizigers
                        </p>
                        <div
                          className="inline-flex items-center gap-4 px-5 py-3 rounded-xl"
                          style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: `1px solid ${BORDER}` }}
                        >
                          <button
                            type="button"
                            onClick={() => set('reizigers', Math.max(1, form.reizigers - 1))}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all hover:opacity-80 text-gray-900"
                            style={{ backgroundColor: form.reizigers > 1 ? ACCENT : 'rgba(255,255,255,0.2)', color: form.reizigers > 1 ? '#111' : 'rgba(255,255,255,0.5)' }}
                          >
                            −
                          </button>
                          <span className="text-white font-bold text-lg w-8 text-center">{form.reizigers}</span>
                          <button
                            type="button"
                            onClick={() => set('reizigers', Math.min(8, form.reizigers + 1))}
                            className="w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all hover:opacity-80"
                            style={{ backgroundColor: ACCENT, color: '#111' }}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-xs mt-2" style={{ color: MUTED }}>Max. 8 personen</p>
                      </div>
                    </div>
                  </div>

                  {/* Contactgegevens */}
                  <div className="px-8 py-6 space-y-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <h3 className="text-base font-bold text-white">Uw gegevens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: MUTED }}>Naam *</label>
                        <input
                          type="text"
                          required
                          value={form.naam}
                          onChange={(e) => set('naam', e.target.value)}
                          className={inputClass}
                          style={inputStyle}
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
                          className={inputClass}
                          style={inputStyle}
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
                        className={inputClass}
                        style={inputStyle}
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: MUTED }}>Opmerkingen</label>
                      <textarea
                        rows={3}
                        value={form.opmerking}
                        onChange={(e) => set('opmerking', e.target.value)}
                        className={inputClass + ' resize-none'}
                        style={inputStyle}
                        placeholder="Bijv. vluchtnummer, rolstoel nodig, grote bagage..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="px-8 py-6">
                    <button
                      type="submit"
                      className="w-full py-4 font-bold rounded-xl transition-all hover:scale-[1.01] text-gray-900 text-base shadow-lg"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Bereken mijn ritprijs & Bestellen
                    </button>
                    <p className="text-xs text-center mt-3" style={{ color: MUTED }}>
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
