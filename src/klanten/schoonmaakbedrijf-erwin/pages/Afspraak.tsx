import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

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
  naam: '',
  telefoon: '',
  email: '',
  adres: '',
  postcode: '',
  woningtype: '',
  dienst: '',
  frequentie: '',
  voorkeurDatum: '',
  opmerkingen: '',
};

export const Afspraak = () => {
  const p = config.colors.primary;
  const pd = config.colors.primaryDark;
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-shadow';
  const labelClass = 'block text-sm font-medium mb-1.5';

  return (
    <Layout>
      {/* Page header */}
      <section className="relative py-24 text-white text-center" style={{ backgroundColor: pd }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Afspraak Maken</h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Vul het formulier in en wij nemen binnen 24 uur contact op om de afspraak te bevestigen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: config.colors.text }}>
                  Snel een afspraak?
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Vul het formulier in met uw gegevens en wij plannen samen de meest geschikte datum in.
                  Liever direct bellen of appen? Dat kan ook!
                </p>

                <div className="space-y-4">
                  {[
                    { icon: '📞', label: 'Bellen', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                    { icon: '✉️', label: 'E-mailen', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  ].map(({ icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ backgroundColor: config.colors.primaryLight }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">{label}</p>
                        <p className="font-medium text-sm" style={{ color: p }}>{value}</p>
                      </div>
                    </a>
                  ))}

                  <a
                    href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-green-100">
                      💬
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">WhatsApp</p>
                      <p className="font-medium text-sm text-green-600">Stuur een bericht</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Wat te verwachten */}
              <div className="p-6 rounded-2xl" style={{ backgroundColor: config.colors.primaryLight }}>
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: pd }}>
                  Wat kunt u verwachten?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Reactie binnen 24 uur',
                    'Gratis prijsopgave op maat',
                    'Geen verborgen kosten',
                    'Flexibele planningsmogelijkheden',
                    'Betalen per Tikkie, contant of factuur',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: pd }}>
                      <span style={{ color: p }} className="mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-400">
                <p className="font-medium mb-1" style={{ color: config.colors.text }}>Openingstijden</p>
                <p>Ma–Vr: {config.contact.hours.weekday}</p>
                <p>Za–Zo: {config.contact.hours.weekend}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 px-8 border border-gray-100 rounded-2xl">
                  <div className="text-6xl mb-5">🪟</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: config.colors.text }}>
                    Aanvraag ontvangen!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Bedankt voor uw aanvraag. Erwin neemt binnen 24 uur contact met u op om de afspraak te bevestigen.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-medium underline"
                    style={{ color: p }}
                  >
                    Nog een aanvraag doen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold mb-2" style={{ color: config.colors.text }}>
                    Uw gegevens
                  </h3>

                  {/* Naam & Telefoon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} style={{ color: config.colors.text }}>
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={update('naam')}
                        className={inputClass}
                        placeholder="Uw voor- en achternaam"
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: config.colors.text }}>
                        Telefoon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.telefoon}
                        onChange={update('telefoon')}
                        className={inputClass}
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className={labelClass} style={{ color: config.colors.text }}>
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={inputClass}
                      placeholder="uw@email.nl"
                    />
                  </div>

                  {/* Adres */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2">
                      <label className={labelClass} style={{ color: config.colors.text }}>
                        Adres *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.adres}
                        onChange={update('adres')}
                        className={inputClass}
                        placeholder="Straatnaam en huisnummer"
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: config.colors.text }}>
                        Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.postcode}
                        onChange={update('postcode')}
                        className={inputClass}
                        placeholder="1234 AB"
                      />
                    </div>
                  </div>

                  <hr className="border-gray-100" />
                  <h3 className="text-lg font-bold" style={{ color: config.colors.text }}>
                    Over uw situatie
                  </h3>

                  {/* Woningtype */}
                  <div>
                    <label className={labelClass} style={{ color: config.colors.text }}>
                      Type woning / pand *
                    </label>
                    <select
                      required
                      value={form.woningtype}
                      onChange={update('woningtype')}
                      className={inputClass}
                    >
                      <option value="">— Selecteer type —</option>
                      <option value="tussenwoning">Tussenwoning</option>
                      <option value="hoekwoning">Hoekwoning</option>
                      <option value="twee-onder-een-kap">Twee-onder-een-kapwoning</option>
                      <option value="vrijstaand">Vrijstaande woning</option>
                      <option value="appartement">Appartement</option>
                      <option value="bedrijfspand">Bedrijfspand / kantoor</option>
                      <option value="winkel">Winkel</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  {/* Dienst */}
                  <div>
                    <label className={labelClass} style={{ color: config.colors.text }}>
                      Gewenste dienst *
                    </label>
                    <select
                      required
                      value={form.dienst}
                      onChange={update('dienst')}
                      className={inputClass}
                    >
                      <option value="">— Selecteer dienst —</option>
                      <option value="glazenwassen-particulier">Glazenwassen — Particulier</option>
                      <option value="glazenwassen-zakelijk">Glazenwassen — Zakelijk</option>
                      <option value="zonnepanelen">Zonnepanelen reinigen</option>
                      <option value="schilderwerk">Schilderwerk</option>
                      <option value="glas-zetten">Glas zetten</option>
                      <option value="schoonmaak">Algemeen schoonmaakwerk</option>
                      <option value="abonnement">Onderhoudsabonnement</option>
                      <option value="combinatie">Combinatie / anders</option>
                    </select>
                  </div>

                  {/* Frequentie */}
                  <div>
                    <label className={labelClass} style={{ color: config.colors.text }}>
                      Hoe vaak wilt u de dienst?
                    </label>
                    <select
                      value={form.frequentie}
                      onChange={update('frequentie')}
                      className={inputClass}
                    >
                      <option value="">— Selecteer frequentie —</option>
                      <option value="eenmalig">Eenmalig</option>
                      <option value="4weken">Elke 4 weken</option>
                      <option value="6weken">Elke 6 weken</option>
                      <option value="8weken">Elke 8 weken</option>
                      <option value="kwartaal">Per kwartaal</option>
                      <option value="overleg">Nader te bespreken</option>
                    </select>
                  </div>

                  {/* Voorkeur datum */}
                  <div>
                    <label className={labelClass} style={{ color: config.colors.text }}>
                      Voorkeursdatum (optioneel)
                    </label>
                    <input
                      type="date"
                      value={form.voorkeurDatum}
                      onChange={update('voorkeurDatum')}
                      className={inputClass}
                    />
                  </div>

                  {/* Opmerkingen */}
                  <div>
                    <label className={labelClass} style={{ color: config.colors.text }}>
                      Extra opmerkingen
                    </label>
                    <textarea
                      rows={4}
                      value={form.opmerkingen}
                      onChange={update('opmerkingen')}
                      className={`${inputClass} resize-none`}
                      placeholder="Bijv. bijzonderheden over de situatie, toegang, of specifieke wensen..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white rounded-xl transition-opacity hover:opacity-90 text-base"
                    style={{ backgroundColor: p }}
                  >
                    Afspraak Aanvragen →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Wij nemen binnen 24 uur contact op. Uw gegevens worden nooit gedeeld met derden.
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
