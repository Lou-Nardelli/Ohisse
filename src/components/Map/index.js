// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { Link } from 'react-router-dom';
// import ext
// import PropTypes from 'prop-types';
// == Import : local
import spots from 'src/localData/data';
import ohisseIcon from './icon';

// styles
import { popupContent, popupHead } from './popupStyles';
import './map.scss';

function Map() {
  return (
    <div className="full-map">
      <MapContainer center={[46.7, 2]} zoom={6} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {spots.map((item) => (
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
  );
}

// Map.propTypes = {
//   spots: PropTypes.array.isRequired,
// };

export default Map;
