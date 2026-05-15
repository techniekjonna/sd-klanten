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
import { OmegaTaxi } from './klanten/omega-taxi';
import { Taxi046 } from './klanten/taxi-046';
import { TaxiCentraleGeleen } from './klanten/taxi-centrale-geleen';
import { OneTaxiZuidLimburg } from './klanten/onetaxi-zuidlimburg';
import { TaxibedrijfKnol } from './klanten/taxibedrijf-knol';
import { TaxiSittard } from './klanten/taxi-sittard';
import { TaxibedrijfMitax } from './klanten/taxibedrijf-mitax';
import { TaxibedrijfSavelkoul } from './klanten/taxibedrijf-savelkoul';
import { Grootveld } from './klanten/grootveld';
import { GlobalTaxiHeerlen } from './klanten/global-taxi-heerlen';
import { UwTaxiHeerlen } from './klanten/uw-taxi-heerlen';
import { DmTaxiParkstad } from './klanten/dm-taxi-parkstad';
import { TaxibedrijfHousmans } from './klanten/taxibedrijf-housmans';
import { TaxiCompleetMaastricht } from './klanten/taxi-compleet-maastricht';
import { PackTaxi } from './klanten/pack-taxi';
import { TaxiMC } from './klanten/taxi-mc';

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
        <Route path="/preview/omega-taxi" element={<OmegaTaxi />} />
        <Route path="/preview/omega-taxi/*" element={<OmegaTaxi />} />
        <Route path="/preview/taxi-046" element={<Taxi046 />} />
        <Route path="/preview/taxi-046/*" element={<Taxi046 />} />
        <Route path="/preview/taxi-centrale-geleen" element={<TaxiCentraleGeleen />} />
        <Route path="/preview/taxi-centrale-geleen/*" element={<TaxiCentraleGeleen />} />
        <Route path="/preview/onetaxi-zuidlimburg" element={<OneTaxiZuidLimburg />} />
        <Route path="/preview/onetaxi-zuidlimburg/*" element={<OneTaxiZuidLimburg />} />
        <Route path="/preview/taxibedrijf-knol" element={<TaxibedrijfKnol />} />
        <Route path="/preview/taxibedrijf-knol/*" element={<TaxibedrijfKnol />} />
        <Route path="/preview/taxi-sittard" element={<TaxiSittard />} />
        <Route path="/preview/taxi-sittard/*" element={<TaxiSittard />} />
        <Route path="/preview/taxibedrijf-mitax" element={<TaxibedrijfMitax />} />
        <Route path="/preview/taxibedrijf-mitax/*" element={<TaxibedrijfMitax />} />
        <Route path="/preview/taxibedrijf-savelkoul" element={<TaxibedrijfSavelkoul />} />
        <Route path="/preview/taxibedrijf-savelkoul/*" element={<TaxibedrijfSavelkoul />} />
        <Route path="/preview/grootveld" element={<Grootveld />} />
        <Route path="/preview/grootveld/*" element={<Grootveld />} />
        <Route path="/preview/global-taxi-heerlen" element={<GlobalTaxiHeerlen />} />
        <Route path="/preview/global-taxi-heerlen/*" element={<GlobalTaxiHeerlen />} />
        <Route path="/preview/uw-taxi-heerlen" element={<UwTaxiHeerlen />} />
        <Route path="/preview/uw-taxi-heerlen/*" element={<UwTaxiHeerlen />} />
        <Route path="/preview/dm-taxi-parkstad" element={<DmTaxiParkstad />} />
        <Route path="/preview/dm-taxi-parkstad/*" element={<DmTaxiParkstad />} />
        <Route path="/preview/taxibedrijf-housmans" element={<TaxibedrijfHousmans />} />
        <Route path="/preview/taxibedrijf-housmans/*" element={<TaxibedrijfHousmans />} />
        <Route path="/preview/taxi-compleet-maastricht" element={<TaxiCompleetMaastricht />} />
        <Route path="/preview/taxi-compleet-maastricht/*" element={<TaxiCompleetMaastricht />} />
        <Route path="/preview/pack-taxi" element={<PackTaxi />} />
        <Route path="/preview/pack-taxi/*" element={<PackTaxi />} />
        <Route path="/preview/taxi-mc" element={<TaxiMC />} />
        <Route path="/preview/taxi-mc/*" element={<TaxiMC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
