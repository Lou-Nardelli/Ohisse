import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  changeField, confirmPassword, registerUser,
} from '../../../actions/user';
// styles
import './registerForm.scss';

function RegisterForm() {
  const dispatch = useDispatch();

  const {
    inputPseudo,
    inputFirstname,
    inputLastname,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    inputCity,
    inputCountry,
    isError,
    isRegister,
  } = useSelector((state) => state.user);

  const handleChangeField = (value, name) => {
    // console.log(value);
    // console.log(name);
    dispatch(changeField(value, name));
    dispatch(confirmPassword(value));
  };

  // handle to submit form (register user)
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('i submit the form');
    dispatch(registerUser());
  };

  return (
    <div className="registerForm">
      <h1 className="registerForm__title">Créez un compte
      </h1>

      <form className="registerForm__form" onSubmit={handleSubmit}>
        <input className="registerForm__input" type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value={inputPseudo} required onChange={(event) => handleChangeField(event.target.value, 'inputPseudo')} />
        <input className="registerForm__input" type="text" name="lastname" id="lastname" placeholder="Nom" value={inputLastname} onChange={(event) => handleChangeField(event.target.value, 'inputLastname')} />
        <input className="registerForm__input" type="text" name="firstname" id="firstname" placeholder="Prénom" value={inputFirstname} onChange={(event) => handleChangeField(event.target.value, 'inputFirstname')} />
        <input className="registerForm__input" type="email" name="email" id="email" placeholder="E-mail" required value={inputEmail} onChange={(event) => handleChangeField(event.target.value, 'inputEmail')} />
        <input className="registerForm__input" type="text" name="city" id="city" placeholder="Ville" required value={inputCity} onChange={(event) => handleChangeField(event.target.value, 'inputCity')} />
        <input className="registerForm__input" type="text" name="country" id="country" placeholder="Pays" required value={inputCountry} onChange={(event) => handleChangeField(event.target.value, 'inputCountry')} />
        <input className="registerForm__input" type="password" name="password" id="password" placeholder="Mot de passe" required value={inputPassword} onChange={(event) => handleChangeField(event.target.value, 'inputPassword')} />
        <span>
          {isError === true && (<p className="registerForm__input--error">Le mot de passe n'est pas identique</p>) }
          <input className="registerForm__input" type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmation mot de passe" required value={inputConfirmPassword} onChange={(event) => handleChangeField(event.target.value, 'inputConfirmPassword')} />
        </span>

        <button className="registerForm__button" type="submit"> Créer un nouveau compte </button>
      </form>
      {isRegister === true && (
        <Link to="/connexion">
          <p className="registerForm__message">Compte enregistré, veuillez vous connecter</p>
        </Link>
      )}

    </div>
  );
}

export default RegisterForm;
