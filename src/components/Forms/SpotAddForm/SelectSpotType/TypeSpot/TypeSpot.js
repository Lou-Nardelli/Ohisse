import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import './typeSpot.scss';

function TypeSpot({ title, url, picture }) {
  return (
    <div className="typeSpot">
      <Link to={url}> <img className="typeSpot__img" src={picture} alt={title} /> </Link>
      <h3 className="typeSpot__title">{title}</h3>
    </div>
  );
}

TypeSpot.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default TypeSpot;
