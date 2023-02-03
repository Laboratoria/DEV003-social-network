// Este es el punto de entrada de tu aplicacion

import './lib/firebase-app';

import { myFunction, addRouteEvents } from './lib/index.js';

import { authController } from './controllers/authController.js';

myFunction();
addRouteEvents();

const init = () => {
  authController(window.location.pathname);
  window.addEventListener('locationchange', () => authController(window.location.pathname));
};

window.addEventListener('load', init);
