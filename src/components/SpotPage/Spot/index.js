// import ext
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFav } from '../../../actions/user';

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
}) {
  const dispatch = useDispatch();
  const handleFavClick = () => {
    console.log('fav');
    dispatch(addFav());
  };
  return (
    <div className="spot">
      <div className="spot__header">
        <h1 className="header__name">{name} </h1>
        {/* onClick header button:
        middleware= api (add fav on the table fav)
        classButton header__button to hearder__button--fav
        */}
        <button className="header__button" type="button" onClick={handleFavClick}> &#10084;</button>
      </div>
      <img className="spot__picture" src={picture === null ? 'https://www.grimper.com/media/guide_salles/img_salles/the_roof_pays_basque2.jpg' : picture} alt={name} />
      <div className="spot__description">
        <div className="description__address">
          {number} {street} {zipcode} {city}, {country}
        </div>
        <div className="description__features">
          <p className="features__p"><strong className="spot__strong">Type:</strong>  {type}</p>
          <p className="features__p"><strong className="spot__strong"> Discipline:</strong> {discipline}</p>
          { // if type 'interieur' we display reputation
            type === 'interieur' && (<p className="features__p"><strong className="spot__strong">La réputation:</strong> {reputation}</p>)
            }
          { // if type 'exterieur' we display min difficulty and max difficulty
            type === 'exterieur' && (<p className="features__p"><strong className="spot__strong">Difficulté minimun:</strong> {minDifficulty}</p>)
          }
          {type === 'exterieur' && (<p className="features__p"><strong className="spot__strong">Difficulté maximun:</strong> {maxDifficulty}</p>)}
          <p className="features__p"><strong className="spot__strong"> Le type de roche:</strong> {rockType}</p>
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
  number: PropTypes.number,
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
