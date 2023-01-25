// Este es el punto de entrada de tu aplicacion

import { app } from './lib/firebase-app';

import { myFunction } from './lib/index.js';

import { authController } from './controllers/authController.js';

myFunction();

console.log(app);

const init = () => {
authController(window.location.pathname);
window.addEventListener('hashchange', () => authController(window.location.pathname));
};

window.addEventListener('load', init);