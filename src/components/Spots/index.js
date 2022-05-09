// ext
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// composants
import { Link } from 'react-router-dom';
import Card from '../Card';
// styles
import './spots.scss';

// componant receives a title and a filtered array
function Spots({ listSpots, title }) {
  return (
    <div className="spots">
      <h2 className="spots__title">{title}</h2>
      <div className="spots__cards">
        {
          listSpots.map((item) => (
            <Link key={item.id} to="">
              <Card
                key={item.id}
                name={item.name}
                city={item.city}
                picture={item.picture}
              />
            </Link>
          ))
        }
      </div>

    </div>
  );
}

Spots.propTypes = {
  title: PropTypes.string.isRequired,
  listSpots: PropTypes.array.isRequired,
};

export default Spots;
