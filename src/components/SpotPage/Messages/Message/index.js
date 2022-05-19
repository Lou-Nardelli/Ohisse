// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// styles
import { deleteComment } from 'src/actions/comments';
import './message.scss';

function Message({
  pseudo, content, updated_at, id,
}) {
  const dispatch = useDispatch();
  // const isMine = useSelector((state) => state.currentAuthor === author);

  // on applique toujours la classe message
  // et la classe message-mine seulement si isMine vaut vrai
  // const className = classNames('message', { 'message--mine': isMine });

  // Function toggled on click on link to remove comment
  function handleDeleteMessage() {
    // console.log(id);
    dispatch(deleteComment(id));
  }

  // formatting datetime as DD/MM/YYY
  const dateFormat = Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const hourFormat = Intl.DateTimeFormat('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="message">
      <div className="message__author"><span>{pseudo} - {dateFormat.format(Date.parse(updated_at))} à {hourFormat.format(Date.parse(updated_at))}</span> <button className="trash" onClick={handleDeleteMessage} type="button">Supprimer mon commentaire 🗑</button></div>
      <div className="message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  pseudo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Message;
