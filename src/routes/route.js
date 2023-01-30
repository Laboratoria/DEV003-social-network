import cakebook, { init as initCakebook } from '../view/cakebook.js';

import register, { init as initRegister } from '../view/register.js';

import login, { init as initLogin } from '../view/login.js';

const routes = {
  login: { view: login, init: initLogin },
  cakebook: { view: cakebook, init: initCakebook },
  register: { view: register, init: initRegister },
};

export { routes };
