import {
  ssoGoogle,
  newRegister,
  sendVerification,
  userData,
} from '../../firebase/firebase.js';

import { footer } from '../../components/footer.js';

import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateNickname,
} from './signup-validations.js';

import { signupErrorHandler } from './signup-error-handler.js';

import logo from '../../assets/logo.webp';
import loginGoogle from '../../assets/btn_google_signin.png';

export const signup = () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('signup-container');
  viewSignUp.innerHTML = `
        <header>
          <div class="logo-container">
            <img src=${logo} alt="logo" />
            <h1>PURRRFECT BOOKS</h1>
          </div>
        </header>
        
<main>
  <section>
    <div class="container">
        <h2>Regístrate</h2>
       <form id="signup-form">
          <div class="container-item">
            <label class="label-signup" for="signup-email">Correo</label>
            <input type="text" id="signup-email" class="signup-input" placeholder="ejemplo@email.com"/>
            <div class="error-feedback-container" id="email-validation"></div>
          </div>
          <div class="container-item">
            <label class="label-signup" for="signup-password">Contraseña</label>
            <input type="password" id="signup-password" class="signup-input" placeholder="**************" />
            <div class="error-feedback-container" id="password-validation"></div>
          </div>
          <div class="container-item">
            <label class="label-signup" for="signup-confirm-password">Confirmar contraseña</label>
            <input type="password" id="signup-confirm-password" class="signup-input" placeholder="**************"/>
            <div class="error-feedback-container" id="password-confirm-validation"></div>
          </div>
          <div class="container-item">
            <label class="label-signup" for="signup-nickname">Nombre</label>
            <input type="text" id="signup-nickname" class="signup-input" placeholder="ej: Juan"/>
            <div class="error-feedback-container" id="nickname-validation"></div>
          </div>
          <div class="signup-container-btn">
            <button type="submit" id="signup-submit-button" class="signup-btn">
              Regístrar
            </button>
          </div>
       </form>
        <div class="login-google">
          <p>o</p>
          <button type="button" id="login-google" class="login-google-btn">
            <img src=${loginGoogle} alt="logo-google" />
          </button>
        </div>
        <div class="signup-span">
          <span>¿Ya tienes cuenta? <a href="#/login" class="span-btn">Ingresa aquí.</a></span>
        </div>
    </div>
  </section>
</main>
`;
  // GOOGLE LOGIN
  viewSignUp.querySelector('#login-google').addEventListener('click', () => {
    ssoGoogle();
  });

  // REGISTRO
  viewSignUp
    .querySelector('#signup-submit-button')

    .addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        const email = document.querySelector('#signup-email').value;
        const password = document.querySelector('#signup-password').value;
        const passwordConfirm = document.querySelector(
          '#signup-confirm-password',
        ).value;
        const nickname = document.querySelector('#signup-nickname').value;

        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);
        const passwordConfirmIsValid = validateConfirmPassword(password, passwordConfirm);
        const nicknameIsValid = validateNickname(nickname);
        if (
          !emailIsValid
          || !passwordIsValid
          || !passwordConfirmIsValid
          || !nicknameIsValid
        ) {
          return false;
        }
        // se asigna el resultado
        const userCredential = await newRegister(email, password, nickname);
        const user = userCredential.user;
        const userId = user.uid;
        const userEmail = user.email;
        // contiene la informacion de la collecion de usuarios
        userData(userId, userEmail);
        await sendVerification();
        alert('Se envío un enlace de verificación a tu correo');
        window.location.hash = '#/login';
        return true;
      } catch (err) {
        signupErrorHandler(err);
        return false;
      }
    });
  viewSignUp.appendChild(footer());
  return viewSignUp;
};
