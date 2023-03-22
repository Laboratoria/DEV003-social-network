import { componentes } from '../vistas/components.js';

// eslint-disable-next-line consistent-return
export const changeView = (hash) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '/':
    case '#/login': {
      return container.appendChild(componentes.login());
    }
    case '#/registro': {
      return container.appendChild(componentes.registro());
    }
    case '#/muro': {
      return container.appendChild(componentes.muro());
    }
    default:
      break;
  }
  // console.log(hash);
};
