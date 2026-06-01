import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);
  const accent = config.colors.accent || '#C9A84C';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-28 flex items-end"
        style={{
          backgroundImage: `url(${config.hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Neem Contact Op
          </h1>
        </div>
      </section>

      {/* Contact sectie */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contactinfo */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>
                Bereikbaarheid
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Wij staan voor u klaar
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Heeft u vragen over onze diensten of wilt u een rit aanvragen? Neem contact op via onderstaande gegevens of vul het formulier in.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-sm"
                    style={{ backgroundColor: accent }}
                  >
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Telefoon</p>
                    <a href={`tel:${config.contact.phone}`} className="text-gray-900 hover:underline font-medium">
                      {config.contact.phoneDisplay || config.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-sm"
                    style={{ backgroundColor: accent }}
                  >
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">E-mail</p>
                    <a href={`mailto:${config.contact.email}`} className="text-gray-900 hover:underline font-medium">
                      {config.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-sm"
                    style={{ backgroundColor: accent }}
                  >
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Locatie</p>
                    <p className="text-gray-900 font-medium">{config.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-sm"
                    style={{ backgroundColor: accent }}
                  >
                    🕐
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Beschikbaarheid</p>
                    <p className="text-gray-900 font-medium">{config.contact.hours.weekday}</p>
                    <p className="text-gray-500 text-sm">365 dagen per jaar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulier */}
            <div>
              {sent ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12 border border-gray-100"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center text-white text-2xl mb-6"
                    style={{ backgroundColor: accent }}
                  >
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Aanvraag ontvangen</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Bedankt voor uw aanvraag. Wij nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Naam *</label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={form.naam}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Telefoon</label>
                      <input
                        type="tel"
                        name="telefoon"
                        value={form.telefoon}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                        placeholder="+31 6 00 00 00 00"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Bericht *</label>
                    <textarea
                      name="bericht"
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors resize-none"
                      placeholder="Omschrijf uw aanvraag of vraag..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-85"
                    style={{ backgroundColor: '#1A1A1A' }}
                  >
                    Verstuur Aanvraag
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Wij reageren binnen 24 uur op uw aanvraag.
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
