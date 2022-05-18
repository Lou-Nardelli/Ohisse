import { useDispatch, useSelector } from 'react-redux';
import { changeValue, sendMessageToServer } from '../../../actions/comments';
import './addMessage.scss';

function AddMessage() {
  const dispatch = useDispatch();
  const messageValue = useSelector((state) => state.comments.newMessageContent);

  const handleChange = (evt) => {
    dispatch(changeValue(evt.currentTarget.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('i submit');

    dispatch(sendMessageToServer());
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form__input"
        placeholder="Saisissez votre message..."
        value={messageValue}
        onChange={handleChange}
        // ref={inputRef}
      />
      <button type="submit" className="form__button">&gt;</button>
    </form>
  );
}

export default AddMessage;
