import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// styles
import './logginForm.scss';
import { changeField, loggin } from '../../../actions/user';

function LogginForm() {
  // to modify the state
  const dispatch = useDispatch();
  // to use the state
  const inputEmailValue = useSelector((state) => state.user.inputEmail);
  const inputPasswordValue = useSelector((state) => state.user.inputPassword);

  // onChange we modify the state (user.inputPassword and use.inputEmail)
  // to make this component controlled in writing
  const handleChangeField = (value, name) => {
    // console.log(value);
    // console.log(name);
    dispatch(changeField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('i call api to connect');
    dispatch(loggin());
  };

  return (
    <div className="logginForm">
      <h2 className="logginForm__title"> Welcome back !</h2>
      <p className="logginForm__message"> Connectez-vous pour partager de nouveaux spots,
        échanger avec la communauté des grimpeurs O'Hisse,
        sauvegardez vos spots favoris
      </p>
      <form action="submit" className="logginForm__form" onSubmit={handleSubmit}>
        <input className="logginForm__input" type="email" name="email" id="email" placeholder="E-mail" value={inputEmailValue} onChange={(event) => handleChangeField(event.target.value, 'inputEmail')} />
        <input className="logginForm__input" type="password" name="password" id="password" placeholder="Mot de passe" value={inputPasswordValue} onChange={(event) => handleChangeField(event.target.value, 'inputPassword')} />
        <button className="logginForm__button" type="submit"> Se connecter </button>
      </form>
      <p className="logginForm__inscription inscription__message"> Vous n'avez pas encore de compte ? </p>
      <Link className="logginForm__inscription inscription__link" to="/inscription"> Créez un nouveau compte </Link>

    </div>
  );
}

export default LogginForm;
