import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../../actions/comments';
import './addMessage.scss';

function AddMessage() {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeValue(evt.currentTarget.value));
  };

  const stateValue = useSelector((state) => state.comments.newMessageContent);
  console.log(stateValue);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  // dispatch(sendMessageToServer());
  // };

  return (
    <form
      className="form"
      // onSubmit={handleSubmit}
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
