// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Card from '../Card';

// styles
import { popupContent, popupHead } from './popupStyles';
import './profile.scss';
import ohisseIcon from './icon';
// == Composant
function Profile() {
  const { favorites } = useSelector((state) => state.user);
  // console.log(favorites);

  const listSpots = useSelector((state) => state.spots.listSpots);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLogged = useSelector((state) => state.user.isLogged);

  const listSpotFav = favorites.map((item) => {
    const fav = listSpots.find((itemList) => itemList.id === item);
    return fav;
  });

  console.log(listSpotFav);

  if (currentUser.description.length === 0) {
    currentUser.description = "Ma description n'est pas encore remplie, mais je procrastine encore un peu avant de m'y mettre !";
  }

  // if (!isLogged) {
  //   return (<Navigate to="/connexion" replace />);
  // }

  return (
    <div className="profile">
      {/* Informations about the user */}
      <div className="profile__header">
        <img className="profile__header--picture" src="https://media-exp1.licdn.com/dms/image/D5635AQHa2jqlhY57-Q/profile-framedphoto-shrink_800_800/0/1643542347773?e=1652364000&v=beta&t=sm9DmS8opoU9LcZtcwwcWUcH4vgj3U5hChQn3UTAtv4" alt="profile_picture" />
        <div className="profile__header--informations">
          <h1>{currentUser.firstname} {currentUser.lastname} - alias {currentUser.pseudo}</h1>
          <h2>{currentUser.city}</h2>
          <h3>Description</h3>
          <p>{currentUser.description}</p>
        </div>
      </div>
      <hr />
      {/* List of favorites spots */}
      <div className="section">
        <section className="section-favorites">
          <div className="profile__favorites">
            <h1 className="profile__favorites--title">Mes favoris</h1>
            <div className="profile__favorites--cards">
              {listSpotFav.map((item) => (
                <Link key={item.id} to="">
                  <Card
                    name={item.name}
                    city={item.city}
                    picture={item.picture}
                    className="card cardLittle"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* Map of the profile page */}
        <section className="section-map">
          <div className="profile__map">
            <MapContainer center={[46.7, 2]} zoom={6} scrollWheelZoom>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {listSpotFav.map((item) => (
                <Marker key={item.id} position={[item.longitude, item.latitude]} icon={ohisseIcon}>
                  <Popup>
                    <div className="map-popup" style={popupContent}>
                      <Link to={`/fiche-spot/${item.name}`}>
                        <img src={item.picture ? item.picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhshYwTK1ZujWFb4UJzeLDzywVv6UgWowhA&usqp=CAU'} alt={`${item.name}`} />
                        <h3 style={popupHead}>{item.name}</h3>
                      </Link>
                      {item.type} <br />
                      {item.discipline}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
      </div>
    </div>
  );
}

// == Export
export default Profile;
