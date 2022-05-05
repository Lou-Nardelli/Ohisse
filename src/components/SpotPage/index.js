// Componants
import Spot from './Spot';

// datas
// later data will be in the state (ex:currentSpot)
// The call to API will be made with a useEffet []
// Current spot data will be sent via props to the componant Spot
import data from '../../localData/data';

// styles
import './spotPage.scss';

function SpotPage() {
  const spotIn = data[0];
  return (
    <div className="spotPage">
      <Spot
        name={spotIn.name}
        picture={spotIn.picture}
        number={spotIn.number}
        street={spotIn.street}
        zipcode={spotIn.zipcode}
        city={spotIn.city}
        country={spotIn.country}
        discipline={spotIn.discipline}
        type={spotIn.type}
        rockType={spotIn.rock_type}
        various={spotIn.various}
        reputation={spotIn.reputation}
      />
      <p>Composant carte</p>
      <p>Composant ajout commentaire</p>
      <p>Composant commentaires</p>
    </div>
  );
}

export default SpotPage;
