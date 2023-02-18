// Este es el punto de entrada de tu aplicacion

// import { paginaPrincipal } from './lib/index.js';

// // myFunction();

//RECARGA PARA LA PAGINA
import { changeView } from "./controler/routers.js";
const inicial = () => {
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};
window.addEventListener("load", inicial);
