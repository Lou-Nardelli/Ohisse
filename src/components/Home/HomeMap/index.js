// == Import : npm
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// styles
import './homemap.scss';

// This code failed completely, inspired by this tutorial :
// https://leafletjs.com/examples/custom-icons/
// const ohisseIcon = L.icon({
//   iconUrl: 'src/assets/img/logo-simple-bleu.png',
//   iconSize: [50, 64],
// });
// L.marker([48.856575, 2.346690], { icon: ohisseIcon }).addTo(map);

function HomeMap() {
  return (
    <MapContainer center={[48.856575, 2.346690]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.856575, 2.346690]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default HomeMap;
