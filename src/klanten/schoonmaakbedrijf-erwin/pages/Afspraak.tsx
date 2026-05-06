import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

const c = config.colors;

type FormData = {
  naam: string;
  telefoon: string;
  email: string;
  adres: string;
  postcode: string;
  woningtype: string;
  dienst: string;
  frequentie: string;
  voorkeurDatum: string;
  opmerkingen: string;
};

const initialForm: FormData = {
  naam: '', telefoon: '', email: '', adres: '', postcode: '',
  woningtype: '', dienst: '', frequentie: '', voorkeurDatum: '', opmerkingen: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow';
const inputStyle = { backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' };

const labelClass = 'block text-xs font-bold uppercase tracking-wide text-blue-300 mb-2';

export const Afspraak = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section style={{ backgroundColor: c.primaryDark }} className="py-24 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Direct regelen</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Afspraak Maken</h1>
          <p className="text-blue-300 max-w-xl mx-auto">
            Vul het formulier in en wij nemen binnen 24 uur contact op om de afspraak te bevestigen.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: c.primary }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-black text-white">Snel een afspraak?</h2>
              <p className="text-blue-200 text-sm leading-relaxed">
                Vul het formulier in met uw gegevens en wij plannen samen de meest geschikte datum in.
                Liever direct bellen of appen? Dat kan ook!
              </p>

              <div className="space-y-3">
                {[
                  { icon: '📞', label: 'Bellen', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mailen', value: config.contact.email, href: `mailto:${config.contact.email}` },
                ].map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                    style={{ backgroundColor: c.primaryDark }}
                  >
                    <div className="text-2xl">{icon}</div>
                    <div>
                      <p className="text-blue-400 text-xs">{label}</p>
                      <p className="font-semibold text-white text-sm">{value}</p>
                    </div>
                  </a>
                ))}

                <a
                  href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <div className="text-2xl">💬</div>
                  <div>
                    <p className="text-green-100 text-xs">WhatsApp</p>
                    <p className="font-semibold text-white text-sm">Stuur een bericht</p>
                  </div>
                </a>
              </div>

              {/* Wat te verwachten */}
              <div className="p-5 rounded-2xl" style={{ backgroundColor: c.primaryDark }}>
                <h3 className="font-black text-white text-xs uppercase tracking-widest mb-4">Wat kunt u verwachten?</h3>
                <ul className="space-y-3">
                  {[
                    'Reactie binnen 24 uur',
                    'Gratis prijsopgave op maat',
                    'Geen verborgen kosten',
                    'Flexibele planningsmogelijkheden',
                    'Betalen per Tikkie, contant of factuur',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-200">
                      <span className="text-green-400 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-blue-300">
                <p className="font-bold text-white mb-1">Openingstijden</p>
                <p>Ma–Vr: {config.contact.hours.weekday}</p>
                <p>Za–Zo: {config.contact.hours.weekend}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="text-center py-20 px-8 rounded-2xl"
                  style={{ backgroundColor: c.primaryDark }}
                >
                  <div className="text-6xl mb-5">🪟</div>
                  <h3 className="text-2xl font-black text-white mb-3">Aanvraag ontvangen!</h3>
                  <p className="text-blue-300 mb-6">
                    Bedankt voor uw aanvraag. Erwin neemt binnen 24 uur contact met u op om de afspraak te bevestigen.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold text-blue-300 hover:text-white transition-colors underline"
                  >
                    Nog een aanvraag doen
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ backgroundColor: c.primaryDark }}
                >
                  <h3 className="text-lg font-black text-white mb-1">Uw gegevens</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Naam *</label>
                      <input type="text" required value={form.naam} onChange={update('naam')}
                        className={inputClass} style={inputStyle} placeholder="Voor- en achternaam" />
                    </div>
                    <div>
                      <label className={labelClass}>Telefoon *</label>
                      <input type="tel" required value={form.telefoon} onChange={update('telefoon')}
                        className={inputClass} style={inputStyle} placeholder="06-..." />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>E-mailadres</label>
                    <input type="email" value={form.email} onChange={update('email')}
                      className={inputClass} style={inputStyle} placeholder="uw@email.nl" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Adres *</label>
                      <input type="text" required value={form.adres} onChange={update('adres')}
                        className={inputClass} style={inputStyle} placeholder="Straat en huisnummer" />
                    </div>
                    <div>
                      <label className={labelClass}>Postcode *</label>
                      <input type="text" required value={form.postcode} onChange={update('postcode')}
                        className={inputClass} style={inputStyle} placeholder="1234 AB" />
                    </div>
                  </div>

                  <div
                    className="border-t pt-5 mt-1"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <h3 className="text-lg font-black text-white mb-4">Over uw situatie</h3>
                  </div>

                  <div>
                    <label className={labelClass}>Type woning / pand *</label>
                    <select required value={form.woningtype} onChange={update('woningtype')}
                      className={inputClass} style={inputStyle}>
                      <option value="" className="bg-blue-900">— Selecteer type —</option>
                      <option value="tussenwoning" className="bg-blue-900">Tussenwoning</option>
                      <option value="hoekwoning" className="bg-blue-900">Hoekwoning</option>
                      <option value="twee-onder-een-kap" className="bg-blue-900">Twee-onder-een-kapwoning</option>
                      <option value="vrijstaand" className="bg-blue-900">Vrijstaande woning</option>
                      <option value="appartement" className="bg-blue-900">Appartement</option>
                      <option value="bedrijfspand" className="bg-blue-900">Bedrijfspand / kantoor</option>
                      <option value="winkel" className="bg-blue-900">Winkel</option>
                      <option value="anders" className="bg-blue-900">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Gewenste dienst *</label>
                    <select required value={form.dienst} onChange={update('dienst')}
                      className={inputClass} style={inputStyle}>
                      <option value="" className="bg-blue-900">— Selecteer dienst —</option>
                      <option value="glazenwassen-particulier" className="bg-blue-900">Glazenwassen — Particulier</option>
                      <option value="glazenwassen-zakelijk" className="bg-blue-900">Glazenwassen — Zakelijk</option>
                      <option value="zonnepanelen" className="bg-blue-900">Zonnepanelen reinigen</option>
                      <option value="schilderwerk" className="bg-blue-900">Schilderwerk</option>
                      <option value="glas-zetten" className="bg-blue-900">Glas zetten</option>
                      <option value="schoonmaak" className="bg-blue-900">Algemeen schoonmaakwerk</option>
                      <option value="abonnement" className="bg-blue-900">Onderhoudsabonnement</option>
                      <option value="combinatie" className="bg-blue-900">Combinatie / anders</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Hoe vaak?</label>
                    <select value={form.frequentie} onChange={update('frequentie')}
                      className={inputClass} style={inputStyle}>
                      <option value="" className="bg-blue-900">— Selecteer frequentie —</option>
                      <option value="eenmalig" className="bg-blue-900">Eenmalig</option>
                      <option value="4weken" className="bg-blue-900">Elke 4 weken</option>
                      <option value="6weken" className="bg-blue-900">Elke 6 weken</option>
                      <option value="8weken" className="bg-blue-900">Elke 8 weken</option>
                      <option value="kwartaal" className="bg-blue-900">Per kwartaal</option>
                      <option value="overleg" className="bg-blue-900">Nader te bespreken</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Voorkeursdatum (optioneel)</label>
                    <input type="date" value={form.voorkeurDatum} onChange={update('voorkeurDatum')}
                      className={inputClass} style={inputStyle} />
                  </div>

                  <div>
                    <label className={labelClass}>Extra opmerkingen</label>
                    <textarea rows={4} value={form.opmerkingen} onChange={update('opmerkingen')}
                      className={`${inputClass} resize-none`} style={inputStyle}
                      placeholder="Bijzonderheden, toegang, specifieke wensen..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-black text-white rounded-xl transition-all hover:scale-[1.01] text-base shadow-xl"
                    style={{ backgroundColor: c.primary }}
                  >
                    Afspraak Aanvragen →
                  </button>
                  <p className="text-xs text-blue-400 text-center">
                    * Verplichte velden. Reactie binnen 24 uur. Uw gegevens worden nooit gedeeld met derden.
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
