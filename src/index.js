// // == Import : npm
// import { render } from 'react-dom';

// // == Import : local
// // Composants
// import App from 'src/components/App';

// // == Render
// // 1. Élément React racine (celui qui contient l'ensemble de l'app)
// //    => crée une structure d'objets imbriqués (DOM virtuel)
// const rootReactElement = <App />;
// // 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
// const target = document.getElementById('root');
// // 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
// render(rootReactElement, target);

import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Ohisse from 'src/components/Ohisse';
import store from 'src/store';

// console.log(store.getState());

const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <Ohisse />
    </Provider>
  </BrowserRouter>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
