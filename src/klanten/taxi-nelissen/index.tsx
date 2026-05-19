import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ParticulierVervoer } from './pages/ParticulierVervoer';
import { ZakelijkVervoer } from './pages/ZakelijkVervoer';
import { WMOPage } from './pages/WMOPage';
import { ZiekenvervoerPage } from './pages/ZiekenvervoerPage';
import { VacaturesPage } from './pages/VacaturesPage';
import { Contact } from './pages/Contact';

export const TaxiNelissen = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/particulier-vervoer" element={<ParticulierVervoer />} />
    <Route path="/zakelijk-vervoer" element={<ZakelijkVervoer />} />
    <Route path="/wmo-maastricht" element={<WMOPage />} />
    <Route path="/ziekenvervoer" element={<ZiekenvervoerPage />} />
    <Route path="/vacatures" element={<VacaturesPage />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
