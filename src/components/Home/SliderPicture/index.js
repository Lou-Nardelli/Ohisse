// == Import : npm
import { Carousel } from 'react-responsive-carousel';

// styles
import './sliderPicture.scss';

const picture = [
  'https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg',
  'https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg',
  'https://www.blockout.fr/images/articles/Nantes.jpg',
  'https://www.grimper.com/media/guide_salles/img_salles/the_roof_pays_basque2.jpg',
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
