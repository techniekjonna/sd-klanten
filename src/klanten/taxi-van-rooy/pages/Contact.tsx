import { useState } from 'react';
import { config } from '../config';

const PRIMARY = config.colors.primary;
const DARK = config.colors.dark;

interface ContactForm {
  naam: string;
  telefoon: string;
  email: string;
  dienst: string;
  bericht: string;
}

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    naam: '',
    telefoon: '',
    email: '',
    dienst: '',
    bericht: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: DARK }} className="py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: PRIMARY }}>
            Bereikbaar
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Neem contact op</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Heeft u een vraag, wilt u een rit reserveren of een offerte aanvragen? Wij helpen u graag.
          </p>
        </div>
      </section>

      {/* Contact info strip */}
      <section style={{ backgroundColor: PRIMARY }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a href={`tel:${config.contact.phone}`} className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: DARK }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: DARK }}>Telefoon</div>
                <div className="font-semibold text-sm group-hover:underline" style={{ color: DARK }}>{config.contact.phoneDisplay}</div>
              </div>
            </a>
            <a href={`mailto:${config.contact.email}`} className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: DARK }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: DARK }}>E-mail</div>
                <div className="font-semibold text-sm group-hover:underline" style={{ color: DARK }}>{config.contact.email}</div>
              </div>
            </a>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: DARK }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: DARK }}>Bereikbaarheid</div>
                <div className="font-semibold text-sm" style={{ color: DARK }}>{config.contact.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Stuur een bericht</h2>
              {sent ? (
                <div
                  className="rounded-2xl p-8 text-center border-2"
                  style={{ borderColor: PRIMARY, backgroundColor: `${PRIMARY}10` }}
                >
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bericht verzonden!</h3>
                  <p className="text-gray-600 text-sm">
                    Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        placeholder="Uw naam"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        placeholder="Uw telefoonnummer"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="uw@email.nl"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Dienst
                    </label>
                    <select
                      value={form.dienst}
                      onChange={(e) => setForm({ ...form, dienst: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                    >
                      <option value="">Selecteer een dienst...</option>
                      {config.services.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                      <option value="overig">Overig</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      placeholder="Beschrijf uw vervoersbehoefte of stel uw vraag..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 shadow-md"
                    style={{ backgroundColor: PRIMARY, color: DARK }}
                  >
                    Verstuur bericht
                  </button>
                </form>
              )}
            </div>

            {/* Contact info + map */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Onze gegevens</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <svg className="w-5 h-5" style={{ color: DARK }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 mb-0.5">Adres</div>
                    <div className="text-sm text-gray-600">{config.contact.address}</div>
                    <div className="text-sm text-gray-600">{config.contact.city}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <svg className="w-5 h-5" style={{ color: DARK }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 mb-0.5">Telefoon</div>
                    <a href={`tel:${config.contact.phone}`} className="text-sm font-semibold hover:underline" style={{ color: DARK }}>
                      {config.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <svg className="w-5 h-5" style={{ color: DARK }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 mb-0.5">E-mail</div>
                    <a href={`mailto:${config.contact.email}`} className="text-sm hover:underline text-gray-600">
                      {config.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <svg className="w-5 h-5" style={{ color: DARK }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 mb-0.5">Openingstijden</div>
                    <div className="text-sm text-gray-600">{config.contact.hours}</div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 h-56 flex flex-col items-center justify-center gap-3">
                  <div className="text-4xl">📍</div>
                  <div className="text-center">
                    <div className="font-bold text-gray-700 text-sm">{config.contact.address}</div>
                    <div className="text-gray-500 text-xs">{config.contact.city}</div>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(config.contact.address + ', ' + config.contact.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-bold transition-all hover:opacity-90"
                    style={{ backgroundColor: PRIMARY, color: DARK }}
                  >
                    Bekijk op Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
