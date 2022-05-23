/* eslint-disable global-require */
import L from 'leaflet';

const ohisseIcon = new L.Icon({
  iconUrl: require('src/assets/img/logo-simple-bleu.png'),
  iconSize: [25],
  iconAnchor: [13, 30],
  popupAnchor: [0, -30],
  className: 'leaflet-div-icon',
});

export default ohisseIcon;
