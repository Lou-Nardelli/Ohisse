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
          <p className="features__p">Type: {type}</p>
          <p className="features__p">Discipline: {discipline}</p>
          <p className="features__p">La réputation: {reputation}</p>
          <p className="features__p">Le type de roche: {rockType}</p>
        </div>
      </div>
      <p className="spot__various"> Divers: {various}</p>

    </div>
  );
}

Spot.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  street: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  discipline: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rockType: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  various: PropTypes.string.isRequired,
  reputation: PropTypes.string.isRequired,
};

export default Spot;
