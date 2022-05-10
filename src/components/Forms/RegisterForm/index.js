// styles
import './registerForm.scss';

function RegisterForm() {
  return (
    <div className="registerForm">
      <p className="registerForm__explications">Créez un compte
      </p>
      <form className="registerForm__inputs">
        <input className="registerForm__input" type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo" required />
        <input className="registerForm__input" type="text" name="lastname" id="lastname" placeholder="Nom" />
        <input className="registerForm__input" type="text" name="firstname" id="firstname" placeholder="Prénom" />
        <input className="registerForm__input" type="email" name="email" id="email" placeholder="E-mail" required />
        <input className="registerForm__input" type="text" name="city" id="city" placeholder="Ville" required />
        <input className="registerForm__input" type="text" name="country" id="country" placeholder="Pays" required />
        <input className="registerForm__input" type="password" name="password" id="password" placeholder="Mot de passe" required />
        <input className="registerForm__input" type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmation du mot de passe" required />
        <button className="registerForm__button" type="submit"> Créer un nouveau compte </button>
      </form>

    </div>
  );
}

export default RegisterForm;
