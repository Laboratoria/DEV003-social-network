import { components } from '../sections/index.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';

  switch (route) {
    case '#/':
    { return container.appendChild(components.Home()); }
    case '#/album':
    { return container.appendChild(components.Álbum()); }
    case '#/artists':
    { return container.appendChild(components.Artistas()); }

    default:
      break;
  }
  console.log(route);
};
