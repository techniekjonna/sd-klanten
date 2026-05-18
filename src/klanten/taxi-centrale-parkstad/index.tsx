import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Particulier } from './pages/Particulier';
import { Zakelijk } from './pages/Zakelijk';
import { Vliegvelden } from './pages/Vliegvelden';
import { Tarieven } from './pages/Tarieven';
import { Bestellen } from './pages/Bestellen';
import { Contact } from './pages/Contact';

export const TaxiCentraleParkstad = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/particulier" element={<Particulier />} />
    <Route path="/zakelijk" element={<Zakelijk />} />
    <Route path="/vliegvelden" element={<Vliegvelden />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/bestellen" element={<Bestellen />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
