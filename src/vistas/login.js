import { authSesion } from '../lib/functionFirebase';
// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const login = `
  <header>
    <nav>
     <h1 class="titulo">ANIMAL LOVERS</h1>
    </nav>
  </header>
  <div class="cajaLogin">
     <div class="logo">
     <img src="../imagenes RS/logo final1.png" id="logo">
   </div>
   <div class="datos" >
      <input class="datoLogin" id="email1"></input>
      <input class="datoLogin" id="contraseña1" placeholder="**********"></input>
   </div>
   <div class="Login">
      <p class="formularioLogin">CORREO</p>
      <p class="formularioLogin">CONTRASEÑA</p>
    </div>

      <input class="texto" type="chekbox"  id="vercontraseña" onclick="myFuction()">Ver Contrseña<br>
    <div class="botones"> 
      <a href="#/muro" type="button"  id="botonInic">INICIAR SESION</a>
     <a href="#/registro" type="button"  id="botonCrear">CREAR CUENTA</a>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = login;

  //   divElement.classlist.add("position")
  divElement.innerHTML = login;
  // buttonInicicar.addEventListener("click",())
  const botonIngreso = divElement.querySelector('#botonInic');
  botonIngreso.addEventListener('click', () => {
    const email = document.querySelector('#email1').value;
    const contraseña = document.querySelector('#contraseña1').value;
    // console.log(email, 'email');
    // console.log(contraseña, 'contraseña');
    authSesion(email, contraseña);
    const expresionContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ])+$/;
    const valid = expresionContraseña.test(email);
    if (valid === true) {
    } else {
      alert(' contraseña no valida');
    }
  });

  return divElement;
};
