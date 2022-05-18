import { useSelector } from 'react-redux';
import Message from './Message';

// styles
import './messages.scss';

function Messages() {
  const { currentComments } = useSelector((state) => state.comments);

  // console.log(currentComments);

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
