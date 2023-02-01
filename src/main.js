// Este es el punto de entrada de tu aplicacion

import './lib/firebase-app';

import { myFunction } from './lib/index.js';

import { authController } from './controllers/authController.js';

myFunction();

const init = () => {
  authController(window.location.pathname);
  window.addEventListener('hashchange', () => authController(window.location.pathname));
};

window.addEventListener('load', init);
