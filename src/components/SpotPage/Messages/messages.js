// import { useSelector } from 'react-redux';
// import Message from '../Message/message';

// styles
import './messages.scss';

function Messages() {
  // const messages = useSelector((state) => state.messages);

  // console.log(messages);

  return (
    <div className="messages">
      {/* {
        messages.map(
          // on déverse l'ensemble des propriétés de message
          // en tant que props de Message
          (message) => <Message key={message.id} {...message} />,
        )
      } */}
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </div>
  );
}

export default Messages;
