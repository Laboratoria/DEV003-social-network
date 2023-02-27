import { componentes } from '../vistas/components.js';

// eslint-disable-next-line consistent-return
export const changeView =(route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': {
      return container.appendChild(componentes.home());
    }
    case '#/iniciar': {
      return container.appendChild(componentes.home());
    }
    case '#/registro': {
      return container.appendChild(componentes.registro());
    }
    default:
      break;
  }
  console.log(route);

};

