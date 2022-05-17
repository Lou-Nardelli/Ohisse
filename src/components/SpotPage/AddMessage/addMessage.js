import { useDispatch } from 'react-redux';
import { sendMessageToServer } from '../../../actions/comments';
import './addMessage.scss';

function AddMessage() {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    // onChange(evt.currentTarget.value);
    console.log(evt.currentTarget.value);
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
        // value={newMessageContent}
        onChange={handleChange}
        // ref={inputRef}
      />
      <button type="submit" className="form__button">&gt;</button>
    </form>
  );
}

export default AddMessage;
