import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import './typeSpot.scss';

function TypeSpot({ title, url, picture }) {
  return (
    <div className="typeSpot">
      <Link to={url}> <img src={picture} alt={title} /> </Link>
      <h3>{title}</h3>
    </div>
  );
}

TypeSpot.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default TypeSpot;
