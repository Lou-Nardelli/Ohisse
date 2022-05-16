// == Import : npm
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// == Import : local
import { useSelector, useDispatch } from 'react-redux';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from '../Home';
import SpotPage from '../SpotPage';
import HomeMap from '../Map';
import Error from '../Error';
import Spots from '../Spots';
import Profile from '../Profile';

import './ohisse.scss';
import LogginForm from '../Forms/LogginForm';
import SelectSpotType from '../Forms/SpotAddForm/SelectSpotType';
import SpotIn from '../Forms/SpotAddForm/SpotIn';
import SpotOut from '../Forms/SpotAddForm/SpotOut';
import RegisterForm from '../Forms/RegisterForm';
import { fetchSpots } from '../../actions/spots';
import TeamPage from '../TeamPage';

// == Composant
function Ohisse() {
  // hook useDispatch to dispatch actions
  const dispatch = useDispatch();
  // when mounting component Ohisse
  useEffect(() => {
    // load all spots from API
    dispatch(fetchSpots());
  }, []);

  const location = useLocation();
  // when url change
  useEffect(
    () => {
      // scroll up
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location],
  );
  // all spots (from state)
  const spots = useSelector((state) => state.spots.listSpots);
  // filter to get a array of interior spots
  const spotsIndoor = spots.filter((item) => item.type === 'Salle');
  // filter to get a array of outdoor spots
  const spotsOutdoor = spots.filter((item) => item.type === 'Spot');
  return (
    <div className="ohisse">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-spot/:slug" element={<SpotPage />} />
        <Route path="/fiches-interieur" element={<Spots listSpots={spotsIndoor} title="Salles intérieures" />} />
        <Route path="/fiches-exterieur" element={<Spots listSpots={spotsOutdoor} title="Spots extérieurs" />} />
        <Route path="/map" element={<HomeMap />} />
        <Route path="/ajout-spot" element={<SelectSpotType />} />
        <Route path="/ajout-spot-interieur" element={<SpotIn />} />
        <Route path="/ajout-spot-exterieur" element={<SpotOut />} />
        <Route path="/connexion" element={<LogginForm />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/inscription" element={<RegisterForm />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/mentions-legales" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default Ohisse;
