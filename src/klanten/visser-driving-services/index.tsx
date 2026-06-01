import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Contact } from './pages/Contact';
import { DeEssentie } from './pages/DeEssentie';
import { Veiligheid } from './pages/Veiligheid';
import { Clientele } from './pages/Clientele';

export const VisserDrivingServices = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/de-essentie" element={<DeEssentie />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/veiligheid" element={<Veiligheid />} />
    <Route path="/clientele" element={<Clientele />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
