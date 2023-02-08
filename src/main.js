// Este es el punto de entrada de Beat!
import { changeView } from './section_controller/index.js';
import { signUp } from './lib/index.js';

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);

const botonGoogle = document.getElementById('google');

botonGoogle.addEventListener('click', () => {
  console.log('registrate');
  signUp('ejemplo@gmail.com', '123456') //data para probar si está leyendo los datos
    .then((userCredential) => { //de acá para abajo es código copiado de la pag de firebase
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
