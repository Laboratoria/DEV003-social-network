// Este es el punto de entrada de Beat!
import { routes } from './router/routes';

const root = document.getElementById('root');

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
