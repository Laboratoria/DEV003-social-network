import { routes } from '../routes/route.js';

const authController = (route) => {
  const container = document.getElementById('main');
  container.innerHTML = "";
  if (route === '/') {
    container.appendChild(routes.home());
  } else if (route === '/register') {
    container.appendChild(routes.register());
  }
  return container;
};

export { authController };
