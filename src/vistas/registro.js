//import { authCorreo } from '../lib/functionFireba';

// import { authCorreo } from '../lib/functionFireba';

// formulario de datos a solicitud para registrace  registrarse
export default () => {
  const registro = `
    <div class="cajaPrincipal">
     <header>
      <h1>ANIMAL LOVERS</h1>
       <div class="logo">
      <img src="../imagenes RS/logo final1.png" id="logo">
     </div>
     </header>
     </nav>
     <div class="formulario">
      <p>NOMBRES</p>
      <input class="texto"></input>
      <p>APELLIDOS</p>
      <input class="texto"></input>
      <p>CORREO</p>
      <input class="texto" id="email"></input>
      <p>CONTRASEÑA</p>
      <input class="texto" id="contraseña"></input>
     </div>
     <div> 
     <button type="button"  id="boton">REGISTRAR</button>
     </div>
    </div>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = registro;

  const botonRegistro = divElement.querySelector('#boton');
  botonRegistro.addEventListener('click', () => {
    console.log(botonRegistro,'boton');
  

  const email = document.querySelector('#email').value;
  const contraseña = document.querySelector('#contraseña').value;
 console.log(email,"email..")
 console.log(contraseña,"contraseña")

  

});

  return divElement;
};


  