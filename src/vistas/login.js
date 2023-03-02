import {authSesion } from '../lib/functionFirebase';
// formulario para que el usuario ingrese correo y contraseña 15.02

export default () => {
  const login = `
  <div class="cajaPrincipal">
   <header>
    <h1>ANIMAL LOVERS</h1>
     <div class="logo">
    <img src="../imagenes RS/logo final1.png" id="logo">
   </div>
   </header>
   </nav>
   <div class="formulario">
    
    <p>CORREO</p>
    <input class="texto" id="email1"></input>
    <p>CONTRASEÑA</p>
    <input class="texto" id="contraseña1"></input>
   </div>
   <div> 
   <a href="#/muro"type="button"  id="botonI">INICIAR SESION</a>
   <a href="#/registro"type="button"  id="boton">CREAR CUENTA</button>
   </div>
  </div>
  `;

  const divElement = document.createElement('div');
  //   divElement.classlist.add("position")
  divElement.innerHTML = login;
  // buttonInicicar.addEventListener("click",())
  const botonIngreso = divElement.querySelector('#botonI');
  botonIngreso.addEventListener("click", () => {
    const email = document.querySelector("#email1").value;
    const contraseña = document.querySelector('#contraseña1').value;
    console.log(email, 'email');
    console.log(contraseña, 'contraseña');
    authSesion(email, contraseña);
  });

  return divElement;
};
