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
  const spot = useSelector((state) => state.spots.currentSpot);
  // todo destructuring objet spot
  return (
    <div className="spotPage">
      <Spot
        name={spot.name}
        picture={spot.picture}
        number={spot.number}
        street={spot.street}
        zipcode={spot.zipcode}
        city={spot.city}
        country={spot.country}
        discipline={spot.discipline}
        type={spot.type}
        rockType={spot.rock_type}
        various={spot.various}
        reputation={spot.reputation}
        minDifficulty={spot.min_difficulty}
        maxDifficulty={spot.max_difficulty}
      />
      <p>Composant carte</p>
      <p>Composant ajout commentaire</p>
      <p>Composant commentaires</p>
    </div>
  );
}

export default SpotPage;
