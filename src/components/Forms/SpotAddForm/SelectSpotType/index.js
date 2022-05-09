// styles
import './selectSpotType.scss';
import TypeSpot from './TypeSpot/TypeSpot';

function SelectSpotType() {
  return (
    <div className="selectSpotType">
      <h2>Quel type de spot tu veux ajouter ?</h2>
      <div>
        <TypeSpot picture="https://www.grimper.com/media/guide_salles/img_salles/the_roof_pays_basque2.jpg" title="Salle intérieure" url="/ajout-spot-interieur" />
        <TypeSpot picture="https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg" title="Spot extérieur" url="/ajout-spot-exterieur" />
      </div>
    </div>
  );
}

export default SelectSpotType;
