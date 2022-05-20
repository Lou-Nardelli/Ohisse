// == Import : npm
import './popup.scss';

// == Composant
function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup__message">
        Vous devez être connecté pour ajouter un favori
        <button type="button" onClick={() => props.setTrigger(false)}>x</button>
        { props.children }
      </div>
    </div>
  ) : '';
}

// == Export
export default Popup;
