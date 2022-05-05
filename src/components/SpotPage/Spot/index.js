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
      <header>
        <h1>{name}</h1>
        <button type="button"> &#10084;</button>
      </header>
      <div>
        <img src={picture} alt="" />
      </div>

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
