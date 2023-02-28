import { components } from '../view/components.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/register': { return container.appendChild(components.register()); }
    case '#/home': { return container.appendChild(components.home()); }
    case '#/wall': { return container.appendChild(components.wall()); }
    default:
      break;
  }
  return '';
};

export { changeView };
