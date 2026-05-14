import { useState } from 'react';
import { config } from '../config';

export const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [tussenstops, setTussenstops] = useState<string[]>([]);
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [retourDatum, setRetourDatum] = useState('');
  const [retourTijd, setRetourTijd] = useState('');
  const [retour, setRetour] = useState(false);
  const [bagage, setBagage] = useState(true);
  const [passagiers, setPassagiers] = useState(1);

  const swapLocations = () => {
    const tmp = van;
    setVan(naar);
    setNaar(tmp);
  };

  const addStop = () => setTussenstops([...tussenstops, '']);
  const updateStop = (i: number, val: string) => {
    const s = [...tussenstops];
    s[i] = val;
    setTussenstops(s);
  };
  const removeStop = (i: number) => setTussenstops(tussenstops.filter((_, idx) => idx !== i));

  const inputClass = "w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg outline-none transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100";
  const y = config.colors.primary;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ maxWidth: 820 }}>
      {/* Header */}
      <div className="px-7 py-5" style={{ backgroundColor: config.colors.dark }}>
        <h2 className="text-white font-extrabold text-xl tracking-wide">Boek eenvoudig uw taxirit</h2>
        <p className="text-sm mt-1" style={{ color: '#888' }}>Vul uw gegevens in — wij bellen u terug voor bevestiging</p>
      </div>

      <div className="p-6 md:p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Left: Route */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#555' }}>Route</p>

            <div className="flex gap-3">
              {/* Connecting dots */}
              <div className="flex flex-col items-center pt-3.5 pb-3.5 gap-0">
                <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: y }} />
                <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: '#ddd', minHeight: 12 }} />
                {tussenstops.map((_, i) => (
                  <div key={i} className="flex flex-col items-center w-full">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#aaa' }} />
                    <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: '#ddd', minHeight: 12 }} />
                  </div>
                ))}
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: y }} />
              </div>

              {/* Inputs */}
              <div className="flex-1 space-y-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold" style={{ color: '#aaa' }}>van</span>
                  <input
                    type="text"
                    placeholder="straatnaam met huisnummer"
                    value={van}
                    onChange={e => setVan(e.target.value)}
                    className={inputClass}
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>

                {tussenstops.map((stop, i) => (
                  <div key={i} className="relative flex gap-2">
                    <input
                      type="text"
                      placeholder={`tussenstop ${i + 1}`}
                      value={stop}
                      onChange={e => updateStop(i, e.target.value)}
                      className={inputClass}
                    />
                    <button
                      onClick={() => removeStop(i)}
                      className="text-xs px-2 rounded text-gray-400 hover:text-red-500 transition-colors"
                      title="Verwijder stop"
                    >✕</button>
                  </div>
                ))}

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold" style={{ color: '#aaa' }}>naar</span>
                  <input
                    type="text"
                    placeholder="straatnaam met huisnummer"
                    value={naar}
                    onChange={e => setNaar(e.target.value)}
                    className={inputClass}
                    style={{ paddingLeft: '3.5rem' }}
                  />
                </div>
              </div>

              {/* Swap button */}
              <div className="flex flex-col justify-between py-2">
                <button
                  onClick={swapLocations}
                  className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-yellow-400 hover:text-yellow-500 transition-all text-sm"
                  title="Omwisselen"
                >⇅</button>
              </div>
            </div>

            <button
              onClick={addStop}
              className="mt-2 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              style={{ color: y }}
            >
              <span className="text-base leading-none">⊕</span> tussenstop toevoegen
            </button>

            {/* Bagage */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#555' }}>
                Reis je met bagage?
              </p>
              <div className="flex gap-5">
                {[true, false].map((val) => (
                  <label key={String(val)} className="flex items-center gap-2 cursor-pointer">
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                      style={{ borderColor: bagage === val ? y : '#ddd', backgroundColor: bagage === val ? y : 'transparent' }}
                      onClick={() => setBagage(val)}
                    >
                      {bagage === val && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{val ? 'Ja' : 'Nee, ik heb geen bagage'}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timing + Passengers */}
          <div className="space-y-5">
            {/* Pickup time */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#555' }}>
                Ophaalmoment taxi
              </p>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={datum}
                  onChange={e => setDatum(e.target.value)}
                  className={inputClass}
                />
                <input
                  type="time"
                  value={tijd}
                  onChange={e => setTijd(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Retour */}
            <div>
              <label className="flex items-center gap-2.5 cursor-pointer mb-3">
                <div
                  className="w-11 h-6 rounded-full transition-colors relative"
                  style={{ backgroundColor: retour ? y : '#ddd' }}
                  onClick={() => setRetour(!retour)}
                >
                  <div
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
                    style={{ transform: retour ? 'translateX(22px)' : 'translateX(2px)' }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">Retour</span>
              </label>

              {retour ? (
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    value={retourDatum}
                    onChange={e => setRetourDatum(e.target.value)}
                    className={inputClass}
                    placeholder="Retourdatum"
                  />
                  <input
                    type="time"
                    value={retourTijd}
                    onChange={e => setRetourTijd(e.target.value)}
                    className={inputClass}
                  />
                </div>
              ) : (
                <div className="px-4 py-3 rounded-lg text-sm text-gray-400" style={{ backgroundColor: '#fafafa', border: '1px solid #eee' }}>
                  Enkele reis
                </div>
              )}
            </div>

            {/* Passengers */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: '#555' }}>
                Aantal reizigers
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPassagiers(Math.max(1, passagiers - 1))}
                  className="w-9 h-9 rounded-lg border-2 border-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 hover:border-yellow-400 hover:text-yellow-500 transition-all"
                >−</button>
                <span className="text-xl font-bold w-8 text-center" style={{ color: config.colors.dark }}>{passagiers}</span>
                <button
                  onClick={() => setPassagiers(Math.min(8, passagiers + 1))}
                  className="w-9 h-9 rounded-lg border-2 border-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 hover:border-yellow-400 hover:text-yellow-500 transition-all"
                >+</button>
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full py-4 rounded-xl font-extrabold text-base tracking-wide transition-opacity hover:opacity-90 mt-2 shadow-lg"
              style={{ backgroundColor: y, color: '#111111' }}
            >
              Bereken mijn ritprijs →
            </button>
            <p className="text-center text-xs text-gray-400">Of bel direct: <a href="tel:+31061769108" className="font-semibold hover:underline" style={{ color: y }}>06 176 91087</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
