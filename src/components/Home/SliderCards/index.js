import datas from 'src/localData/data';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextCardIndex, previousCardIndex } from 'src/actions/spots';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
      <Carousel
        // autoPlay
        centerMode
        centerSlidePercentage={40}
        infiniteLoop
        showArrows
        showIndicators={false}
        showStatus={false}
        swipeable
      >
        {
          datas.map((item) => (
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
      </Carousel>
      <button type="button" className="sliderCards__button--next" aria-label="next" onClick={handleNext}> &gt; </button>
    </div>
  );
}

export default SliderCards;
