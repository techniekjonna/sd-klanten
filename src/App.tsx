import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { KlantenOverzicht } from './pages/KlantenOverzicht';
import { Sjabloon } from './klanten/sjabloon';
import { DutchInk } from './klanten/dutch-ink';
import { Care4CarsSittard } from './klanten/care4carssittard';
import { AlfaTaxi } from './klanten/alfa-taxi';
import { BeatrixNails } from './klanten/beatrix-nails';
import { TonDirkxFotografie } from './klanten/ton-dirkx-fotografie';
import { AutorijschoolVdSande } from './klanten/autorijschoolvdsande';
import { Stylesatlife } from './klanten/stylesatlife';
import { SchoonmaakbedrijfErwin } from './klanten/schoonmaakbedrijf-erwin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KlantenOverzicht />} />
        <Route path="/preview/sjabloon" element={<Sjabloon />} />
        <Route path="/preview/sjabloon/*" element={<Sjabloon />} />
        <Route path="/preview/dutch-ink" element={<DutchInk />} />
        <Route path="/preview/dutch-ink/*" element={<DutchInk />} />
        <Route path="/preview/care4carssittard" element={<Care4CarsSittard />} />
        <Route path="/preview/care4carssittard/*" element={<Care4CarsSittard />} />
        <Route path="/preview/alfa-taxi" element={<AlfaTaxi />} />
        <Route path="/preview/alfa-taxi/*" element={<AlfaTaxi />} />
        <Route path="/preview/beatrix-nails" element={<BeatrixNails />} />
        <Route path="/preview/beatrix-nails/*" element={<BeatrixNails />} />
        <Route path="/preview/ton-dirkx-fotografie" element={<TonDirkxFotografie />} />
        <Route path="/preview/ton-dirkx-fotografie/*" element={<TonDirkxFotografie />} />
        <Route path="/preview/autorijschoolvdsande" element={<AutorijschoolVdSande />} />
        <Route path="/preview/autorijschoolvdsande/*" element={<AutorijschoolVdSande />} />
        <Route path="/preview/stylesatlife" element={<Stylesatlife />} />
        <Route path="/preview/stylesatlife/*" element={<Stylesatlife />} />
        <Route path="/preview/schoonmaakbedrijf-erwin" element={<SchoonmaakbedrijfErwin />} />
        <Route path="/preview/schoonmaakbedrijf-erwin/*" element={<SchoonmaakbedrijfErwin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
