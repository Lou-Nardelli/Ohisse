import { useSelector } from 'react-redux';
import Message from './Message';

// styles
import './messages.scss';

function Messages() {
  const { currentComments } = useSelector((state) => state.comments);

  if (currentComments.length === 0) {
    return (
      <div className="empty-messages">
        <p>Aucun message n'a été posté pour le moment. Soyez le premier !</p>
      </div>
    );
  }

  return (
    <div className="messages">
      {
        currentComments.map(
          (message) => <Message key={message.id} {...message} />,
        )
      }
    </div>
  );
}

export default Messages;
