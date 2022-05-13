// styles
import './selectSpotType.scss';
import TypeSpot from './TypeSpot/TypeSpot';

function SelectSpotType() {
  return (
    <div className="selectSpotType">
      <h2 className="selectSpotType__question">Quel type de spot tu veux ajouter ?</h2>
      <div className="selectSpotType__choice">
        <TypeSpot picture="https://www.grimper.com/media/guide_salles/img_salles/the_roof_pays_basque2.jpg" title="Salle" url="/ajout-spot-interieur" />
        <TypeSpot picture="https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg" title="Spot" url="/ajout-spot-exterieur" />
      </div>
    </div>
  );
}

export default SelectSpotType;
