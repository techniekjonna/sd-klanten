import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Reserveren = () => {
  const yellow = config.colors.primary;
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [tussenstop, setTussenstop] = useState('');
  const [showTussenstop, setShowTussenstop] = useState(false);
  const [ophaalDatum, setOphaalDatum] = useState('');
  const [retour, setRetour] = useState(false);
  const [retourDatum, setRetourDatum] = useState('');
  const [bagage, setBagage] = useState(false);
  const [reizigers, setReizigers] = useState(1);
  const [naam, setNaam] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [opmerking, setOpmerking] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Reservering OneTaxi:\n\nNaam: ${naam}\nTelefoon: ${telefoon}\n\nVan: ${van}\nNaar: ${naar}${tussenstop ? `\nTussenstop: ${tussenstop}` : ''}\nOphaalmoment: ${ophaalDatum}${retour ? `\nRetour: ${retourDatum}` : ''}\nReizigers: ${reizigers}\nBagage: ${bagage ? 'Ja' : 'Nee'}${opmerking ? `\n\nOpmerking: ${opmerking}` : ''}`;
    window.open(`https://wa.me/31647727247?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="py-16 text-center" style={{ backgroundColor: yellow }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-3">Reserveren</h1>
          <p className="text-black/70 max-w-xl mx-auto">
            Vul het formulier in en wij nemen zo snel mogelijk contact met u op ter bevestiging.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          {sent ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-6xl mb-4">🚕</div>
              <h3 className="text-2xl font-black mb-2 text-black">Aanvraag verstuurd!</h3>
              <p className="text-gray-500 mb-6">
                Uw reserveringsaanvraag is verstuurd via WhatsApp. Wij bevestigen uw rit zo spoedig mogelijk.
              </p>
              <a
                href={`tel:${config.contact.phone}`}
                className="inline-block px-8 py-3.5 font-bold text-black rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: yellow }}
              >
                📞 Bel voor bevestiging
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
              {/* Contactgegevens */}
              <div>
                <h2 className="text-lg font-black text-black mb-4 pb-2 border-b-2" style={{ borderColor: yellow }}>
                  Uw gegevens
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Naam *</label>
                    <input
                      type="text"
                      required
                      value={naam}
                      onChange={(e) => setNaam(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Telefoonnummer *</label>
                    <input
                      type="tel"
                      required
                      value={telefoon}
                      onChange={(e) => setTelefoon(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="+31 6 ..."
                    />
                  </div>
                </div>
              </div>

              {/* Route */}
              <div>
                <h2 className="text-lg font-black text-black mb-4 pb-2 border-b-2" style={{ borderColor: yellow }}>
                  Route
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Van (vertrekadres) *</label>
                    <input
                      type="text"
                      required
                      value={van}
                      onChange={(e) => setVan(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Straatnaam + huisnummer, Stad"
                    />
                  </div>
                  {showTussenstop ? (
                    <div>
                      <label className="block text-sm font-semibold text-black mb-1.5">Tussenstop</label>
                      <input
                        type="text"
                        value={tussenstop}
                        onChange={(e) => setTussenstop(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Straatnaam + huisnummer, Stad"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowTussenstop(true)}
                      className="text-sm font-semibold text-gray-500 hover:text-black transition-colors"
                    >
                      + Tussenstop toevoegen
                    </button>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Naar (bestemmingsadres) *</label>
                    <input
                      type="text"
                      required
                      value={naar}
                      onChange={(e) => setNaar(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Straatnaam + huisnummer, Stad"
                    />
                  </div>
                </div>
              </div>

              {/* Datum/tijd */}
              <div>
                <h2 className="text-lg font-black text-black mb-4 pb-2 border-b-2" style={{ borderColor: yellow }}>
                  Datum & Tijd
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Ophaalmoment *</label>
                    <input
                      type="datetime-local"
                      required
                      value={ophaalDatum}
                      onChange={(e) => setOphaalDatum(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  {retour && (
                    <div>
                      <label className="block text-sm font-semibold text-black mb-1.5">Retourtijd</label>
                      <input
                        type="datetime-local"
                        value={retourDatum}
                        onChange={(e) => setRetourDatum(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  )}
                </div>
                <label className="flex items-center gap-3 mt-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={retour}
                    onChange={(e) => setRetour(e.target.checked)}
                    className="w-4 h-4 accent-red-600"
                  />
                  <span className="text-sm font-semibold text-black">Retourrit boeken</span>
                </label>
              </div>

              {/* Extra */}
              <div>
                <h2 className="text-lg font-black text-black mb-4 pb-2 border-b-2" style={{ borderColor: yellow }}>
                  Extra informatie
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-black mb-2">Aantal reizigers</p>
                    <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-4 py-3 w-fit">
                      <button type="button" onClick={() => setReizigers(Math.max(1, reizigers - 1))} className="text-xl font-bold text-gray-600 hover:text-black w-6 text-center">−</button>
                      <span className="text-lg font-black w-6 text-center">{reizigers}</span>
                      <button type="button" onClick={() => setReizigers(Math.min(8, reizigers + 1))} className="text-xl font-bold text-gray-600 hover:text-black w-6 text-center">+</button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black mb-2">Bagage?</p>
                    <div className="flex gap-4">
                      {[true, false].map((val) => (
                        <label key={String(val)} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                          <input
                            type="radio"
                            checked={bagage === val}
                            onChange={() => setBagage(val)}
                            className="accent-red-600"
                          />
                          {val ? 'Ja' : 'Nee'}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-black mb-1.5">Opmerking</label>
                  <textarea
                    rows={3}
                    value={opmerking}
                    onChange={(e) => setOpmerking(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    placeholder="Bijzonderheden, vluchtinformatie, etc."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 font-black text-black rounded-xl hover:opacity-90 transition-opacity text-base shadow-lg"
                style={{ backgroundColor: yellow }}
              >
                Reservering Versturen via WhatsApp →
              </button>
              <p className="text-xs text-gray-400 text-center">
                U wordt doorgestuurd naar WhatsApp. Wij bevestigen uw rit zo snel mogelijk.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};
