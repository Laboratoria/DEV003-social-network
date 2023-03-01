import { authIngreso } from '../lib/firebase';

export default () => {
  const viewHome = `
      <header><div class="navbar"><div class="logo">Chile Solidario</div></header>
      <h1 class="llamado" > Ingresa a nuestra comunidad</h1>
      <h2 class="bajada" > Red social de colaboración, comunica tus necesidades o tu capacidad de ayudar a los damnificados</h2>
      <form id="formInicio" class="formInicio">
      <div class="formContainer">
      <h3>Bienvenidos</h3>
      <div class="formGroup">
      <input type="text" id="email2" placeholder="Email"></div>
      <div class="formGroup">
      <input type="password" id="password2" placeholder="Contraseña" required></div>     
      <button id="initialize" class="inicioSesion" type="submit">INICIAR SESION</button>
      <p>¿No tienes una cuenta?  <a href="#/register" class="rojo">Regístrate</a></p></div>        
      </form>`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;

  const formInicio = divElemt.querySelector('#initialize');
  formInicio.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(formInicio, 'Hola');
    const email = document.querySelector('#email2').value;
    const password = document.querySelector('#password2').value;
    console.log(email, 'email');
    console.log(password, 'password');
    authIngreso(email, password);
  });
  //console.log(divElemt);
  return divElemt;
};
