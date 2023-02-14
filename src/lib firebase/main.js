import { signUp } from './index.js';

const signUpButton = document.getElementById('signUpBtn');

signUpButton.addEventListener('click', () => {
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