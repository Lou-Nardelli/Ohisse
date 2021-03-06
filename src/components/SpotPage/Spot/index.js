// import ext
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fav from 'src/assets/img/fav.png';
import unfav from 'src/assets/img/unfav.png';
import { addFav, removeFav } from '../../../actions/user';
import Popup from './Popup';

// styles
import './spot.scss';

function Spot({
  name,
  number,
  street,
  zipcode,
  city,
  country,
  discipline,
  type,
  rockType,
  picture,
  various,
  reputation,
  minDifficulty,
  maxDifficulty,
  id,
}) {
  const dispatch = useDispatch();
  const [buttonPopup, setButtonPopup] = useState(false);
  // we retrieve id of the user's favorite place
  const favorites = useSelector((state) => state.user.favorites);
  const isFavoriteSpot = useSelector((state) => state.spots.currentSpot[0].id);
  const isLogged = useSelector((state) => state.user.isLogged);

  const isFavorites = favorites.find((item) => item === isFavoriteSpot);

  let favIcon = unfav;

  if (isFavorites === undefined) {
    // it is added to the favorites
    // console.log('i add fav');
    favIcon = unfav;
  }
  else {
    // console.log('we remove fav');
    favIcon = fav;
  }

  const handleFavClick = () => {
    // we check if the current spot (id) is part of the user's favorites
    const isFav = favorites.find((item) => item === id);
    // console.log(isFav);
    // if spot is not one of his favorites

    if (isFav === undefined) {
      // it is added to the favorites
      // console.log('i add fav');
      dispatch(addFav());
    }
    else {
      // console.log('we remove fav');
      dispatch(removeFav());
    }
  };

  // Translation of the reputaion stocked in DB to display it on spotin page
  let reputationTrans = reputation;
  if (reputationTrans === 'easy') {
    reputationTrans = 'Plutôt accessible';
  }
  else if (reputationTrans === 'medium') {
    reputationTrans = 'Niveau moyen';
  }
  else if (reputationTrans === 'hard') {
    reputationTrans = 'Plutôt costaud';
  }

  return (
    <div className="spot">
      <div className="spot__header">
        <h1 className="header__name">{name} </h1>
        {/* onClick header button:
        middleware= api (add fav on the table fav)
        classButton header__button to hearder__button--fav
        */}
      </div>
      <div className="spot__picture">
        <img className="spot__picture--image" src={picture === null ? 'https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg' : picture} alt={name} />
        {isLogged && (
          <button className="spot__picture--button" type="button" onClick={handleFavClick}><img className="spot__picture--icon" alt="favorites-icon" src={favIcon} /></button>
        )}
        {!isLogged && (
          <button className="spot__picture--button" type="button" onClick={() => setButtonPopup(true)}><img className="spot__picture--icon" alt="favorites-icon" src={favIcon} /></button>
        )}
        {/* Warning message popup */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
      </div>
      <div className="spot__description">
        <div className="description__address">
          {number} {street} {zipcode} {city}, {country}
        </div>
        <div className="description__features">
          <p className="features__p"><strong className="spot__strong">Type:</strong>  {type}</p>
          <p className="features__p"><strong className="spot__strong"> Discipline:</strong> {discipline}</p>
          { // if type 'interieur' we display reputation
            (type === 'Salle' && reputation !== null) && (<p className="features__p"><strong className="spot__strong">La réputation:</strong> {reputationTrans}</p>)
          }
          { // if type 'exterieur' we display min difficulty and max difficulty
            (type === 'Spot' && minDifficulty !== null) && (<p className="features__p"><strong className="spot__strong">Difficulté minimun:</strong> {minDifficulty}</p>)
          }
          {(type === 'Spot' && maxDifficulty !== null) && (<p className="features__p"><strong className="spot__strong">Difficulté maximun:</strong> {maxDifficulty}</p>)}
          {rockType !== null && <p className="features__p"><strong className="spot__strong"> Le type de roche:</strong> {rockType}</p>}
        </div>
      </div>
      { // if there is no description, this paragraph is not displayed
        various !== null && (<p className="spot__various"> <strong className="spot__strong"> Divers:</strong> {various}</p>)
      }
    </div>
  );
}

Spot.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  street: PropTypes.string,
  zipcode: PropTypes.string,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  discipline: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rockType: PropTypes.string,
  picture: PropTypes.string,
  various: PropTypes.string,
  reputation: PropTypes.string,
  minDifficulty: PropTypes.string,
  maxDifficulty: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Spot.defaultProps = {
  various: '',
  reputation: '',
  minDifficulty: '',
  maxDifficulty: '',
  picture: 'https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg',
  number: '',
  street: '',
  zipcode: '',
  rockType: '',
};

export default Spot;
