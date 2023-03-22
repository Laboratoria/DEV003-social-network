import { authCorreo } from '../lib/functionFirebase';
// formulario de datos a solicitud para registrace  registrarse
export default () => {
  const registro = `
    <header></header>
    <nav>
    <h1>ANIMAL LOVERS</h1>
    </nav>
    <div class="cajaPrincipal">
      <div class="logo">
      <img src="../imagenes RS/logo final1.png" id="logo">
     </div>
     <div class="formulario">
      <input class="texto"></input>
      <input class="texto"></input>
      <input class="texto" id="email"></input>
      <input class="texto" id="contraseña"></input>
      </div> 
      <div class="datos">
      <p>NOMBRES</p>
      <p>APELLIDOS</p>
      <p>CORREO</p>
      <p>CONTRASEÑA</p>
      </div>
     <div> 
     <a href="#/login"type="button"  id="botonRegis">REGISTRAR</a>
    </div>   
    `;
  const headerElement = document.createElement('header');
  const navElement = document.createElement('nav');
  const divElement = document.createElement('div');
  headerElement.innerHTML = registro;
  navElement.innerHTML = registro;
  divElement.innerHTML = registro;

  const botonRegistro = divElement.querySelector('#botonRegis');
  botonRegistro.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#contraseña').value;
    // console.log(email, 'email');
    // console.log(contraseña, 'contraseña');
    authCorreo(email, contraseña).then((userCredential) => {
      // Signed in
      window.location.hash = '#/muro';
      const user = userCredential.user;
      // console.log(user);
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
      });
  });
  return divElement;
};
