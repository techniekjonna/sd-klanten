import { useState } from 'react';
import { config } from '../config';

export const BookingWidget = () => {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [retour, setRetour] = useState(false);
  const [retourDatum, setRetourDatum] = useState('');
  const [reizigers, setReizigers] = useState(1);
  const [bagage, setBagage] = useState(true);

  const swap = () => {
    const tmp = van;
    setVan(naar);
    setNaar(tmp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Ik wil een taxirit boeken:%0AVan: ${van}%0ANaar: ${naar}%0ADatum: ${datum} om ${tijd}%0AReizigers: ${reizigers}%0ABagage: ${bagage ? 'Ja' : 'Nee'}${retour ? `%0ARetour: ${retourDatum}` : ''}`;
    window.location.href = `tel:${config.contact.phoneTel}`;
    void msg;
  };

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl"
      style={{ backgroundColor: config.colors.accent }}
    >
      <div className="px-7 pt-7 pb-4">
        <h2 className="text-2xl font-extrabold mb-1" style={{ color: config.colors.dark }}>
          Boek eenvoudig je taxirit
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="px-7 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Route */}
          <div>
            <p className="text-sm font-bold mb-3" style={{ color: config.colors.dark }}>
              Waar wil je heen?
            </p>

            <div className="space-y-2">
              {/* Van */}
              <div
                className="flex items-center rounded-xl overflow-hidden border-2"
                style={{ backgroundColor: 'white', borderColor: 'transparent' }}
              >
                <span className="px-3 text-xs font-bold text-gray-400 select-none">van</span>
                <input
                  type="text"
                  placeholder="straatnaam met huisnummer"
                  value={van}
                  onChange={(e) => setVan(e.target.value)}
                  className="flex-1 py-3 pr-3 text-sm outline-none placeholder-gray-400 bg-transparent"
                />
              </div>

              {/* Tussenstop + swap */}
              <div className="flex items-center justify-between px-1">
                <button
                  type="button"
                  className="text-xs font-medium flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
                  style={{ color: config.colors.dark }}
                >
                  <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center text-xs" style={{ borderColor: config.colors.dark }}>+</span>
                  tussenstop toevoegen
                </button>
                <button
                  type="button"
                  onClick={swap}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: config.colors.dark, color: config.colors.accent }}
                  title="Van/naar omwisselen"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </div>

              {/* Naar */}
              <div
                className="flex items-center rounded-xl overflow-hidden"
                style={{ backgroundColor: 'white' }}
              >
                <span className="px-3 text-xs font-bold text-gray-400 select-none">naar</span>
                <input
                  type="text"
                  placeholder="straatnaam met huisnummer"
                  value={naar}
                  onChange={(e) => setNaar(e.target.value)}
                  className="flex-1 py-3 pr-3 text-sm outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Bagage */}
            <div className="mt-4">
              <p className="text-sm font-bold mb-2" style={{ color: config.colors.dark }}>
                Reis je met bagage?
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="bagage"
                    checked={bagage}
                    onChange={() => setBagage(true)}
                    className="accent-current w-4 h-4"
                    style={{ accentColor: config.colors.dark }}
                  />
                  <span className="text-sm font-medium" style={{ color: config.colors.dark }}>Ja</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="bagage"
                    checked={!bagage}
                    onChange={() => setBagage(false)}
                    className="w-4 h-4"
                    style={{ accentColor: config.colors.dark }}
                  />
                  <span className="text-sm font-medium" style={{ color: config.colors.dark }}>Nee, ik heb geen bagage</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right column: Datum, retour, reizigers */}
          <div className="space-y-4">
            {/* Ophaaldatum */}
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: config.colors.dark }}>
                Ophaalmoment taxi
              </p>
              <div
                className="flex items-center rounded-xl overflow-hidden"
                style={{ backgroundColor: 'white' }}
              >
                <span className="px-3 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="datetime-local"
                  value={datum + (tijd ? 'T' + tijd : '')}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v.includes('T')) {
                      setDatum(v.split('T')[0]);
                      setTijd(v.split('T')[1]);
                    }
                  }}
                  placeholder="Selecteer datum en tijd"
                  className="flex-1 py-3 pr-3 text-sm outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* Retour */}
            <div>
              <label className="flex items-center gap-2.5 cursor-pointer mb-2">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all`}
                  style={{
                    borderColor: config.colors.dark,
                    backgroundColor: retour ? config.colors.dark : 'transparent',
                  }}
                  onClick={() => setRetour(!retour)}
                >
                  {retour && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="text-sm font-medium" style={{ color: config.colors.dark }}>Retour</span>
              </label>

              <div
                className="flex items-center rounded-xl overflow-hidden"
                style={{ backgroundColor: retour ? 'white' : 'rgba(255,255,255,0.5)' }}
              >
                <span className="px-3 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="datetime-local"
                  value={retourDatum}
                  onChange={(e) => setRetourDatum(e.target.value)}
                  disabled={!retour}
                  placeholder="Enkele reis"
                  className="flex-1 py-3 pr-3 text-sm outline-none bg-transparent text-gray-700 disabled:opacity-50"
                />
              </div>
            </div>

            {/* Reizigers */}
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: config.colors.dark }}>
                Aantal reizigers
              </p>
              <div
                className="flex items-center gap-4 px-4 py-2 rounded-xl w-fit"
                style={{ backgroundColor: 'white' }}
              >
                <button
                  type="button"
                  onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                  className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110"
                  style={{ color: config.colors.dark }}
                >
                  −
                </button>
                <span className="text-lg font-bold w-5 text-center" style={{ color: config.colors.dark }}>
                  {reizigers}
                </span>
                <button
                  type="button"
                  onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                  className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110"
                  style={{ color: config.colors.dark }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 flex justify-end">
          <a
            href={`tel:${config.contact.phoneTel}`}
            className="px-8 py-3.5 font-bold text-sm rounded-xl transition-all hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#22c55e', color: 'white' }}
          >
            Bereken mijn ritprijs →
          </a>
        </div>
      </form>
    </div>
  );
};
