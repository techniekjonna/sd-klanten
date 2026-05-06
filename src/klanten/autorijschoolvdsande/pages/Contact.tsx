import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradDark   = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;

type FormState = {
  naam: string; email: string; telefoon: string; leeftijd: string;
  schakelaar: string; opleiding: string; theorie: string;
  rijervaring: string; beschikbaarheid: string[]; gevonden: string; bericht: string;
};

const init: FormState = {
  naam: '', email: '', telefoon: '', leeftijd: '',
  schakelaar: '', opleiding: '', theorie: '',
  rijervaring: '', beschikbaarheid: [], gevonden: '', bericht: '',
};

const pill = (active: boolean) => ({
  padding: '6px 14px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
  transition: 'all 0.15s',
  ...(active
    ? { backgroundColor: 'white', color: c.accent }
    : { backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }),
});

function Pills({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o} type="button" style={pill(value === o)} onClick={() => onChange(value === o ? '' : o)}>{o}</button>
      ))}
    </div>
  );
}

function MultiPills({ options, value, onChange }: { options: string[]; value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o} type="button" style={pill(value.includes(o))}
          onClick={() => onChange(value.includes(o) ? value.filter(x => x !== o) : [...value, o])}>{o}</button>
      ))}
    </div>
  );
}

const inputSt: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', fontWeight: 500,
  backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
  color: 'white', outline: 'none',
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>{children}</p>
);

export const Contact = () => {
  const [form, setForm] = useState<FormState>(init);
  const [sent, setSent] = useState(false);
  const set = (k: keyof FormState) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <Layout>
      {/* Banner */}
      <section className="py-12 text-white text-center" style={{ background: gradBanner }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-2">Afspraak maken</h1>
          <p className="text-white/60 text-sm">Vrijblijvend · Ik reageer binnen 1 werkdag</p>
        </div>
      </section>

      <section className="py-12" style={{ background: gradDark }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Sidebar */}
            <div className="space-y-4">
              {[
                { icon: '📍', val: config.contact.address },
                { icon: '📞', val: config.contact.phone, href: `tel:${config.contact.phone}` },
                { icon: '✉️', val: config.contact.email, href: `mailto:${config.contact.email}` },
                { icon: '🕐', val: 'Ma–za · op afspraak' },
              ].map(({ icon, val, href }) => (
                <div key={val} className="flex gap-3 items-start">
                  <span className="text-lg mt-0.5">{icon}</span>
                  {href
                    ? <a href={href} className="text-sm font-semibold text-white hover:text-white/70 transition-colors">{val}</a>
                    : <p className="text-sm text-white/70">{val}</p>}
                </div>
              ))}
              <div className="rounded-2xl p-4 mt-4" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                <p className="text-4xl font-extrabold text-white mb-1">90%</p>
                <p className="text-xs text-white/50 leading-relaxed">slaagt de eerste keer voor hun rijexamen.</p>
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16 rounded-3xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Aanvraag ontvangen!</h3>
                  <p className="text-sm text-white/50">Mike neemt zo snel mogelijk contact op.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-6">
                  {/* Rij 1: naam + telefoon + leeftijd */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <Label>Naam *</Label>
                      <input required type="text" placeholder="Voor- en achternaam" style={inputSt}
                        value={form.naam} onChange={e => setForm(f => ({ ...f, naam: e.target.value }))} />
                    </div>
                    <div>
                      <Label>Leeftijd *</Label>
                      <input required type="number" min="16" max="99" placeholder="18" style={{ ...inputSt, width: '100%' }}
                        value={form.leeftijd} onChange={e => setForm(f => ({ ...f, leeftijd: e.target.value }))} />
                    </div>
                  </div>

                  {/* Rij 2: email + telefoon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>E-mail *</Label>
                      <input required type="email" placeholder="jouw@email.nl" style={inputSt}
                        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    </div>
                    <div>
                      <Label>Telefoon</Label>
                      <input type="tel" placeholder="06-..." style={inputSt}
                        value={form.telefoon} onChange={e => setForm(f => ({ ...f, telefoon: e.target.value }))} />
                    </div>
                  </div>

                  {/* Schakelaar */}
                  <div>
                    <Label>Schakelaar</Label>
                    <Pills options={['Handgeschakeld', 'Automaat', 'Weet ik nog niet']} value={form.schakelaar} onChange={set('schakelaar')} />
                  </div>

                  {/* Opleiding + rijervaring naast elkaar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label>Type opleiding</Label>
                      <Pills options={['Regulier', 'Spoedopleiding', '2toDrive (17+)']} value={form.opleiding} onChange={set('opleiding')} />
                    </div>
                    <div>
                      <Label>Rijervaring</Label>
                      <Pills options={['Geen', 'Beetje', 'Buitenlands rijbewijs']} value={form.rijervaring} onChange={set('rijervaring')} />
                    </div>
                  </div>

                  {/* Theorie + beschikbaarheid naast elkaar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label>Theorie-examen</Label>
                      <Pills options={['Behaald', 'Bezig', 'Nog niet']} value={form.theorie} onChange={set('theorie')} />
                    </div>
                    <div>
                      <Label>Beschikbaarheid</Label>
                      <MultiPills
                        options={['Ochtend', 'Middag', 'Avond', 'Zaterdag']}
                        value={form.beschikbaarheid}
                        onChange={v => setForm(f => ({ ...f, beschikbaarheid: v }))}
                      />
                    </div>
                  </div>

                  {/* Bericht */}
                  <div>
                    <Label>Bericht / vragen</Label>
                    <textarea rows={3} placeholder="Optioneel — stel hier gerust je vragen"
                      style={{ ...inputSt, resize: 'none' }}
                      value={form.bericht} onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))} />
                  </div>

                  <button type="submit"
                    className="w-full py-3.5 font-bold text-sm rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ backgroundColor: 'white', color: c.accent }}>
                    Stuur aanvraag →
                  </button>
                  <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Geen verplichtingen · Gegevens nooit gedeeld met derden
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
