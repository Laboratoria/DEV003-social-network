// import { onNavigate } from '../main.js';
import { signUp as signUpFirebase } from '../lib-firebase';

export const signUp = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonSignUp = document.createElement('button');
  buttonSignUp.id = 'signUpBtn';
  const buttonLogIn = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  buttonSignUp.textContent = 'Crea una cuenta';
  buttonLogIn.textContent = 'Inicia Sesión';
  title.textContent = 'SIGN UP';

  buttonSignUp.addEventListener('click', () => {
    console.log('registrate');
    signUpFirebase('ejemplo@gmail.com', '123456') // data para probar si está leyendo los datos
      .then((userCredential) => { // de acá para abajo es código copiado de la pag de firebase
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // onNavigate('/login');
  });

  div.append(title, inputEmail, inputPass, buttonSignUp, buttonLogIn);

  return div;
};

// export const signUp = `
// <section>
//     <img src="img/logo mapa de bits.png" alt="logo de la aplicación">
//     <form>
//       <h3>SIGN UP</h3>
//       <div>
//         <label>Nombre de usuario</label>
//         <input type="text">
//         <br><br>
//         <label>Correo eletrónico</label>
//         <input type="text">
//         <br><br>
//         <label>Contraseña</label>
//         <input type="text">
//         <br><br>

//         <div class="linea"></div>
//         <hr class="featurette-divider">
//         <button class="google"></button>
//       </div>
//     </form>

//     <button class="enter"></button>
//     <div>
//       <p>¿Ya tienes una cuenta?</p>
//       <a href="#">Inicia sesión acá.</a>
//     </div>
//   </section>
// `;
