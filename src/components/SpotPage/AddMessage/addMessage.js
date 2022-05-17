import './addMessage.scss';

function AddMessage() {
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
        // onChange={handleChange}
        // ref={inputRef}
      />
      <button type="submit" className="form__button">Publier</button>
    </form>
  );
}

export default AddMessage;
