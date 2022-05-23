// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { Link } from 'react-router-dom';
// import ext
import PropTypes from 'prop-types';
// == Import : local
import ohisseIcon from './icon';

// styles
import { popupContent, popupHead } from './popupStyles';
import './homemap.scss';

function HomeMap({ spots }) {
  // console.log(spots);
  return (
    <MapContainer center={[46.7, 2]} zoom={5} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((item) => (
        <Marker key={item.id} position={[item.longitude, item.latitude]} icon={ohisseIcon}>
          <Popup minWidth={170} maxWidth={170}>
            <div className="map-popup" style={popupContent}>
              <Link to={`/fiche-spot/${item.name}`}>
                <img src={item.picture ? item.picture : 'https://www.montagnes-magazine.com/media/actu/2020/05/jef-willemyns-mluUYXoTotY-unsplash.jpg'} alt={`${item.name}`} />
                <h3 style={popupHead}>{item.name}</h3>
              </Link>
              {item.type} <br />
              {item.discipline}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

HomeMap.propTypes = {
  // spots: PropTypes.arrayOf(
  //   PropTypes.shape({
  //    id: PropTypes.number.isRequired,
  //     longitude: PropTypes.string.isRequired,
  //     latitude: PropTypes.string.isRequired,
  //     picture: PropTypes.string.isRequired,
  //     type: PropTypes.string.isRequired,
  //     discipline: PropTypes.string.isRequired,
  //   }).isRequired,
  // ).isRequired,
  spots: PropTypes.array.isRequired,
};

export default HomeMap;
