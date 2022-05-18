// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Card from '../Card';

// styles
import { popupContent, popupHead } from './popupStyles';
import './profile.scss';
import ohisseIcon from './icon';
import Loading from '../Loading';
import {
  changeCurrentuserField, changeEditStatus, changeField, updateUser, saveUser,
} from '../../actions/user';
// == Composant
function Profile() {
  const { favorites } = useSelector((state) => state.user);
  // console.log(favorites);
  const listSpots = useSelector((state) => state.spots.listSpots);
  // console.log(listSpots);
  const currentUser = useSelector((state) => state.user.currentUser);
  // console.log(currentUser);
  const isLoading = useSelector((state) => state.user.isLoading);

  const listSpotFav = favorites.map((item) => {
    const fav = listSpots.find((itemList) => itemList.id === item);
    return fav;
  });

  const dispatch = useDispatch();
  // const inputEmail = useSelector((state) => state.user.inputEmail);
  // const inputPseudo = useSelector((state) => state.user.inputPseudo);
  // const inputFirstname = useSelector((state) => state.user.inputFirstname);
  // const inputLastname = useSelector((state) => state.user.inputLastname);
  // const inputDescription = useSelector((state) => state.user.inputDescription);
  const isEditing = useSelector((state) => state.user.isEditing);

  if (currentUser.description === null) {
    currentUser.description = "Ma description n'est pas encore remplie, mais je procrastine encore un peu avant de m'y mettre !";
  }

  // console.log(listSpotFav);

  // if (listSpotFav[0] === undefined) {
  //   console.log('indéfini');
  //   return (<Navigate to="/" replace />);
  // }

  function handleKeyDown(event, type) {
    dispatch(changeCurrentuserField(event, type));
    // console.log(`on tape ${event} dans ${type}`);
    // console.log(event);
  }

  function handleEditSwitch() {
    dispatch(changeEditStatus(!isEditing));
    // console.log('i switch');
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('i submit');
    handleEditSwitch();
    dispatch(updateUser());
  }

  return (
    <div className="profile">
      {/* Informations about the user */}
      {isLoading === false && (
        <>
          <div className="profile__header">
            <img className="profile__header--picture" src="https://media-exp1.licdn.com/dms/image/D5635AQHa2jqlhY57-Q/profile-framedphoto-shrink_800_800/0/1643542347773?e=1652364000&v=beta&t=sm9DmS8opoU9LcZtcwwcWUcH4vgj3U5hChQn3UTAtv4" alt="profile_picture" />
            {/* FORM to edit user's informations */}
            <form onSubmit={handleSubmit}>
              <div className="profile__header--informations">
                <h1>
                  {/* Condition part managing user's firstname */}
                  {
                  isEditing ? (
                    <input
                      className="profile__header--input"
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Votre prénom"
                      value={currentUser.firstname}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'firstname')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.firstname}
                    </span>
                  )
                } {/* Condition part managing user's lastname */}{
                  isEditing ? (
                    <input
                      className="profile__header--input"
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Votre nom"
                      value={currentUser.lastname}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'lastname')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.lastname}
                    </span>
                  )
                } - alias {/* Condition part managing user's nickname */}{
                  isEditing ? (
                    <input
                      className="profile__header--input"
                      type="text"
                      name="pseudo"
                      id="pseudo"
                      placeholder="Votre pseudo"
                      value={currentUser.pseudo}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'pseudo')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.pseudo}
                    </span>
                  )
                }
                </h1>
                <h2>
                  {/* Condition part managing user's city */}
                  {
                  isEditing ? (
                    <input
                      className="profile__header--input"
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Votre ville"
                      value={currentUser.city}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'city')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.city}
                    </span>
                  )
                } - {/* Condition part managing user's country */}{
                  isEditing ? (
                    <input
                      className="profile__header--input"
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Votre pays"
                      value={currentUser.country}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'country')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.country}
                    </span>
                  )
                }
                </h2>

                {/* Condition part managing user's email */}
                {
                  isEditing ? (
                    <input
                      className="profile__header--input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Votre adresse email"
                      value={currentUser.email}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'email')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.email}
                    </span>
                  )
                }

                {/* Condition part managing user's description */}
                <h3>Description</h3>
                {
                  isEditing ? (
                    <textarea
                      className="profile__header--textarea"
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Décrivez vous en quelques mots !"
                      value={currentUser.description}
                      required
                      onChange={
                          (event) => handleKeyDown(event.currentTarget.value, 'description')
                        }
                    />
                  ) : (
                    <span>
                      {currentUser.description}
                    </span>
                  )
                }
              </div>
              {
                isEditing && (
                <button type="submit" className="profile__header--subbutton">Valider les modifications</button>
                )
              }
              {
                !isEditing && (
                  <button type="button" onClick={handleEditSwitch}>Modifier mon profil</button>
                )
              }

            </form>
          </div>
          <hr />
          {/* List of favorites spots */}
          <div className="section">
            <section className="section-favorites">
              <div className="profile__favorites">
                <h1 className="profile__favorites--title">Mes favoris</h1>
                <div className="profile__favorites--cards">
                  {listSpotFav.map((item) => (
                    <Link key={item.id} to={`/fiche-spot/${item.name}`}>
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
                    <Marker
                      key={item.id}
                      position={[item.longitude, item.latitude]}
                      icon={ohisseIcon}
                    >
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
        </>
      )}
      {isLoading === true && (
        <Loading />
      )}

    </div>
  );
}

// == Export
export default Profile;
