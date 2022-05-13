import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import './typeSpot.scss';
import { changeField } from '../../../../../actions/spots';

function TypeSpot({ title, url, picture }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    // console.log(title);
    dispatch(changeField(title, 'type'));
  };
  return (
    <div className="typeSpot">
      <Link to={url}> <img className="typeSpot__img" src={picture} alt={title} onClick={handleClick} /> </Link>
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
