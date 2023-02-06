// Este es el punto de entrada de Beat!
import { changeView } from './section_controller/index.js';

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
