import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';
// styles
import './message.scss';

function Message({ pseudo, content, updated_at }) {
  // const isMine = useSelector((state) => state.currentAuthor === author);

  // on applique toujours la classe message
  // et la classe message-mine seulement si isMine vaut vrai
  // const className = classNames('message', { 'message--mine': isMine });

  const dateFormat = Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="message">
      <div className="message__author">{pseudo} - {dateFormat.format(Date.parse(updated_at))}</div>
      <div className="message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  pseudo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
};

export default Message;
