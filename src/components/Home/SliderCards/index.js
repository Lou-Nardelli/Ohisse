import datas from 'src/localData/data';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Card from '../../Card';

// styles
import './sliderCards.scss';

function SliderCards() {
  return (
    <div className="sliderCards">
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
    </div>
  );
}

export default SliderCards;
