// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
// import ext
import PropTypes from 'prop-types';
// == Import : local
import ohisseIcon from './icon';
// import spots from 'src/localData/data';

// styles
import { popupContent, popupHead } from './popupStyles';
import './homemap.scss';

function HomeMap({ spots }) {
  console.log(spots);
  return (
    <MapContainer center={[46.7, 2]} zoom={5} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((item) => (
        <Marker key={item.id} position={[item.longitude, item.latitude]} icon={ohisseIcon}>
          <Popup>
            <div className="map-popup" style={popupContent}>
              <img src={item.picture ? item.picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhshYwTK1ZujWFb4UJzeLDzywVv6UgWowhA&usqp=CAU'} alt={`${item.name}`} />
              <h3 style={popupHead}>{item.name}</h3>
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
    // PropTypes.shape({
     // id: PropTypes.number.isRequired,
      // longitude: PropTypes.string.isRequired,
      // latitude: PropTypes.string.isRequired,
      // picture: PropTypes.string.isRequired,
      // type: PropTypes.string.isRequired,
      // discipline: PropTypes.string.isRequired,
    // }).isRequired,
  // ).isRequired,
  spots: PropTypes.array.isRequired,
};

export default HomeMap;
