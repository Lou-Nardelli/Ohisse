// == Import : npm
import PropTypes from 'prop-types';
// Styles
import './card.scss';

// == Composant
function Card({
  name,
  city,
  resume,
  picture,
}) {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__content--image" src={picture} alt={name} />
        <h1 className="card__content--title">{name},</h1>
        <h2 className="card__content--location">{city}</h2>
      </div>
      <div className="card__text">
        {/* Text resume limited to the 100 first characters */}
        <p>{resume.substring(0, 100)}...</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// == Export
export default Card;
