import datas from 'src/localData/data';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextCardIndex, previousCardIndex } from 'src/actions/spots';
import Card from '../../Card';

// styles
import './sliderCards.scss';

function SliderCards() {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextCardIndex());
  };

  const handlePrevious = () => {
    dispatch(previousCardIndex());
  };

  return (
    <div className="sliderCards">
      <button type="button" className="sliderCards__button--previous" aria-label="previous" onClick={handlePrevious}> &lt; </button>
      {
        datas.map((item) => (
          <Link key={item.id} to="">
            <Card
              key={item.id}
              name={item.name}
              city={item.city}
              resume={item.various}
              picture={item.picture}
            />
          </Link>
        ))
      }
      <button type="button" className="sliderCards__button--next" aria-label="next" onClick={handleNext}> &gt; </button>
    </div>
  );
}

export default SliderCards;
