import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// styles
import './logginForm.scss';

function LogginForm() {
  const inputEmailValue = useSelector((state) => state.user.inputEmail);
  const inputPasswordValue = useSelector((state) => state.user.inputPassword);
  return (
    <div className="logginForm">
      <h2 className="logginForm__title"> Welcome back !</h2>
      <p className="logginForm__message"> Connectez-vous </p>
      <p className="logginForm__message--desktop">pour partager de nouveaux spots,
        échanger avec la communauté des grimpeurs O'Hisse,
        sauvegardez vos spots favoris
      </p>
      <input className="logginForm__input" type="email" name="email" id="email" placeholder="E-mail" value={inputEmailValue} />
      <input className="logginForm__input" type="password" name="password" id="password" placeholder="Mot de passe" value={inputPasswordValue} />
      <button className="logginForm__button" type="button"> Se connecter </button>
      <p className="logginForm__inscription inscription__message"> Vous n'avez pas encore de compte ? </p>
      <Link className="logginForm__inscription inscription__link" to=""> Créez un nouveau compte </Link>
    </div>
  );
}

export default LogginForm;
