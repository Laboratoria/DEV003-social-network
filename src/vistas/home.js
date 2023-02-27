// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const iniciarSesion = `
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
    <input class="texto" id="email"></input>
    <p>CONTRASEÑA</p>
    <input class="texto" id="contraseña"></input>
   </div>
   <div> 
   <a href="">INICIAR SESION</a>
   <button type="button"  id="boton">INGRESAR</button>
   </div>
  </div>
  `;

  const divElement = document.createElement('div');
  //   divElement.classlist.add("position")
  divElement.innerHTML = iniciarSesion;
  return divElement;

  // buttonInicicar.addEventListener("click",())
};
