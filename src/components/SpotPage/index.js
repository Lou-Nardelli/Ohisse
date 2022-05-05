// Componants
import Spot from './Spot';

// datas
import data from '../../localData/data';

// styles
import './spotPage.scss';

function SpotPage() {
  const spotOut = data[0];
  return (
    <div className="spotPage">
      <Spot
        name={spotOut.name}
      />
      <p>Composant carte</p>
      <p>Composant ajout commentaire</p>
      <p>Composant commentaires</p>
    </div>
  );
}

export default SpotPage;
