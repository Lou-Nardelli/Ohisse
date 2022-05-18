import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from './Message';

// styles
import './messages.scss';

function Messages() {
  const { currentComments } = useSelector((state) => state.comments);
  const { isLogged } = useSelector((state) => state.user);

  if (currentComments.length === 0 && isLogged) {
    return (
      <div className="messages messages__empty">
        <p>Aucun message n'a été posté pour le moment. Soyez le premier !</p>
      </div>
    );
  }

  return (
    <div className="messages">
      {isLogged && (
      <div className="messages__form">
        {currentComments.map(
          (message) => <Message key={message.id} {...message} />,
        )}
      </div>
      )}
      {!isLogged && (
        <div className="messages__empty">
          <p>Vous devez être connecté pour commenter ! <Link className="messages__empty--connexion" to="/connexion">Se connecter</Link></p>
        </div>
      )}
    </div>
  );
}

export default Messages;
