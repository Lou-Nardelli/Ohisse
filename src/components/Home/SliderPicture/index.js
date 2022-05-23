// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import climbing1 from 'src/assets/img/slider/climbing1.jpg';
import climbing2 from 'src/assets/img/slider/climbing2.jpg';
import climbing3 from 'src/assets/img/slider/climbing3.jpg';
import climbing4 from 'src/assets/img/slider/climbing4.jpg';

// == Import : local
import { nextIndex, previousIndex } from '../../../actions/spots';

// styles
import './sliderPicture.scss';

const picture = [
  climbing1,
  climbing2,
  climbing3,
  climbing4,
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
