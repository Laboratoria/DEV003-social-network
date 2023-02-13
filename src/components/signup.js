import { onNavigate } from '../main.js';

export const signUp = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonSignUp = document.createElement('button');
  const buttonLogIn = document.createElement('button');

  buttonSignUp.textContent = 'Crea una cuenta';
  buttonLogIn.textContent = 'Inicia Sesión';
  title.textContent = 'SIGN UP';

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/login');
  });

  div.append(title, buttonSignUp, buttonLogIn);

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
