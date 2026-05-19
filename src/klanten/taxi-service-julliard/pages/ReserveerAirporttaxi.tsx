import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const AirportBookingForm = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  const [form, setForm] = useState({
    type: 'heenreis',
    adres: '',
    luchthaven: '',
    datum: '',
    tijd: '',
    vluchtnummer: '',
    passagiers: 1,
    bagage: true,
    retour: false,
    retourDatum: '',
    retourTijd: '',
    retourVlucht: '',
    naam: '',
    telefoon: '',
    email: '',
    opmerking: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: primary }}>Reservering ontvangen!</h3>
        <p className="text-gray-500 mb-4">Wij nemen zo snel mogelijk contact met u op ter bevestiging.</p>
        <a href={`tel:${config.contact.phone}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white" style={{ backgroundColor: accent }}>
          📞 {config.contact.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5" style={{ backgroundColor: primary }}>
        <h2 className="text-white font-bold text-xl">Reserveer uw airporttaxi</h2>
        <p className="text-white/70 text-sm mt-1">Vul uw reisgegevens in — wij contacteren u ter bevestiging</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Reistype */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Type rit</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { val: 'heenreis', label: '🏠 → ✈️', desc: 'Heenreis (thuis naar airport)' },
              { val: 'terugreis', label: '✈️ → 🏠', desc: 'Terugreis (airport naar thuis)' },
            ].map(opt => (
              <button
                key={opt.val}
                type="button"
                onClick={() => setForm({ ...form, type: opt.val })}
                className="flex flex-col items-center gap-1 py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all"
                style={form.type === opt.val
                  ? { backgroundColor: `${primary}10`, borderColor: primary, color: primary }
                  : { borderColor: '#E5E7EB', color: '#6B7280' }
                }
              >
                <span className="text-xl">{opt.label}</span>
                <span className="text-xs">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Route */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
              {form.type === 'heenreis' ? 'Ophaaladres' : 'Afleveradres'}
            </label>
            <input
              type="text"
              required
              value={form.adres}
              onChange={e => setForm({ ...form, adres: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
              placeholder="Straatnaam, huisnummer, postcode"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Luchthaven</label>
            <select
              required
              value={form.luchthaven}
              onChange={e => setForm({ ...form, luchthaven: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 bg-white"
            >
              <option value="">Selecteer luchthaven...</option>
              {config.airports.map(a => (
                <option key={a.name} value={a.name}>{a.flag} {a.name} — {a.price}</option>
              ))}
              <option value="anders">Andere luchthaven (op aanvraag)</option>
            </select>
          </div>
        </div>

        {/* Datum/tijd/vlucht */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Datum</label>
            <input type="date" required value={form.datum} onChange={e => setForm({ ...form, datum: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
              {form.type === 'heenreis' ? 'Ophaaltijd' : 'Aankomsttijd vlucht'}
            </label>
            <input type="time" required value={form.tijd} onChange={e => setForm({ ...form, tijd: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Vluchtnummer</label>
            <input type="text" value={form.vluchtnummer} onChange={e => setForm({ ...form, vluchtnummer: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
              placeholder="bv. KL1234" />
          </div>
        </div>

        {/* Passagiers + opties */}
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Passagiers</label>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setForm({ ...form, passagiers: Math.max(1, form.passagiers - 1) })}
                className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-gray-400 transition-colors">−</button>
              <span className="text-lg font-bold w-6 text-center" style={{ color: primary }}>{form.passagiers}</span>
              <button type="button" onClick={() => setForm({ ...form, passagiers: Math.min(16, form.passagiers + 1) })}
                className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-gray-400 transition-colors">+</button>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            {[
              { label: '🧳 Bagage', val: form.bagage, key: 'bagage' as const },
              { label: '🔄 Retour', val: form.retour, key: 'retour' as const },
            ].map(opt => (
              <button key={opt.key} type="button"
                onClick={() => setForm({ ...form, [opt.key]: !opt.val })}
                className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                  style={{ backgroundColor: opt.val ? primary : 'transparent', borderColor: opt.val ? primary : '#D1D5DB' }}>
                  {opt.val && <span className="text-white text-xs font-bold">✓</span>}
                </div>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Retour velden */}
        {form.retour && (
          <div className="rounded-xl p-4 space-y-4" style={{ backgroundColor: `${accent}08`, border: `1px solid ${accent}30` }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Retourreis details</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Retourdatum</label>
                <input type="date" value={form.retourDatum} onChange={e => setForm({ ...form, retourDatum: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Aankomsttijd</label>
                <input type="time" value={form.retourTijd} onChange={e => setForm({ ...form, retourTijd: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Retourvlucht nr.</label>
                <input type="text" value={form.retourVlucht} onChange={e => setForm({ ...form, retourVlucht: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" placeholder="bv. KL1235" />
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-100 pt-5 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Uw contactgegevens</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Naam *</label>
              <input type="text" required value={form.naam} onChange={e => setForm({ ...form, naam: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" placeholder="Uw naam" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Telefoon *</label>
              <input type="tel" required value={form.telefoon} onChange={e => setForm({ ...form, telefoon: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" placeholder="+31 6 ..." />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">E-mail</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none" placeholder="uw@email.nl" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Opmerkingen</label>
            <textarea rows={3} value={form.opmerking} onChange={e => setForm({ ...form, opmerking: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none resize-none"
              placeholder="Eventuele bijzonderheden, rolstoeltoegankelijkheid, etc." />
          </div>
        </div>

        <button type="submit" className="w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90 text-sm uppercase tracking-widest" style={{ backgroundColor: accent }}>
          Reservering versturen →
        </button>
        <p className="text-center text-xs text-gray-400">
          Of bel direct:{' '}
          <a href={`tel:${config.contact.phone}`} className="font-semibold hover:underline" style={{ color: primary }}>
            {config.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
};

export const ReserveerAirporttaxi = () => {
  const primary = config.colors.primary;

  return (
    <Layout>
      <section className="relative py-20 text-white text-center" style={{ backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${config.colors.darkBg} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 text-sm">
            ✈️ Online reserveren
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Reserveer een Airporttaxi</h1>
          <p className="text-white/70 max-w-lg mx-auto">Vul het formulier in en wij bevestigen uw reservering zo snel mogelijk.</p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AirportBookingForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};
