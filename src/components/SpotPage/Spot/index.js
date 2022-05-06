// import ext
import PropTypes from 'prop-types';

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
  return (
    <div className="spot">
      <div className="spot__header">
        <h1 className="header__name">{name} </h1>
        <button className="header__button" type="button"> &#10084;</button>
      </div>
      <img className="spot__picture" src={picture} alt={name} />
      <div className="spot__description">
        <div className="description__address">
          {number} {street}, {zipcode}, {city}, {country}
        </div>
        <div className="description__features">
          <p className="features__p"><strong>Type:</strong>  {type}</p>
          <p className="features__p"><strong> Discipline:</strong> {discipline}</p>
          {type === 'interieur' && (<p className="features__p"><strong>La réputation:</strong> {reputation}</p>)}
          {type === 'exterieur' && (<p className="features__p"><strong>Difficulté minimun:</strong> {minDifficulty}</p>)}
          {type === 'exterieur' && (<p className="features__p"><strong>Difficulté maximun:</strong> {maxDifficulty}</p>)}
          <p className="features__p"><strong> Le type de roche:</strong> {rockType}</p>
        </div>
      </div>
      <p className="spot__various"> Divers: {various}</p>

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
  rockType: PropTypes.string.isRequired,
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
};

export default Spot;
