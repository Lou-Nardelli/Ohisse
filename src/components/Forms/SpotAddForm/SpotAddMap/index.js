// == Import : npm
import {
  MapContainer, TileLayer, Marker, useMapEvents,
} from 'react-leaflet';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ext
// import PropTypes from 'prop-types';
// == Import : local
// import spots from 'src/localData/data';
import ohisseIcon from './icon';

// styles
// import { popupContent, popupHead } from './popupStyles';
import './spotaddmap.scss';
import { recoverLatLng } from '../../../../actions/spots';

function SpotAddMap({ spots }) {
  const inputLat = useSelector((state) => state.spots.inputLat);
  const inputLng = useSelector((state) => state.spots.inputLng);
  // Events
  function HandleClickMap() {
    const dispatch = useDispatch();
    const map = useMapEvents({
      click(event) {
        // console.log(event.latlng);
        dispatch(recoverLatLng(event.latlng));
      },
    });

    return null;
  }
  return (
    <>
      <label htmlFor="city">Latitude
        <input
          type="text"
          name="city"
          className="spotin__form-input"
          placeholder="Cliquez sur la carte"
          value={inputLat}
          readOnly
          required
        />
      </label>
      <label htmlFor="city">Longitude
        <input
          type="text"
          name="city"
          className="spotin__form-input"
          placeholder="Cliquez sur la carte"
          value={inputLng}
          readOnly
          required
        />
      </label>
      <MapContainer center={[46.7, 2]} zoom={5} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HandleClickMap />
        <Marker position={[inputLat, inputLng]} icon={ohisseIcon} />
      </MapContainer>
    </>
  );
}

export default SpotAddMap;
