import { useSelector } from 'react-redux';
// Componants
import Spot from './Spot';

// datas
// later data will be in the state (ex:currentSpot)
// The call to API will be made with a useEffet []
// Current spot data will be sent via props to the componant Spot
// information about the current spot will be save on state (currentSpot)

// styles
import './spotPage.scss';

function SpotPage() {
  // use state of currentSpot
  const spot = useSelector((state) => state.spots.currentSpot);
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
  } = spot;
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
      <p>Composant carte</p>
      <p>Composant ajout commentaire</p>
      <p>Composant commentaires</p>
    </div>
  );
}

export default SpotPage;
