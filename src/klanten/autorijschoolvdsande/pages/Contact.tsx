import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;
const gradDark = `linear-gradient(135deg, ${c.accent} 0%, ${c.gradientFrom} 100%)`;
const gradBanner = `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientMid} 100%)`;

type FormState = {
  voornaam: string;
  achternaam: string;
  email: string;
  telefoon: string;
  leeftijd: string;
  schakelaar: string;
  opleiding: string;
  theorie: string;
  rijervaring: string;
  beschikbaarheid: string[];
  gevonden: string;
  bericht: string;
};

const init: FormState = {
  voornaam: '', achternaam: '', email: '', telefoon: '',
  leeftijd: '', schakelaar: '', opleiding: '', theorie: '',
  rijervaring: '', beschikbaarheid: [], gevonden: '', bericht: '',
};

const inputCls = 'w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all focus:ring-2';
const inputStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  color: 'white',
};

const labelCls = 'block text-xs font-semibold mb-2 tracking-wide uppercase';

function RadioGroup({ name, options, value, onChange }: {
  name: string; options: { val: string; label: string }[];
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o.val} type="button" onClick={() => onChange(o.val)}
          className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
          style={value === o.val
            ? { backgroundColor: 'white', color: c.accent }
            : { backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.15)' }
          }>
          {o.label}
        </button>
      ))}
    </div>
  );
}

function CheckGroup({ options, value, onChange }: {
  options: string[]; value: string[]; onChange: (v: string[]) => void;
}) {
  const toggle = (o: string) =>
    onChange(value.includes(o) ? value.filter(x => x !== o) : [...value, o]);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(o => (
        <button key={o} type="button" onClick={() => toggle(o)}
          className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
          style={value.includes(o)
            ? { backgroundColor: 'white', color: c.accent }
            : { backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.15)' }
          }>
          {o}
        </button>
      ))}
    </div>
  );
}

