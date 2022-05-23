import ohisseLogo from 'src/assets/img/logo-loading.png';
// styles
import './loading.scss';

function Loading() {
  return (
    <div className="loading">
      <p className="loading__message"> Quelques instants s'il vous plaît </p>
      <img src={ohisseLogo} alt="ohisseLogo" className="loading__logo" />
    </div>
  );
}

export default Loading;
