import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

type Betaalmethode = 'contant' | 'pinnen' | 'tikkie' | 'creditcard';
type Aanhef = 'dhr' | 'mevr' | '';
type AutoType = '4' | '8';

interface StepOneData {
  ophaaldatum: string;
  ophaaluur: string;
  ophaalminuten: string;
  ophaallocatie: string;
  eindbestemming: string;
  tussenstop: string;
  betaalmethode: Betaalmethode;
}

interface StepTwoData {
  aanhef: Aanhef;
  naam: string;
  telefoon: string;
  email: string;
  stad: string;
  postcode: string;
}

interface StepThreeData {
  aantalPersonen: string;
  aantalKoffers: string;
  autoType: AutoType;
  akkoordVoorwaarden: boolean;
}

const inp = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white text-gray-800 placeholder-gray-400 transition-all';

const Pill = ({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) => {
  const { primary } = config.colors;
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
      style={
        checked
          ? { borderColor: primary, backgroundColor: `${primary}12`, color: primary }
          : { borderColor: '#E2E8F0', backgroundColor: 'white', color: '#64748B' }
      }
    >
      <span
        className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
        style={{ borderColor: checked ? primary : '#CBD5E1', backgroundColor: checked ? primary : 'white' }}
      >
        {checked && <span className="w-1.5 h-1.5 rounded-full bg-white block" />}
      </span>
      {label}
    </button>
  );
};