export const Contact = () => {
  const [form, setForm] = useState<FormState>(init);
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (v: string) => setForm(f => ({ ...f, [k]: v }));
  const setNative = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <Layout>
      {/* Banner */}
      <section className="py-16 text-white text-center" style={{ background: gradBanner }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Afspraak maken</h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Vul het formulier in en ik neem zo snel mogelijk contact met je op — volledig vrijblijvend.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: gradDark }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Sidebar gegevens */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Gegevens</h2>
                {[
                  { icon: '📍', label: 'Locatie', val: config.contact.address },
                  { icon: '📞', label: 'Telefoon', val: config.contact.phone, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mail', val: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '🕐', label: 'Lestijden', val: 'Ma t/m za · op afspraak' },
                ].map(({ icon, label, val, href }) => (
                  <div key={label} className="flex gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="text-sm font-semibold text-white hover:text-white/80 transition-colors">{val}</a>
                        : <p className="text-sm font-semibold text-white">{val}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-sm font-bold text-white mb-2">100% vrijblijvend</p>
                <p className="text-xs text-white/55 leading-relaxed">
                  Na het invullen neem ik persoonlijk contact op om jouw situatie te bespreken. Geen verplichtingen, geen kleine lettertjes.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-5xl font-extrabold text-white mb-1">90%</p>
                <p className="text-xs text-white/55">van de leerlingen slaagt de eerste keer voor hun rijexamen.</p>
              </div>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="text-center py-20 rounded-3xl" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="text-6xl mb-5">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Aanvraag ontvangen!</h3>
                  <p className="text-white/60 text-sm">Mike neemt zo snel mogelijk persoonlijk contact met je op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Naam */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Voornaam *</label>
                      <input required type="text" placeholder="Voornaam" value={form.voornaam}
                        onChange={setNative('voornaam')} className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Achternaam *</label>
                      <input required type="text" placeholder="Achternaam" value={form.achternaam}
                        onChange={setNative('achternaam')} className={inputCls} style={inputStyle} />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>E-mailadres *</label>
                      <input required type="email" placeholder="jouw@email.nl" value={form.email}
                        onChange={setNative('email')} className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Telefoonnummer</label>
                      <input type="tel" placeholder="06-..." value={form.telefoon}
                        onChange={setNative('telefoon')} className={inputCls} style={inputStyle} />
                    </div>
                  </div>

                  {/* Leeftijd */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Leeftijd *</label>
                    <input required type="number" min="16" max="99" placeholder="bijv. 18" value={form.leeftijd}
                      onChange={setNative('leeftijd')} className={inputCls} style={{ ...inputStyle, maxWidth: '160px' }} />
                  </div>

                  {/* Schakelaar */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Type schakelaar *</label>
                    <RadioGroup name="schakelaar" value={form.schakelaar} onChange={set('schakelaar')} options={[
                      { val: 'handgeschakeld', label: '🔧 Handgeschakeld' },
                      { val: 'automaat', label: '⚙️ Automaat' },
                      { val: 'weet_niet', label: '❓ Weet ik nog niet' },
                    ]} />
                  </div>

                  {/* Type opleiding */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Gewenste opleiding *</label>
                    <RadioGroup name="opleiding" value={form.opleiding} onChange={set('opleiding')} options={[
                      { val: 'regulier', label: '📅 Regulier' },
                      { val: 'spoed', label: '⚡ Spoedopleiding' },
                      { val: '2todrive', label: '👨‍👩‍👦 2toDrive (v.a. 17 jaar)' },
                    ]} />
                  </div>

                  {/* Rijervaring */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Rijervaring</label>
                    <RadioGroup name="rijervaring" value={form.rijervaring} onChange={set('rijervaring')} options={[
                      { val: 'geen', label: 'Geen' },
                      { val: '2todrive', label: 'Beetje (2toDrive)' },
                      { val: 'enige', label: 'Enige ervaring' },
                      { val: 'veel', label: 'Buitenlands rijbewijs' },
                    ]} />
                  </div>

                  {/* Theorie */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Theorie-examen</label>
                    <RadioGroup name="theorie" value={form.theorie} onChange={set('theorie')} options={[
                      { val: 'behaald', label: '✅ Behaald' },
                      { val: 'bezig', label: '📖 Bezig / gepland' },
                      { val: 'nee', label: 'Nog niet' },
                    ]} />
                  </div>

                  {/* Beschikbaarheid */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Beschikbaarheid (meerdere mogelijk)</label>
                    <CheckGroup
                      options={['Weekdag ochtend', 'Weekdag middag', 'Weekdag avond', 'Zaterdag']}
                      value={form.beschikbaarheid}
                      onChange={v => setForm(f => ({ ...f, beschikbaarheid: v }))}
                    />
                  </div>

                  {/* Hoe gevonden */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Hoe heb je ons gevonden?</label>
                    <select value={form.gevonden} onChange={setNative('gevonden')} className={inputCls}
                      style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Selecteer een optie</option>
                      <option value="google">Google / internet</option>
                      <option value="via_via">Via via / aanbeveling</option>
                      <option value="social">Social media</option>
                      <option value="flyer">Flyer / folder</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  {/* Bericht */}
                  <div>
                    <label className={labelCls} style={{ color: 'rgba(255,255,255,0.5)' }}>Vragen of opmerkingen</label>
                    <textarea rows={4} placeholder="Stel hier gerust je vragen of voeg extra informatie toe..."
                      value={form.bericht} onChange={setNative('bericht')} className={inputCls + ' resize-none'}
                      style={inputStyle} />
                  </div>

                  <button type="submit"
                    className="w-full py-4 font-bold text-sm rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                    style={{ backgroundColor: 'white', color: c.accent }}>
                    Stuur aanvraag in
                  </button>
                  <p className="text-xs text-center text-white/30">
                    * Verplichte velden · Jouw gegevens worden nooit gedeeld met derden
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
