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
  signUp('ejemplo@gmail.com', '123456')
    .then((userCredential) => {
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
