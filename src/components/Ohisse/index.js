// == Import : npm
import { Routes, Route } from 'react-router-dom';

// == Import : local
import { useSelector } from 'react-redux';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from '../Home';
import SpotPage from '../SpotPage';
import HomeMap from '../Home/HomeMap';
import Error from '../Error';
import Spots from '../Spots';

import './ohisse.scss';
import LogginForm from '../Forms/LogginForm';

// == Composant
function Ohisse() {
  // all spots (from state)
  const spots = useSelector((state) => state.spots.listSpots);
  // filter to get a array of interior spots
  const spotsInterior = spots.filter((item) => item.type === 'interieur');
  // filter to get a array of outdoor spots
  const spotsOutdoor = spots.filter((item) => item.type === 'exterieur');
  return (
    <div className="ohisse">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-spot/:slug" element={<SpotPage />} />
        {/* <Route path="/fiches-interieur" element={<Spots listSpots={spotsIndoor} />} />
        <Route path="/fiches-exterieur" element={<Spots listSpots={spotsOutdoor} />} /> */}
        <Route path="/map" element={<HomeMap />} />
        <Route path="/connexion" element={<Home />} />
        <Route path="/inscription" element={<Home />} />
        <Route path="/profil" element={<Home />} />
        <Route path="/equipe" element={<Home />} />
        <Route path="/mentions-legales" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default Ohisse;
