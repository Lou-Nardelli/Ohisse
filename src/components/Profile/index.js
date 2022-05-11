// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card';

// styles
import { popupContent, popupHead } from './popupStyles';
import './profile.scss';
import ohisseIcon from './icon';

// == Composant
function Profile() {
  const listSpots = useSelector((state) => state.spots.listSpots);

  return (
    <div className="profile">
      {/* Informations about the user */}
      <div className="profile__header">
        <img className="profile__header--picture" src="https://media-exp1.licdn.com/dms/image/C4E03AQHPgEEauP688A/profile-displayphoto-shrink_800_800/0/1614604415420?e=1657756800&v=beta&t=PzI--5McIbwdTFry7zoClStK3AgzMjMlZ4Cyt_pc6EI" alt="profile_picture" />
        <div className="profile__header--informations">
          <h1>Coco l'Asticot</h1>
          <h2>Bayonne</h2>
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nemo labnderit? Deleniti perferendis ex soluta
          </p>
        </div>
      </div>
      <hr />
      {/* List of favorites spots */}
      <div className="section">
        <section className="section-favorites">
          <div className="profile__favorites">
            <h1 className="profile__favorites--title">Mes favoris</h1>
            <div className="profile__favorites--cards">
              {listSpots.map((item) => (
                <>
                  <Link key={item.id} to="">
                    <Card
                      name={item.name}
                      city={item.city}
                      picture={item.picture}
                      className="card cardLittle"
                    />
                  </Link>
                  <Link key={item.id} to="">
                    <Card
                      name={item.name}
                      city={item.city}
                      picture={item.picture}
                      className="card cardLittle"
                    />
                  </Link>
                  <Link key={item.id} to="">
                    <Card
                      name={item.name}
                      city={item.city}
                      picture={item.picture}
                      className="card cardLittle"
                    />
                  </Link>
                </>
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
              {listSpots.map((item) => (
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
