import { useState } from 'react';
import { config } from '../config';

export const BookingWidget = () => {
  const [retour, setRetour] = useState(false);
  const [reizigers, setReizigers] = useState(1);
  const [bagage, setBagage] = useState(false);
  const [tussenstop, setTussenstop] = useState(false);
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');
  const [stop, setStop] = useState('');
  const [datum, setDatum] = useState('');
  const [retourDatum, setRetourDatum] = useState('');

  const handleBoek = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hallo, ik wil graag een rit boeken:%0AVan: ${van}%0ANaar: ${naar}${tussenstop && stop ? `%0ATussenstop: ${stop}` : ''}%0ADatum: ${datum}${retour && retourDatum ? `%0ARetour: ${retourDatum}` : ''}%0AReizigers: ${reizigers}%0ABagage: ${bagage ? 'Ja' : 'Nee'}`;
    window.open(`https://wa.me/31652065065?text=${msg}`, '_blank');
  };

  const gold = config.colors.primary;

  return (
    <div className="bg-white shadow-2xl rounded-none md:rounded-2xl overflow-hidden">
      {/* Tab-style header */}
      <div className="bg-[#0E0D0B] px-6 py-4 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#B8972A]" />
        <span className="text-white font-semibold text-sm tracking-wide uppercase">Rit Boeken</span>
      </div>

      <form onSubmit={handleBoek} className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: route */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Route</p>

            {/* Van */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-[#B8972A] transition-colors">
              <span className="text-[#B8972A] font-bold text-xs w-6 flex-shrink-0">VAN</span>
              <input
                type="text"
                placeholder="Ophaaladres, straat + huisnummer"
                value={van}
                onChange={(e) => setVan(e.target.value)}
                required
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Tussenstop toggle */}
            <button
              type="button"
              onClick={() => setTussenstop(!tussenstop)}
              className="flex items-center gap-2 text-xs font-medium transition-colors"
              style={{ color: tussenstop ? gold : '#9CA3AF' }}
            >
              <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs"
                style={{ borderColor: tussenstop ? gold : '#9CA3AF', color: tussenstop ? gold : '#9CA3AF' }}>
                {tussenstop ? '−' : '+'}
              </span>
              Tussenstop {tussenstop ? 'verwijderen' : 'toevoegen'}
            </button>

            {tussenstop && (
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-[#B8972A] transition-colors">
                <span className="text-[#B8972A] font-bold text-xs w-6 flex-shrink-0">VIA</span>
                <input
                  type="text"
                  placeholder="Tussenstop adres"
                  value={stop}
                  onChange={(e) => setStop(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            )}

            {/* Naar */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-[#B8972A] transition-colors">
              <span className="text-[#B8972A] font-bold text-xs w-6 flex-shrink-0">NAAR</span>
              <input
                type="text"
                placeholder="Bestemmingsadres, straat + huisnummer"
                value={naar}
                onChange={(e) => setNaar(e.target.value)}
                required
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Bagage */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Bagage</p>
              <div className="flex items-center gap-5">
                {[true, false].map((val) => (
                  <label key={String(val)} className="flex items-center gap-2 cursor-pointer">
                    <span
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                      style={{
                        borderColor: bagage === val ? gold : '#D1D5DB',
                        backgroundColor: bagage === val ? gold : 'transparent',
                      }}
                    >
                      {bagage === val && <span className="w-2 h-2 rounded-full bg-white block" />}
                    </span>
                    <input
                      type="radio"
                      name="bagage"
                      className="sr-only"
                      checked={bagage === val}
                      onChange={() => setBagage(val)}
                    />
                    <span className="text-sm text-gray-700">{val ? 'Ja' : 'Nee, geen bagage'}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: datum, retour, reizigers */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Details</p>

            {/* Datum */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-[#B8972A] transition-colors">
              <p className="text-xs text-gray-400 mb-1">Ophaalmoment</p>
              <input
                type="datetime-local"
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                required
                className="w-full bg-transparent text-sm outline-none text-gray-700"
              />
            </div>

            {/* Retour toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRetour(!retour)}
                className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0"
                style={{ backgroundColor: retour ? gold : '#D1D5DB' }}
              >
                <span
                  className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform"
                  style={{ transform: retour ? 'translateX(18px)' : 'translateX(2px)' }}
                />
              </button>
              <span className="text-sm text-gray-700 font-medium">Retour</span>
            </div>

            {retour ? (
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-[#B8972A] transition-colors">
                <p className="text-xs text-gray-400 mb-1">Terugkeermoment</p>
                <input
                  type="datetime-local"
                  value={retourDatum}
                  onChange={(e) => setRetourDatum(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none text-gray-700"
                />
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-300">Enkele reis</p>
              </div>
            )}

            {/* Reizigers */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Aantal reizigers</p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setReizigers(Math.max(1, reizigers - 1))}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#B8972A] hover:text-[#B8972A] transition-colors font-bold"
                >
                  −
                </button>
                <span className="text-lg font-semibold text-gray-800 w-6 text-center">{reizigers}</span>
                <button
                  type="button"
                  onClick={() => setReizigers(Math.min(8, reizigers + 1))}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#B8972A] hover:text-[#B8972A] transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-gray-400">
            Uw aanvraag wordt bevestigd via WhatsApp of telefoon.
          </p>
          <button
            type="submit"
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#0E0D0B] transition-opacity hover:opacity-90 flex-shrink-0"
            style={{ backgroundColor: gold }}
          >
            Rit Aanvragen →
          </button>
        </div>
      </form>
    </div>
  );
};
