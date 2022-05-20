// == Import : npm
import PropTypes from 'prop-types';
import './popup.scss';

// == Composant
function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup__message">
        Vous devez être connecté pour ajouter un favori
        <button type="button" onClick={() => props.setTrigger(false)}>x</button>
      </div>
    </div>
  ) : '';
}

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
};

// == Export
export default Popup;
