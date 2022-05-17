import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useSelector } from 'react-redux';
// styles
import './message.scss';

function Message({ author, content }) {
  const isMine = useSelector((state) => state.currentAuthor === author);

  // on applique toujours la classe message
  // et la classe message-mine seulement si isMine vaut vrai
  const className = classNames('message', { 'message--mine': isMine });

  return (
    <div className={className}>
      <div className="message__author">{author}</div>
      <div className="message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
