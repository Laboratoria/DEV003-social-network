/* eslint-disable no-alert */
import { getAuth,linkWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default () => {
  const viewRegister = /* html */ `
    <div class="img-container">
      <picture>
        <source media="(max-width: 599px)" srcset="/img/back-login.png" />
        <source media="(min-width: 600px) and (max-width: 1023px)" srcset="/img/back-login-tablet.png" />
        <img src="/img/back-login-desktop.png" alt="" />
      </picture>
    </div>
    <div class= "container1">
    <h1>cakeBook</h1>
    <div class="saludo">
      <span>Regístrate para ver y compartir</span> 
      <span> deliciosas recetas con tus amigos!</span> 
    </div>
    <div class="login-google">
    <button id="btn-google-register"> 
      <div class="login-google">
        <span><img class = "logo" src = "/img/Logo2.png"></span>
        <span class="spn-google">Registrarte con Google</span>
      </div>
    </button>
    </div>
    <form class="form-btn">
      <input class= "input-users" type="email" name="email" id="userEmail" placeholder="Correo electrónico">
      <input class= "input-users" type="text" name="fullName" id="userFullName" placeholder="Nombre y Apellido">
      <input class= "input-users" type="text" name="username" id="username" placeholder="Nombre de Usuario">
      <input class= "input-users" type="password" name="password" id="password"  placeholder="Contraseña">
      <div class="span-politica">
        <span>Al registrarte, aceptas nuestras Condiciones, la </span> 
        <span>Política de privacidad y la Política de cookies.</span>
      </div>
      <button class="log-button" id="register">REGISTRARTE</button> 
    </form>
  </div>
`;
  const linkElement = document.getElementById('link');
  linkElement.setAttribute('href', '/register.css');

  const registerContainer = document.createElement('div');
  registerContainer.classList.add('login-container');
  registerContainer.innerHTML = viewRegister;
  return registerContainer;
};

export const init = () => {
  const form = document.querySelector('.form-btn');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Firebase User', user);
       alert('guardado exitosamente');
       form.reset();
       window.location.href = '/';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        form.reset();
        //errores correo
        if (errorCode === 'auth/missing-email') {
          alert('Por favor, introduce un correo');
        }
        if (errorCode === 'auth/invalid-email') {
          alert('Correo inválido');
        }
        if (errorCode === 'auth/email-already-in-use') {
          alert('Correo ya registrado');
        }
        //errores contraseña
        if (errorCode === 'auth/weak-password') {
          alert(
            'Por favor, introduce una contraseña que contenga más de 6 carácteres'
          );
        }
        if (errorCode === 'auth/internal-error') {
          alert('Por favor, introduce una contraseña');
        }
      });
  });
};