export const Tarieven = () => {
  const { primary, accent, text, primaryLight } = config.colors;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [s1, setS1] = useState<StepOneData>({ ophaaldatum: '', ophaaluur: '', ophaalminuten: '', ophaallocatie: '', eindbestemming: '', tussenstop: '', betaalmethode: 'contant' });
  const [s2, setS2] = useState<StepTwoData>({ aanhef: '', naam: '', telefoon: '', email: '', stad: '', postcode: '' });
  const [s3, setS3] = useState<StepThreeData>({ aantalPersonen: '', aantalKoffers: '', autoType: '4', akkoordVoorwaarden: false });

  const titles = ['Gegevens heenreis', 'Uw gegevens', 'Speciale wensen'];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primary }}>Tarieven & Boeken</p>
          <h1 className="text-3xl md:text-4xl font-black" style={{ color: text }}>Rit Bestellen</h1>
          <p className="text-gray-500 text-sm mt-2">
            Boek uw rit in 3 eenvoudige stappen, of bel ons op{' '}
            <a href={`tel:${config.contact.phone}`} className="font-bold" style={{ color: primary }}>
              {config.contact.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-black mb-8" style={{ color: text }}>Onze Diensten & Tarieven</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {config.services.map((s) => (
              <div key={s.id} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: primaryLight }}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: primaryLight, color: primary }}>
                    {s.priceLabel}
                  </span>
                </div>
                <h3 className="text-sm font-black mb-1" style={{ color: text }}>{s.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{s.description}</p>
                <ul className="space-y-1">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span style={{ color: primary }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">

            {/* Step tracker */}
            <div className="flex items-center gap-2 mb-8">
              {titles.map((title, i) => {
                const n = i + 1;
                const done = n < step;
                const active = n === step;
                return (
                  <div key={n} className="flex items-center gap-2 flex-1 last:flex-none">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-all"
                        style={done ? { backgroundColor: '#22C55E', color: 'white' } : active ? { backgroundColor: primary, color: 'white' } : { backgroundColor: '#E2E8F0', color: '#94A3B8' }}
                      >
                        {done ? '✓' : n}
                      </div>
                      <span className="text-xs font-semibold hidden sm:block truncate" style={{ color: active ? primary : done ? '#22C55E' : '#94A3B8' }}>
                        {title}
                      </span>
                    </div>
                    {n < 3 && <div className="flex-1 h-px mx-1" style={{ backgroundColor: n < step ? '#22C55E' : '#E2E8F0' }} />}
                  </div>
                );
              })}
            </div>

            {submitted ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-black mb-2" style={{ color: text }}>Rit aangevraagd!</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Bedankt! Wij nemen contact op ter bevestiging. Ook bereikbaar via{' '}
                  <a href={`tel:${config.contact.phone}`} className="font-bold" style={{ color: primary }}>{config.contact.phone}</a>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="px-7 py-3 font-bold text-white rounded-xl"
                  style={{ backgroundColor: accent }}
                >
                  Nieuwe rit boeken
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Form header */}
                <div className="px-7 py-5 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Stap {step} van 3</p>
                      <h3 className="text-base font-black mt-0.5" style={{ color: text }}>{titles[step - 1]}</h3>
                    </div>
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${(step / 3) * 100}%`, backgroundColor: primary }} />
                    </div>
                  </div>
                </div>

                <div className="px-7 py-7">
                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Ophaaldatum <span style={{ color: accent }}>*</span></label>
                          <input type="date" required value={s1.ophaaldatum} onChange={(e) => setS1({ ...s1, ophaaldatum: e.target.value })} className={inp} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Ophaaltijd <span style={{ color: accent }}>*</span></label>
                          <div className="flex gap-2">
                            <input type="number" required min={0} max={23} placeholder="UU" value={s1.ophaaluur} onChange={(e) => setS1({ ...s1, ophaaluur: e.target.value })} className={inp} />
                            <input type="number" required min={0} max={59} placeholder="MM" value={s1.ophaalminuten} onChange={(e) => setS1({ ...s1, ophaalminuten: e.target.value })} className={inp} />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Ophaallocatie</label>
                          <input type="text" placeholder="Van (adres of stad)" value={s1.ophaallocatie} onChange={(e) => setS1({ ...s1, ophaallocatie: e.target.value })} className={inp} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Eindbestemming</label>
                          <input type="text" placeholder="Naar (adres of stad)" value={s1.eindbestemming} onChange={(e) => setS1({ ...s1, eindbestemming: e.target.value })} className={inp} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Tussenstop</label>
                        <input type="text" placeholder="Tussenstop (optioneel)" value={s1.tussenstop} onChange={(e) => setS1({ ...s1, tussenstop: e.target.value })} className={inp} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wide text-gray-500">Betaalmogelijkheid <span style={{ color: accent }}>*</span></label>
                        <div className="flex flex-wrap gap-2">
                          {(['contant', 'pinnen', 'tikkie', 'creditcard'] as Betaalmethode[]).map((m) => (
                            <Pill key={m} checked={s1.betaalmethode === m} onChange={() => setS1({ ...s1, betaalmethode: m })} label={m.charAt(0).toUpperCase() + m.slice(1)} />
                          ))}
                        </div>
                      </div>
                      <button type="button" onClick={() => setStep(2)} className="px-7 py-3 font-bold text-white rounded-xl text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
                        Volgende →
                      </button>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wide text-gray-500">Aanhef</label>
                        <div className="flex gap-2">
                          <Pill checked={s2.aanhef === 'dhr'} onChange={() => setS2({ ...s2, aanhef: 'dhr' })} label="Dhr." />
                          <Pill checked={s2.aanhef === 'mevr'} onChange={() => setS2({ ...s2, aanhef: 'mevr' })} label="Mevr." />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Volledige naam</label>
                          <input type="text" placeholder="Naam" value={s2.naam} onChange={(e) => setS2({ ...s2, naam: e.target.value })} className={inp} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Telefoon <span style={{ color: accent }}>*</span></label>
                          <input type="tel" required placeholder="Telefoon" value={s2.telefoon} onChange={(e) => setS2({ ...s2, telefoon: e.target.value })} className={inp} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Email <span style={{ color: accent }}>*</span></label>
                          <input type="email" required placeholder="Email" value={s2.email} onChange={(e) => setS2({ ...s2, email: e.target.value })} className={inp} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Adres</label>
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="Stad" value={s2.stad} onChange={(e) => setS2({ ...s2, stad: e.target.value })} className={inp} />
                          <input type="text" placeholder="Postcode" value={s2.postcode} onChange={(e) => setS2({ ...s2, postcode: e.target.value })} className={inp} />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="px-6 py-3 font-bold rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm transition-colors">← Vorige</button>
                        <button type="button" onClick={() => setStep(3)} className="px-7 py-3 font-bold text-white rounded-xl text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>Volgende →</button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Aantal personen</label>
                          <input type="number" min={1} max={8} placeholder="Aantal" value={s3.aantalPersonen} onChange={(e) => setS3({ ...s3, aantalPersonen: e.target.value })} className={inp} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-500">Aantal koffers</label>
                          <input type="number" min={0} placeholder="Aantal" value={s3.aantalKoffers} onChange={(e) => setS3({ ...s3, aantalKoffers: e.target.value })} className={inp} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wide text-gray-500">Soort auto <span style={{ color: accent }}>*</span></label>
                        <div className="grid grid-cols-2 gap-3">
                          {(['4', '8'] as AutoType[]).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setS3({ ...s3, autoType: type })}
                              className="p-4 rounded-xl border-2 text-left transition-all"
                              style={s3.autoType === type ? { borderColor: primary, backgroundColor: primaryLight } : { borderColor: '#E2E8F0' }}
                            >
                              <img
                                src={type === '4' ? 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=140&fit=crop' : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=140&fit=crop'}
                                alt={`${type}-persoons`}
                                className="w-full h-16 object-cover rounded-lg mb-2"
                              />
                              <p className="text-xs font-black" style={{ color: s3.autoType === type ? primary : text }}>
                                {type}-persoons taxi
                              </p>
                              <p className="text-[11px] text-gray-400 mt-0.5">
                                {type === '4' ? 'Sedan, max. 4 passagiers' : 'MPV, max. 8 passagiers'}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-gray-100 bg-gray-50">
                        <div
                          className="w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0"
                          style={s3.akkoordVoorwaarden ? { borderColor: primary, backgroundColor: primary } : { borderColor: '#CBD5E1' }}
                          onClick={() => setS3({ ...s3, akkoordVoorwaarden: !s3.akkoordVoorwaarden })}
                        >
                          {s3.akkoordVoorwaarden && <span className="text-white text-[10px] font-black">✓</span>}
                        </div>
                        <input type="checkbox" required checked={s3.akkoordVoorwaarden} onChange={(e) => setS3({ ...s3, akkoordVoorwaarden: e.target.checked })} className="sr-only" />
                        <span className="text-sm text-gray-600">Ik heb de algemene voorwaarden gelezen en ga akkoord.</span>
                      </label>

                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(2)} className="px-6 py-3 font-bold rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm transition-colors">← Vorige</button>
                        <button type="submit" className="flex-1 py-3 font-bold text-white rounded-xl text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
                          Rit Aanvragen →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            )}

            {/* Bel direct */}
            <div className="mt-5 flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div>
                <p className="text-sm font-bold" style={{ color: text }}>Liever direct bellen?</p>
                <p className="text-xs text-gray-400 mt-0.5">Wij zijn 24/7 voor u bereikbaar.</p>
              </div>
              <a href={`tel:${config.contact.phone}`} className="px-5 py-2.5 font-bold text-white rounded-xl text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: primary }}>
                📞 Bel Nu
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
