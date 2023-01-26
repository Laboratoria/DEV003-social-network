import { routes } from '../routes/route.js';

const authController = (route) => {
  const container = document.getElementById('main');
  container.innerHTML = '';
  if (route === '/') {
    container.appendChild(routes.login());
  } else if (route === '/register') {
    container.appendChild(routes.register());
  } else if (route === '/cakebook') {
    container.appendChild(routes.cakebook());
  }
  return container;
};

export { authController };
