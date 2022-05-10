import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../../actions/user';
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
    inputValidatePassword,
    inputCity,
    inputCountry,
  } = useSelector((state) => state.user);

  const handleChangeField = (value, name) => {
    // console.log(value);
    // console.log(name);
    dispatch(changeField(value, name));
  };

  return (
    <div className="registerForm">
      <h1 className="registerForm__title">Créez un compte
      </h1>
      <form className="registerForm__form">
        <input className="registerForm__input" type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" value={inputPseudo} required onChange={(event) => handleChangeField(event.target.value, 'inputPseudo')} />
        <input className="registerForm__input" type="text" name="lastname" id="lastname" placeholder="Nom" value={inputLastname} onChange={(event) => handleChangeField(event.target.value, 'inputLastname')} />
        <input className="registerForm__input" type="text" name="firstname" id="firstname" placeholder="Prénom" value={inputFirstname} onChange={(event) => handleChangeField(event.target.value, 'inputFirstname')} />
        <input className="registerForm__input" type="email" name="email" id="email" placeholder="E-mail" required value={inputEmail} onChange={(event) => handleChangeField(event.target.value, 'inputEmail')} />
        <input className="registerForm__input" type="text" name="city" id="city" placeholder="Ville" required value={inputCity} onChange={(event) => handleChangeField(event.target.value, 'inputCity')} />
        <input className="registerForm__input" type="text" name="country" id="country" placeholder="Pays" required value={inputCountry} onChange={(event) => handleChangeField(event.target.value, 'inputCountry')} />
        <input className="registerForm__input" type="password" name="password" id="password" placeholder="Mot de passe" required value={inputPassword} onChange={(event) => handleChangeField(event.target.value, 'inputPassword')} />
        <input className="registerForm__input" type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmation mot de passe" required value={inputValidatePassword} onChange={(event) => handleChangeField(event.target.value, 'inputValidatePassword')} />
        <button className="registerForm__button" type="submit"> Créer un nouveau compte </button>
      </form>

    </div>
  );
}

export default RegisterForm;
