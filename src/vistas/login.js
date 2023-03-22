import { authSesion } from '../lib/functionFirebase';
// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const login = `
  <header></header>
  <nav>
  <h1>ANIMAL LOVERS</h1>
  </nav>
  <div class="cajaPrincipal">
    <div class="logo">
    <img src="../imagenes RS/logo final1.png" id="logo">
   </div>
   <div class="formulario">
    <p>CORREO</p>
    <input class="texto" id="email1"></input>
    <p>CONTRASEÑA</p>
    <input class="texto" id="contraseña1" placeholder="**********"></input>
    <input type="chekbox"  id="vercontraseña" onclick="myFuction()">Ver Contrseña<br>
    </div>
   <div class="botones"> 
   <a href="#/muro" type="button"  id="botonInic">INICIAR SESION</a>
   <a href="#/registro" type="button"  id="botonCrear">CREAR CUENTA</a>
   </div>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = login;

  //   divElement.classlist.add("position")
  divElement.innerHTML = login;
  // buttonInicicar.addEventListener("click",())
  const botonIngreso = divElement.querySelector('#botonInic');
  const botonCrear = divElement.querySelector('#botonCrear');
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
      alert('correo no valido')
    }
  });

  return divElement;
};
