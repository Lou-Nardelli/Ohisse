/* eslint-disable global-require */
import L from 'leaflet';

const ohisseIcon = new L.Icon({
  iconUrl: require('src/assets/img/logo-simple-bleu.png'),
  iconSize: [25],
  iconAnchor: [13, 19],
  popupAnchor: [0, -29],
  className: 'leaflet-div-icon',
});

export default ohisseIcon;
