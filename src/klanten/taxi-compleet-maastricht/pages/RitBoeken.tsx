import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const RitBoeken = () => {
  const primary = config.colors.primary;
  const accent = config.colors.accent;

  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    email: '',
    van: '',
    naar: '',
    datum: '',
    tijd: '',
    passagiers: '1',
    retour: false,
    bagage: true,
    opmerking: '',
  });

  const set = (key: string, val: string | boolean) => setForm(f => ({ ...f, [key]: val }));

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 text-white" style={{ backgroundColor: primary }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rit boeken</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: config.colors.lightBg }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold mb-6" style={{ color: primary }}>Uw ritgegevens</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naam *</label>
                    <input
                      type="text"
                      value={form.naam}
                      onChange={e => set('naam', e.target.value)}
                      placeholder="Uw volledige naam"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Telefoon *</label>
                    <input
                      type="tel"
                      value={form.telefoon}
                      onChange={e => set('telefoon', e.target.value)}
                      placeholder="06 — — — —"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="uw@email.nl"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Van *</label>
                    <input
                      type="text"
                      value={form.van}
                      onChange={e => set('van', e.target.value)}
                      placeholder="Vertrekadres"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Naar *</label>
                    <input
                      type="text"
                      value={form.naar}
                      onChange={e => set('naar', e.target.value)}
                      placeholder="Bestemmingsadres"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Datum *</label>
                    <input
                      type="date"
                      value={form.datum}
                      onChange={e => set('datum', e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tijd *</label>
                    <input
                      type="time"
                      value={form.tijd}
                      onChange={e => set('tijd', e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Aantal passagiers</label>
                    <select
                      value={form.passagiers}
                      onChange={e => set('passagiers', e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors bg-white"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col justify-center gap-4 pt-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div
                        onClick={() => set('retour', !form.retour)}
                        className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
                        style={{ borderColor: form.retour ? primary : '#d1d5db', backgroundColor: form.retour ? primary : 'transparent' }}
                      >
                        {form.retour && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className="text-sm font-medium text-gray-700">Retour gewenst</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div
                        onClick={() => set('bagage', !form.bagage)}
                        className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
                        style={{ borderColor: form.bagage ? primary : '#d1d5db', backgroundColor: form.bagage ? primary : 'transparent' }}
                      >
                        {form.bagage && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className="text-sm font-medium text-gray-700">Ik heb bagage</span>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Opmerkingen</label>
                    <textarea
                      value={form.opmerking}
                      onChange={e => set('opmerking', e.target.value)}
                      rows={4}
                      placeholder="Bijzonderheden, tussenstops, speciale wensen..."
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-800 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 w-full py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  Aanvraag versturen →
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">Wij reageren doorgaans binnen 30 minuten.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-base mb-4" style={{ color: primary }}>Direct bellen</h3>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-3 w-full py-3 px-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primary }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {config.contact.phoneDisplay}
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-base mb-4" style={{ color: primary }}>Beschikbaarheid</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { dag: 'Maandag – Vrijdag', tijd: '24 uur per dag' },
                    { dag: 'Zaterdag', tijd: '24 uur per dag' },
                    { dag: 'Zondag', tijd: '24 uur per dag' },
                  ].map(r => (
                    <div key={r.dag} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{r.dag}</span>
                      <span className="font-semibold" style={{ color: primary }}>{r.tijd}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: primary }}>
                <h3 className="font-bold text-base mb-2">Zakelijk vervoer?</h3>
                <p className="text-blue-200 text-sm mb-4">Voor zakelijk vervoer bieden wij maatwerk en factuurmogelijkheden.</p>
                <a href={`mailto:${config.contact.email}`} className="text-sm font-semibold underline text-yellow-300">
                  Mail ons →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
