import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Diensten } from './pages/Diensten';
import { Vliegvelden } from './pages/Vliegvelden';
import { Tarieven } from './pages/Tarieven';
import { OverOns } from './pages/OverOns';
import { Contact } from './pages/Contact';

export const TaxiCentraleService = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/vliegvelden" element={<Vliegvelden />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
