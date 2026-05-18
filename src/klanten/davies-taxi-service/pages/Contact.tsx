import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [bericht, setBericht] = useState('');
  const [verzonden, setVerzonden] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVerzonden(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[#0B0C10] py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Neem contact op</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4 tracking-tight">Contact</h1>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto">
            Wilt u een rit reserveren of heeft u vragen? Neem contact met ons op — wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-[#F9F7F2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Bereikbaarheid</span>
              <h2 className="text-2xl font-black text-[#0B0C10] mt-2 mb-6 tracking-tight">Direct contact</h2>
              <div className="w-10 h-0.5 bg-[#C9A84C] mb-8" />

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0C10] mb-1">Telefoon</h3>
                    <a href={`tel:${config.contact.phone}`} className="text-[#C9A84C] font-semibold hover:underline text-lg">
                      {config.contact.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-500 mt-0.5">24 uur per dag bereikbaar</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0C10] mb-1">E-mail</h3>
                    <a href={`mailto:${config.contact.email}`} className="text-[#C9A84C] font-semibold hover:underline">
                      {config.contact.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-0.5">Wij reageren binnen enkele uren</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0C10] mb-1">Werkgebied</h3>
                    <p className="text-gray-600">{config.contact.address}</p>
                    <p className="text-sm text-gray-500 mt-0.5">Heel Zuid-Limburg en omgeving</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] text-xl flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0C10] mb-1">Beschikbaarheid</h3>
                    <p className="text-gray-600">Maandag t/m vrijdag: {config.contact.hours.weekday}</p>
                    <p className="text-gray-600">Weekend: {config.contact.hours.weekend}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-[#C9A84C]/20 shadow-md h-56 bg-[#0B0C10] relative flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-sm font-semibold text-gray-400">Heerlen, Zuid-Limburg</p>
                  <p className="text-xs text-gray-600 mt-1">Google Maps kaart</p>
                </div>
                <div className="absolute inset-0 border-2 border-[#C9A84C]/10 rounded-2xl pointer-events-none" />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
              <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Formulier</span>
              <h2 className="text-2xl font-black text-[#0B0C10] mt-2 mb-6 tracking-tight">Stuur een bericht</h2>

              {verzonden ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ✅
                  </div>
                  <h3 className="text-xl font-black text-[#0B0C10] mb-2">Bericht verzonden!</h3>
                  <p className="text-gray-500">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Uw naam *</label>
                    <input
                      type="text"
                      required
                      value={naam}
                      onChange={e => setNaam(e.target.value)}
                      placeholder="Voor- en achternaam"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="uw@email.nl"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Telefoon</label>
                      <input
                        type="tel"
                        value={telefoon}
                        onChange={e => setTelefoon(e.target.value)}
                        placeholder="06 12345678"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={bericht}
                      onChange={e => setBericht(e.target.value)}
                      placeholder="Vertel ons over uw rit of vraag..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C9A84C] text-[#0B0C10] py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#E8C96A] transition-colors shadow-md"
                  >
                    Bericht versturen →
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Of bel direct:{' '}
                    <a href={`tel:${config.contact.phone}`} className="font-bold text-[#C9A84C] hover:underline">
                      {config.contact.phoneDisplay}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA bar */}
      <section className="py-10 bg-[#C9A84C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black text-[#0B0C10]">Liever direct bellen?</h3>
              <p className="text-[#0B0C10]/70 text-sm">Wij zijn 24/7 bereikbaar voor uw rit of vraag.</p>
            </div>
            <a
              href={`tel:${config.contact.phone}`}
              className="px-8 py-4 bg-[#0B0C10] text-[#C9A84C] font-black rounded-xl hover:bg-[#111] transition-colors text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
