// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// == Import : local
import { nextIndex, previousIndex } from '../../../actions/spots';

// styles
import './sliderPicture.scss';

const picture = [
  'https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg',
  'https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg',
  'https://www.blockout.fr/images/articles/Nantes.jpg',
  'https://www.grimper.com/media/guide_salles/img_salles/the_roof_pays_basque2.jpg',
];

function SliderPicture() {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.spots.currentIndexSliderPicture);
  const currentPicture = picture[currentIndex];

  const handleNext = () => {
    // console.log('i want to see the next picture');
    dispatch(nextIndex());
  };

  const handlePrevious = () => {
    // console.log('i want to see the previous picture');
    dispatch(previousIndex());
  };

  return (
    <div className="sliderPicture">
      <button type="button" className="sliderPicture__button--previous" aria-label="previous" onClick={handlePrevious}> &lt; </button>
      <Link to="">
        <img className="sliderPicture__picture" src={currentPicture} alt="" />
      </Link>
      <button type="button" className="sliderPicture__button--next" aria-label="next" onClick={handleNext}> &gt; </button>
    </div>
  );
}

export default SliderPicture;
