import { createUser } from '../lib/firebase';

export default () => {
  const register = `
      <div class="navbar"><div class="logo">Chile Solidario</div></div> 
      <form id="form" class="form">
      <div class="formContainer">
      <h3>Bienvenidos</h3>
      <div class="formGroup">
      <input type="text" id="userName" placeholder="Nombre"></div>
      <div class="formGroup">
      <input type="text" id="userEmail" placeholder="Email"></div>
      <div class="formGroup">
      <input type="password" id="registerPassword" placeholder="Contraseña" required></div>     
      <button id="registerButton">Registrate</button>
      </div>
      </form>`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = register;

  const form = divElemt.querySelector('#registerButton');
  form.addEventListener('click', () => {
    // console.log(form, 'Hola');
    const userEmail = document.querySelector('#userEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;
    // console.log(userEmail, 'userEmail');
    // console.log(userEmail, 'registerPassword');

    createUser(userEmail, registerPassword);
  });
  return divElemt;
};
