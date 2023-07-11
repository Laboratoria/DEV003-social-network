import { authCorreo } from '../lib/functionFirebase';
// formulario de datos a solicitud para registrace  registrarse
export default () => {
  const registro = `
    <header>
      <nav>
      </nav>
    </header>
    <div class="cajaRegistro" id="cajaRegistro">
      <div class="logoRegistro">
      <img src="../imagenes RS/portada.webp" id="logoRegistro">
     </div>
      <div class="formularioDatos">
        <p id="correoRegistro">CORREO</p>
         <input class="texto" id="correoRegistro2"></input>
        <p id="contraseñaRegistro">CONTRASEÑA</p>
          <input class="texto" id="contraseñaRegistro2"></input>
      </div> 

     <div class="buttonRegistro"> 
       <a href="#/login"type="button"  id="botonRegis">REGISTRAR</a>
    </div> 
    </div> 
      
    `;

  const divElement = document.createElement('div');
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
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
      });
  });
  return divElement;
};
