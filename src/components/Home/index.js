import datas from 'src/localData/data';
// import { useSelector } from 'react-redux';

// styles
import './home.scss';
import SliderPicture from './SliderPicture';
import Card from '../Card';

function Home() {
  const spotName = datas[0].name;
  const spotCity = datas[0].city;
  const spotPicture = datas[0].picture;
  const spotResume = datas[0].various;

  return (
    <div className="home">
      <SliderPicture />
      <Card
        name={spotName}
        city={spotCity}
        resume={spotResume}
        picture={spotPicture}
      />
    </div>
  );
}

export default Home;
