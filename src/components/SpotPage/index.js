import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
// Componants
import Spot from './Spot';
import HomeMap from '../Home/HomeMap';
import Loading from '../Loading';
import AddMessage from './AddMessage';
import Messages from './Messages';

// datas
// later data will be in the state (ex:currentSpot)
// The call to API will be made with a useEffet []
// Current spot data will be sent via props to the componant Spot
// information about the current spot will be save on state (currentSpot)

// styles
import './spotPage.scss';
import { fetchSpotById } from '../../actions/spots';
import { fetchAllCommentsBySpot } from '../../actions/comments';

function SpotPage() {
  const dispatch = useDispatch();
  // the slug of url
  const { slug } = useParams();
  const isLoading = useSelector((state) => state.spots.isLoading);
  // use state of currentSpot
  const currentSpot = useSelector((state) => state.spots.currentSpot);
  const { isLogged } = useSelector((state) => state.user);
  // console.log(currentSpot);
  // console.log(slug);
  // we fetch all the spots to the state
  const spots = useSelector((state) => state.spots.listSpots);
  // console.log(spots);
  // we find amoung all the spots, the current spot
  const spot = spots.find((element) => element.name === slug);
  // console.log(spots);
  // console.log(spot);

  if (!spot) {
    return <Navigate to="/" replace />;
  }

  // when mounting the component
  useEffect(
    () => {
      // i want fetch one spot
      dispatch(fetchSpotById(spot.id));
      // i want all comments of this place
      dispatch(fetchAllCommentsBySpot(spot.id));
    },
    [],
  );

  // destructuring
  const {
    name,
    picture,
    number,
    street,
    zipcode,
    city,
    country,
    discipline,
    type,
    rock_type,
    various,
    reputation,
    min_difficulty,
    max_difficulty,
    id,
  } = currentSpot[0];

  return (
    <div className="spotPage">
      {isLoading === false && (
        <>
          <Spot
            name={name}
            picture={picture}
            number={number}
            street={street}
            zipcode={zipcode}
            city={city}
            country={country}
            discipline={discipline}
            type={type}
            rockType={rock_type}
            various={various}
            reputation={reputation}
            minDifficulty={min_difficulty}
            maxDifficulty={max_difficulty}
            id={id}
          />
          <HomeMap spots={currentSpot} />

          <div className="messages-form">
            <Messages />
            {isLogged && (
              <AddMessage />
            )}
            {!isLogged && (
              <div className="form">
                <p className="form__text">Vous devez être connecté pour commenter ! <Link className="form__text--connexion" to="/connexion">Se connecter</Link></p>
                <Link className="form__link" to="/connexion"><button type="button" className="form__link--button">Connexion</button></Link>
              </div>
            )}
          </div>
        </>
      )}

      {isLoading === true && (
        <Loading />
      )}

    </div>
  );
}

export default SpotPage;
