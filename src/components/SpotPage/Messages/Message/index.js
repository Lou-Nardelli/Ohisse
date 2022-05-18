import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';
// styles
import './message.scss';

function Message({ pseudo, content }) {
  // const isMine = useSelector((state) => state.currentAuthor === author);

  // on applique toujours la classe message
  // et la classe message-mine seulement si isMine vaut vrai
  // const className = classNames('message', { 'message--mine': isMine });

  return (
    <div className="message">
      <div className="message__author">{pseudo} - le 24/09/1996</div>
      <div className="message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  pseudo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
