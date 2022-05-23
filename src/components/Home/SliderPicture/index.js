// == Import : npm
import { Carousel } from 'react-responsive-carousel';
import climbing1 from 'src/assets/img/slider/climbing1.jpg';
import climbing2 from 'src/assets/img/slider/climbing2.jpg';
import climbing3 from 'src/assets/img/slider/climbing3.jpg';
import climbing4 from 'src/assets/img/slider/climbing4.jpg';

// styles
import './sliderPicture.scss';

const picture = [
  climbing1,
  climbing2,
  climbing3,
  climbing4,
];

function SliderPicture() {
  return (
    <div className="sliderPicture">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        interval={6000}
        transitionTime={0}
      >
        {
          picture.map((item) => (
            <img className="sliderPicture__picture" src={item} alt="" />
          ))
        }
      </Carousel>
    </div>
  );
}

export default SliderPicture;
