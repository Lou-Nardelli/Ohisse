// styles
import './home.scss';
import SliderPicture from './SliderPicture';
import SliderCards from './SliderCards';

function Home() {
  return (
    <div className="home">
      <SliderPicture />
      <SliderCards />
    </div>
  );
}

export default Home;
