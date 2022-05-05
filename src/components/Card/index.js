// == Import : npm
import './card.scss';

// == Composant
function Card() {
  return (
    <div className="card">
      <img className="card__image" src="https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg" alt="montagne" />
      <h1>Le Fosse Arthour</h1>
      <h2>Caen</h2>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  );
}

// == Export
export default Card;
