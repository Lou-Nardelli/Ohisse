import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Componants
import Spot from './Spot';
import HomeMap from '../Home/HomeMap';

// datas
// later data will be in the state (ex:currentSpot)
// The call to API will be made with a useEffet []
// Current spot data will be sent via props to the componant Spot
// information about the current spot will be save on state (currentSpot)

// styles
import './spotPage.scss';
import { fetchSpotById } from '../../actions/spots';

function SpotPage() {
  const dispatch = useDispatch();
  // the slug of url
  const { slug } = useParams();
  // console.log(slug);
  const spots = useSelector((state) => state.spots.listSpots);
  // console.log(spots);
  const spot = spots.find((element) => element.name === slug);
  // console.log(spot.id);
  // console.log(slug);
  // when mounting the component
  useEffect(
    () => {
      // i want fetch one spot
      dispatch(fetchSpotById(spot.id));
    },
    [],
  );
  // use state of currentSpot
  const currentSpot = useSelector((state) => state.spots.currentSpot);
  // console.log(currentSpot);
  // destructuring
  const {
    name,
    picture,
    number,
    street,
    zipcode,
    city,
    country,
    discipline,
    type,
    rock_type,
    various,
    reputation,
    min_difficulty,
    max_difficulty,
  } = currentSpot[0];
  return (
    <div className="spotPage">
      <Spot
        name={name}
        picture={picture}
        number={number}
        street={street}
        zipcode={zipcode}
        city={city}
        country={country}
        discipline={discipline}
        type={type}
        rockType={rock_type}
        various={various}
        reputation={reputation}
        minDifficulty={min_difficulty}
        maxDifficulty={max_difficulty}
      />
      <HomeMap spots={currentSpot} />
      <p>Composant ajout commentaire</p>
      <p>Composant commentaires</p>
    </div>
  );
}

export default SpotPage;
