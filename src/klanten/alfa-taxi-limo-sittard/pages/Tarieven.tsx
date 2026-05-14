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

const RadioPill = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) => {
  const { primary, accent } = config.colors;
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all"
      style={
        checked
          ? { borderColor: primary, backgroundColor: `${primary}15`, color: primary }
          : { borderColor: '#E2E8F0', backgroundColor: 'white', color: '#64748B' }
      }
    >
      <span
        className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
        style={
          checked
            ? { borderColor: primary, backgroundColor: primary }
            : { borderColor: '#CBD5E1' }
        }
      >
        {checked && <span className="w-1.5 h-1.5 rounded-full bg-white block" />}
      </span>
      {label}
    </button>
  );
};

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white text-gray-800 placeholder-gray-400 transition-colors';

export const Tarieven = () => {
  const { primary, accent, dark, text, primaryLight } = config.colors;
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [step1, setStep1] = useState<StepOneData>({
    ophaaldatum: '',
    ophaaluur: '',
    ophaalminuten: '',
    ophaallocatie: '',
    eindbestemming: '',
    tussenstop: '',
    betaalmethode: 'contant',
  });

  const [step2, setStep2] = useState<StepTwoData>({
    aanhef: '',
    naam: '',
    telefoon: '',
    email: '',
    stad: '',
    postcode: '',
  });

  const [step3, setStep3] = useState<StepThreeData>({
    aantalPersonen: '',
    aantalKoffers: '',
    autoType: '4',
    akkoordVoorwaarden: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const stepTitles = [
    'Gegevens heenreis',
    'Uw gegevens',
    'Speciale wensen',
  ];

  const stepIcons = ['📅', '👤', '🎯'];

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-16 text-white"
        style={{ background: `linear-gradient(135deg, ${dark} 0%, ${primary} 100%)` }}
      >
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
            Tarieven & Boeken
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Rit Bestellen</h1>
          <p className="text-white/70 max-w-lg">
            Boek uw rit in 3 eenvoudige stappen, of bel ons direct op{' '}
            <a href={`tel:${config.contact.phone}`} className="font-bold underline" style={{ color: accent }}>
              {config.contact.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Diensten & tarieven */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: text }}>
              Onze Diensten & Tarieven
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {config.services.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: primaryLight }}
                >
                  {s.icon}
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-black" style={{ color: text }}>{s.name}</h3>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: primaryLight, color: primary }}
                  >
                    {s.priceLabel}
                  </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.description}</p>
                <ul className="space-y-1">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <span style={{ color: primary }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">

            {/* Step indicators */}
            <div className="flex items-center mb-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all"
                      style={
                        n < step
                          ? { backgroundColor: '#22C55E', color: 'white' }
                          : n === step
                          ? { backgroundColor: primary, color: 'white' }
                          : { backgroundColor: '#F1F5F9', color: '#94A3B8' }
                      }
                    >
                      {n < step ? '✓' : stepIcons[n - 1]}
                    </div>
                    <span
                      className="text-xs font-semibold hidden md:block"
                      style={{ color: n === step ? primary : n < step ? '#22C55E' : '#94A3B8' }}
                    >
                      {stepTitles[n - 1]}
                    </span>
                  </div>
                  {n < 3 && (
                    <div
                      className="flex-1 h-0.5 mx-2 mb-5"
                      style={{ backgroundColor: n < step ? '#22C55E' : '#E2E8F0' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {submitted ? (
              <div
                className="rounded-2xl p-12 text-center border-2"
                style={{ borderColor: primary, backgroundColor: primaryLight }}
              >
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-2xl font-black mb-3" style={{ color: text }}>Rit aangevraagd!</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bedankt voor uw boeking! Wij nemen zo snel mogelijk contact op ter bevestiging.
                  U kunt ons ook bereiken op{' '}
                  <a href={`tel:${config.contact.phone}`} className="font-bold" style={{ color: primary }}>
                    {config.contact.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="px-8 py-3 font-bold text-white rounded-xl"
                  style={{ backgroundColor: accent }}
                >
                  Nieuwe rit boeken
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Form header */}
                <div className="px-8 py-5" style={{ backgroundColor: primary }}>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">
                    Stap {step} van 3
                  </p>
                  <h3 className="text-xl font-black text-white mt-0.5">
                    {step}. {stepTitles[step - 1]}
                  </h3>
                  {/* progress bar */}
                  <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-500"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="px-8 py-8">
                  {/* ── STEP 1 ── */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Ophaaldatum <span style={{ color: accent }}>*</span>
                          </label>
                          <input
                            type="date"
                            required
                            value={step1.ophaaldatum}
                            onChange={(e) => setStep1({ ...step1, ophaaldatum: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Ophaaltijd <span style={{ color: accent }}>*</span>
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              required
                              min={0}
                              max={23}
                              placeholder="UU"
                              value={step1.ophaaluur}
                              onChange={(e) => setStep1({ ...step1, ophaaluur: e.target.value })}
                              className={inputClass}
                            />
                            <input
                              type="number"
                              required
                              min={0}
                              max={59}
                              placeholder="MM"
                              value={step1.ophaalminuten}
                              onChange={(e) => setStep1({ ...step1, ophaalminuten: e.target.value })}
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Ophaallocatie
                          </label>
                          <input
                            type="text"
                            placeholder="Van (adres of stad)"
                            value={step1.ophaallocatie}
                            onChange={(e) => setStep1({ ...step1, ophaallocatie: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Eindbestemming
                          </label>
                          <input
                            type="text"
                            placeholder="Naar (adres of stad)"
                            value={step1.eindbestemming}
                            onChange={(e) => setStep1({ ...step1, eindbestemming: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                          Tussenstop
                        </label>
                        <input
                          type="text"
                          placeholder="Tussenstop (optioneel)"
                          value={step1.tussenstop}
                          onChange={(e) => setStep1({ ...step1, tussenstop: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-3" style={{ color: text }}>
                          Betaalmogelijkheid <span style={{ color: accent }}>*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {(['contant', 'pinnen', 'tikkie', 'creditcard'] as Betaalmethode[]).map((m) => (
                            <RadioPill
                              key={m}
                              checked={step1.betaalmethode === m}
                              onChange={() => setStep1({ ...step1, betaalmethode: m })}
                              label={m.charAt(0).toUpperCase() + m.slice(1)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-8 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                          style={{ backgroundColor: accent }}
                        >
                          Volgende →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2 ── */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold mb-3" style={{ color: text }}>
                          Aanhef
                        </label>
                        <div className="flex gap-2">
                          <RadioPill
                            checked={step2.aanhef === 'dhr'}
                            onChange={() => setStep2({ ...step2, aanhef: 'dhr' })}
                            label="Dhr."
                          />
                          <RadioPill
                            checked={step2.aanhef === 'mevr'}
                            onChange={() => setStep2({ ...step2, aanhef: 'mevr' })}
                            label="Mevr."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Volledige naam
                          </label>
                          <input
                            type="text"
                            placeholder="Naam"
                            value={step2.naam}
                            onChange={(e) => setStep2({ ...step2, naam: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Telefoon <span style={{ color: accent }}>*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="Telefoon"
                            value={step2.telefoon}
                            onChange={(e) => setStep2({ ...step2, telefoon: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Email <span style={{ color: accent }}>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Email"
                            value={step2.email}
                            onChange={(e) => setStep2({ ...step2, email: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                          Adres
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Stad"
                            value={step2.stad}
                            onChange={(e) => setStep2({ ...step2, stad: e.target.value })}
                            className={inputClass}
                          />
                          <input
                            type="text"
                            placeholder="Postcode"
                            value={step2.postcode}
                            onChange={(e) => setStep2({ ...step2, postcode: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-6 py-3 font-bold rounded-xl border-2 border-gray-200 text-gray-600 hover:border-gray-300 transition-colors"
                        >
                          ← Vorige
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="px-8 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                          style={{ backgroundColor: accent }}
                        >
                          Volgende →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3 ── */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Aantal personen
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={8}
                            placeholder="Aantal personen"
                            value={step3.aantalPersonen}
                            onChange={(e) => setStep3({ ...step3, aantalPersonen: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: text }}>
                            Aantal koffers
                          </label>
                          <input
                            type="number"
                            min={0}
                            placeholder="Aantal koffers"
                            value={step3.aantalKoffers}
                            onChange={(e) => setStep3({ ...step3, aantalKoffers: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-3" style={{ color: text }}>
                          Soort auto <span style={{ color: accent }}>*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {(['4', '8'] as AutoType[]).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setStep3({ ...step3, autoType: type })}
                              className="p-4 rounded-2xl border-2 text-left transition-all"
                              style={
                                step3.autoType === type
                                  ? { borderColor: primary, backgroundColor: primaryLight }
                                  : { borderColor: '#E2E8F0', backgroundColor: 'white' }
                              }
                            >
                              <img
                                src={
                                  type === '4'
                                    ? 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=160&fit=crop'
                                    : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=160&fit=crop'
                                }
                                alt={`${type}-persoons`}
                                className="w-full h-20 object-cover rounded-xl mb-3"
                              />
                              <p
                                className="font-black text-sm"
                                style={{ color: step3.autoType === type ? primary : text }}
                              >
                                {type}-persoons taxi
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {type === '4' ? 'Sedan, max. 4 passagiers' : 'MPV/bus, max. 8 passagiers'}
                              </p>
                              <div className="flex gap-0.5 mt-2">
                                {Array.from({ length: parseInt(type) }).map((_, i) => (
                                  <span key={i} className="text-sm">🧍</span>
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Voorwaarden */}
                      <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors">
                        <div
                          className="w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all"
                          style={
                            step3.akkoordVoorwaarden
                              ? { borderColor: primary, backgroundColor: primary }
                              : { borderColor: '#CBD5E1', backgroundColor: 'white' }
                          }
                          onClick={() => setStep3({ ...step3, akkoordVoorwaarden: !step3.akkoordVoorwaarden })}
                        >
                          {step3.akkoordVoorwaarden && (
                            <span className="text-white text-xs font-black">✓</span>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          required
                          checked={step3.akkoordVoorwaarden}
                          onChange={(e) => setStep3({ ...step3, akkoordVoorwaarden: e.target.checked })}
                          className="sr-only"
                        />
                        <span className="text-sm text-gray-600 leading-relaxed">
                          Ik heb de algemene voorwaarden gelezen en ga akkoord.
                        </span>
                      </label>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3 font-bold rounded-xl border-2 border-gray-200 text-gray-600 hover:border-gray-300 transition-colors"
                        >
                          ← Vorige
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3 font-bold text-white rounded-xl transition-opacity hover:opacity-90"
                          style={{ backgroundColor: accent }}
                        >
                          Rit Aanvragen →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            )}

            {/* Direct bellen */}
            <div
              className="mt-6 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ backgroundColor: `${dark}08`, border: `1px solid ${dark}12` }}
            >
              <div>
                <p className="font-black text-sm" style={{ color: text }}>Liever direct bellen?</p>
                <p className="text-xs text-gray-400 mt-0.5">We zijn 24/7 bereikbaar voor u.</p>
              </div>
              <a
                href={`tel:${config.contact.phone}`}
                className="flex-shrink-0 px-6 py-3 font-bold text-white rounded-xl text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: primary }}
              >
                📞 {config.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
