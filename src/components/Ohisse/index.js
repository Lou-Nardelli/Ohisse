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
import LegalNotice from '../LegalNotice';

import './ohisse.scss';
import LogginForm from '../Forms/LogginForm';
import SelectSpotType from '../Forms/SpotAddForm/SelectSpotType';
import SpotIn from '../Forms/SpotAddForm/SpotIn';
import SpotOut from '../Forms/SpotAddForm/SpotOut';
import RegisterForm from '../Forms/RegisterForm';
import { fetchSpots } from '../../actions/spots';
import TeamPage from '../TeamPage';
import { fetchUserById, isLogged } from '../../actions/user';

// == Composant
function Ohisse() {
  // hook useDispatch to dispatch actions
  const dispatch = useDispatch();

  // function decode token
  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

    return JSON.parse(jsonPayload);
  }

  // when mounting component Ohisse
  useEffect(() => {
    // load all spots from API
    dispatch(fetchSpots());
    // dispatch();
    // console.log(localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    // if token exist
    if (token !== null) {
      // isLogged = true
      dispatch(isLogged());
      // we find id's user
      console.log(parseJwt(token).sub);
      // we fetch information about user
      dispatch(fetchUserById(parseJwt(token).sub));
    }
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
  // calling boolean of dark-theme mode
  const theme = useSelector((state) => state.user.isDarkMode);
  // all spots (from state)
  const spots = useSelector((state) => state.spots.listSpots);
  // filter to get a array of interior spots
  const spotsIndoor = spots.filter((item) => item.type === 'Salle');
  // filter to get a array of outdoor spots
  const spotsOutdoor = spots.filter((item) => item.type === 'Spot');
  return (
    // using a div that contains the dark/light theme class
    <div className={`theme ${theme ? 'theme--dark' : 'theme--light'}`}>
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
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="*" element={<Error />} />
      </Routes>


        <Footer />
      </div>
    </div>
  );
}

// == Export
export default Ohisse;
