import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Bestel = () => {
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
        <section className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center px-4 max-w-md">
            <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
            <h1 className="text-3xl font-black mb-4 tracking-tight">Rit aangevraagd!</h1>
            <p className="text-gray-600 mb-8">Wij nemen zo snel mogelijk contact met u op om de rit te bevestigen.</p>
            <div className="bg-gray-50 rounded-xl p-5 text-left text-sm space-y-2 mb-8">
              <p><span className="font-bold">Van:</span> {form.van}</p>
              <p><span className="font-bold">Naar:</span> {form.naar}</p>
              <p><span className="font-bold">Datum:</span> {form.datum} om {form.tijd}</p>
              <p><span className="font-bold">Passagiers:</span> {form.passagiers}</p>
            </div>
            <p className="text-sm text-gray-500">
              Vragen? Bel{' '}
              <a href={`tel:${config.contact.phone}`} className="font-bold underline">
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
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Rit Bestellen</h1>
          <p className="text-gray-400">Vul uw ritgegevens in — wij bellen u terug ter bevestiging.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-0 mb-10">
            {[{ n: 1, label: 'Ritdetails' }, { n: 2, label: 'Uw gegevens' }].map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${step === s.n ? 'bg-black text-white' : step > s.n ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${step === s.n ? 'bg-white text-black' : step > s.n ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-500'}`}>
                    {step > s.n ? '✓' : s.n}
                  </span>
                  {s.label}
                </div>
                {i < 1 && <div className="w-8 h-0.5 bg-gray-200" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-black mb-6 tracking-tight">Ritdetails</h2>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Van *</label>
                  <input
                    type="text"
                    required
                    value={form.van}
                    onChange={e => setForm({ ...form, van: e.target.value })}
                    placeholder="Straatnaam + huisnummer, Stad"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naar *</label>
                  <input
                    type="text"
                    required
                    value={form.naar}
                    onChange={e => setForm({ ...form, naar: e.target.value })}
                    placeholder="Straatnaam + huisnummer, Stad"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Datum *</label>
                    <input
                      type="date"
                      required
                      value={form.datum}
                      onChange={e => setForm({ ...form, datum: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tijd *</label>
                    <input
                      type="time"
                      required
                      value={form.tijd}
                      onChange={e => setForm({ ...form, tijd: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Passagiers</label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setForm({ ...form, passagiers: Math.max(1, form.passagiers - 1) })}
                      className="w-9 h-9 rounded-full border-2 border-gray-200 font-bold hover:border-black hover:bg-black hover:text-white transition-all">−</button>
                    <span className="text-lg font-black w-6 text-center">{form.passagiers}</span>
                    <button type="button" onClick={() => setForm({ ...form, passagiers: Math.min(8, form.passagiers + 1) })}
                      className="w-9 h-9 rounded-full border-2 border-gray-200 font-bold hover:border-black hover:bg-black hover:text-white transition-all">+</button>
                  </div>
                </div>
                <div className="flex gap-6">
                  {[
                    { key: 'retour', label: 'Retourrit' },
                    { key: 'bagage', label: 'Bagage mee' },
                  ].map(opt => (
                    <label key={opt.key} className="flex items-center gap-2.5 cursor-pointer">
                      <div
                        onClick={() => setForm({ ...form, [opt.key]: !form[opt.key as 'retour' | 'bagage'] })}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${form[opt.key as 'retour' | 'bagage'] ? 'bg-black border-black' : 'border-gray-300 hover:border-gray-500'}`}
                      >
                        {form[opt.key as 'retour' | 'bagage'] && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      <span className="text-sm font-medium">{opt.label}</span>
                    </label>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!form.van || !form.naar || !form.datum || !form.tijd}
                  className="w-full py-4 bg-black text-white font-bold rounded-xl uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Volgende →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-black mb-6 tracking-tight">Uw contactgegevens</h2>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naam *</label>
                  <input
                    type="text"
                    required
                    value={form.naam}
                    onChange={e => setForm({ ...form, naam: e.target.value })}
                    placeholder="Voor- en achternaam"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Telefoon *</label>
                  <input
                    type="tel"
                    required
                    value={form.telefoon}
                    onChange={e => setForm({ ...form, telefoon: e.target.value })}
                    placeholder="06 - ..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="uw@email.nl"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Opmerking</label>
                  <textarea
                    rows={3}
                    value={form.opmerking}
                    onChange={e => setForm({ ...form, opmerking: e.target.value })}
                    placeholder="Extra wensen of bijzonderheden..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1.5">
                  <p className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Samenvatting</p>
                  <p><span className="text-gray-500">Van:</span> <span className="font-medium">{form.van}</span></p>
                  <p><span className="text-gray-500">Naar:</span> <span className="font-medium">{form.naar}</span></p>
                  <p><span className="text-gray-500">Wanneer:</span> <span className="font-medium">{form.datum} om {form.tijd}</span></p>
                  <p><span className="text-gray-500">Passagiers:</span> <span className="font-medium">{form.passagiers}</span></p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-black transition-colors text-sm"
                  >
                    ← Terug
                  </button>
                  <button
                    type="submit"
                    className="flex-2 flex-grow py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
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
              <a href={`tel:${config.contact.phone}`} className="font-bold text-black hover:underline">
                {config.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
