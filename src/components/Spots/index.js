// ext
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
      <h1 className="spots__title">{title}</h1>
      <div className="spots__cards">
        {
          listSpots.map((item) => (
            <Link key={item.id} to={`/fiche-spot/${item.name}`}>
              <Card
                key={item.id}
                name={item.name}
                city={item.city}
                picture={item.picture}
                className="card cardLittle"
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
