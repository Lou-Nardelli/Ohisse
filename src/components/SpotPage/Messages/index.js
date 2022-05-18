import { useSelector } from 'react-redux';
import Message from './Message';

// styles
import './messages.scss';

function Messages() {
  const { currentComments } = useSelector((state) => state.comments);

  if (currentComments.length === 0) {
    return (
      <div className="messages messages__empty">
        <p>Aucun message n'a été posté pour le moment. Soyez le premier !</p>
      </div>
    );
  }

  return (
    <div className="messages">
      <div className="messages__form">
        {currentComments.map(
          (message) => <Message key={message.id} {...message} />,
        )}
      </div>
    </div>
  );
}

export default Messages;
