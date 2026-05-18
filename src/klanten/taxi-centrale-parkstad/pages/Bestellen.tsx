import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Bestellen = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    van: '', naar: '', datum: '', tijd: '', passagiers: 1, bagage: false, retour: false,
    naam: '', telefoon: '', email: '', opmerking: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <Layout>
        <section className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
              style={{ backgroundColor: config.colors.primary }}
            >
              <span className="text-white">✓</span>
            </div>
            <h1 className="text-3xl font-black mb-3 tracking-tight" style={{ color: config.colors.text }}>Rit aangevraagd!</h1>
            <p className="text-gray-500 mb-8 text-sm">Wij nemen zo snel mogelijk contact met u op om de rit te bevestigen.</p>
            <div className="rounded-2xl p-5 text-left text-sm space-y-2 mb-8" style={{ backgroundColor: config.colors.light }}>
              <p><span className="font-bold" style={{ color: config.colors.text }}>Van:</span> <span className="text-gray-600">{form.van}</span></p>
              <p><span className="font-bold" style={{ color: config.colors.text }}>Naar:</span> <span className="text-gray-600">{form.naar}</span></p>
              <p><span className="font-bold" style={{ color: config.colors.text }}>Datum:</span> <span className="text-gray-600">{form.datum} om {form.tijd}</span></p>
              <p><span className="font-bold" style={{ color: config.colors.text }}>Passagiers:</span> <span className="text-gray-600">{form.passagiers}</span></p>
            </div>
            <p className="text-sm text-gray-500">
              Vragen? Bel{' '}
              <a href={`tel:${config.contact.phone}`} className="font-bold hover:underline" style={{ color: config.colors.primary }}>
                {config.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 text-white" style={{ backgroundColor: config.colors.primary }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Online bestellen</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-3">Taxi bestellen</h1>
          <p className="text-white/70 text-sm">Vul uw ritgegevens in — wij bellen u terug ter bevestiging.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Steps */}
          <div className="flex items-center justify-center gap-0 mb-10">
            {[{ n: 1, label: 'Ritdetails' }, { n: 2, label: 'Uw gegevens' }].map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors"
                  style={{
                    backgroundColor: step === s.n ? config.colors.primary : step > s.n ? config.colors.light : '#F3F4F6',
                    color: step === s.n ? '#fff' : step > s.n ? config.colors.primary : '#9CA3AF',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: step === s.n ? 'rgba(255,255,255,0.2)' : step > s.n ? config.colors.primary : '#D1D5DB',
                      color: step === s.n ? '#fff' : step > s.n ? '#fff' : '#9CA3AF',
                    }}
                  >
                    {step > s.n ? '✓' : s.n}
                  </span>
                  {s.label}
                </div>
                {i < 1 && <div className="w-8 h-0.5 bg-gray-200" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white border-2 rounded-2xl p-8 shadow-sm" style={{ borderColor: config.colors.light }}>
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-black mb-6 tracking-tight" style={{ color: config.colors.text }}>Ritdetails</h2>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Van *</label>
                  <input
                    type="text"
                    required
                    value={form.van}
                    onChange={e => setForm({ ...form, van: e.target.value })}
                    placeholder="Straatnaam + huisnummer, Stad"
                    className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ borderColor: config.colors.light }}
                    onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                    onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Naar *</label>
                  <input
                    type="text"
                    required
                    value={form.naar}
                    onChange={e => setForm({ ...form, naar: e.target.value })}
                    placeholder="Straatnaam + huisnummer, Stad"
                    className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ borderColor: config.colors.light }}
                    onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                    onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Datum *</label>
                    <input
                      type="date"
                      required
                      value={form.datum}
                      onChange={e => setForm({ ...form, datum: e.target.value })}
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Tijd *</label>
                    <input
                      type="time"
                      required
                      value={form.tijd}
                      onChange={e => setForm({ ...form, tijd: e.target.value })}
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Aantal passagiers</label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setForm({ ...form, passagiers: Math.max(1, form.passagiers - 1) })}
                      className="w-9 h-9 rounded-full border-2 font-bold text-lg transition-all hover:text-white"
                      style={{ borderColor: config.colors.primary, color: config.colors.primary }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = config.colors.primary; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ''; (e.currentTarget as HTMLButtonElement).style.color = config.colors.primary; }}
                    >−</button>
                    <span className="text-lg font-black w-6 text-center" style={{ color: config.colors.text }}>{form.passagiers}</span>
                    <button type="button" onClick={() => setForm({ ...form, passagiers: Math.min(8, form.passagiers + 1) })}
                      className="w-9 h-9 rounded-full border-2 font-bold text-lg transition-all hover:text-white"
                      style={{ borderColor: config.colors.primary, color: config.colors.primary }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = config.colors.primary; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ''; (e.currentTarget as HTMLButtonElement).style.color = config.colors.primary; }}
                    >+</button>
                  </div>
                </div>

                <div className="flex gap-6">
                  {[{ key: 'retour', label: 'Retourrit' }, { key: 'bagage', label: 'Bagage mee' }].map(opt => (
                    <label key={opt.key} className="flex items-center gap-2.5 cursor-pointer">
                      <div
                        onClick={() => setForm({ ...form, [opt.key]: !form[opt.key as 'retour' | 'bagage'] })}
                        className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer"
                        style={{
                          backgroundColor: form[opt.key as 'retour' | 'bagage'] ? config.colors.primary : '',
                          borderColor: form[opt.key as 'retour' | 'bagage'] ? config.colors.primary : '#D1D5DB',
                        }}
                      >
                        {form[opt.key as 'retour' | 'bagage'] && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      <span className="text-sm font-medium" style={{ color: config.colors.text }}>{opt.label}</span>
                    </label>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!form.van || !form.naar || !form.datum || !form.tijd}
                  className="w-full py-4 text-white font-bold rounded-xl uppercase tracking-widest text-sm transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  Volgende →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-black mb-6 tracking-tight" style={{ color: config.colors.text }}>Uw contactgegevens</h2>
                {[
                  { key: 'naam', label: 'Naam *', type: 'text', placeholder: 'Voor- en achternaam', required: true },
                  { key: 'telefoon', label: 'Telefoon *', type: 'tel', placeholder: '06 - ...', required: true },
                  { key: 'email', label: 'E-mail', type: 'email', placeholder: 'uw@email.nl', required: false },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">{field.label}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.key as keyof typeof form] as string}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Opmerking</label>
                  <textarea
                    rows={3}
                    value={form.opmerking}
                    onChange={e => setForm({ ...form, opmerking: e.target.value })}
                    placeholder="Extra wensen of bijzonderheden..."
                    className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                    style={{ borderColor: config.colors.light }}
                    onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                    onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                  />
                </div>

                {/* Samenvatting */}
                <div className="rounded-xl p-4 text-sm space-y-1.5" style={{ backgroundColor: config.colors.light }}>
                  <p className="font-bold text-xs uppercase tracking-widest mb-2 text-gray-400">Samenvatting</p>
                  <p><span className="text-gray-500">Van:</span> <span className="font-medium" style={{ color: config.colors.text }}>{form.van}</span></p>
                  <p><span className="text-gray-500">Naar:</span> <span className="font-medium" style={{ color: config.colors.text }}>{form.naar}</span></p>
                  <p><span className="text-gray-500">Wanneer:</span> <span className="font-medium" style={{ color: config.colors.text }}>{form.datum} om {form.tijd}</span></p>
                  <p><span className="text-gray-500">Passagiers:</span> <span className="font-medium" style={{ color: config.colors.text }}>{form.passagiers}</span></p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border-2 font-bold rounded-xl text-sm transition-colors"
                    style={{ borderColor: config.colors.light, color: config.colors.text }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = config.colors.light)}
                  >
                    ← Terug
                  </button>
                  <button
                    type="submit"
                    className="flex-grow py-4 text-white font-bold rounded-xl hover:opacity-90 transition-all uppercase tracking-widest text-sm"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    Rit aanvragen
                  </button>
                </div>
                <p className="text-xs text-gray-400 text-center">Wij bellen u terug ter bevestiging</p>
              </div>
            )}
          </form>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Liever direct bellen?{' '}
              <a href={`tel:${config.contact.phone}`} className="font-bold hover:underline" style={{ color: config.colors.primary }}>
                {config.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
