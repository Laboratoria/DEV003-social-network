
 // formulario de datos a solicitud para registrace  registrarse
 export default () => {
    const registro = `
    <div>
     <header>
      <h1>ANIMAL LOVERS</h1>
     </header>
     <div class="imagen">
      <img src='imagenes RS/CAMAPAÑA DE VACUNA.jpg' alt="">
     </div>
     <div class="formulario">
      <p>NOMBRES</p>
      <input class="texto"></input>
      <p>APELLIDOS</p>
      <input class="texto"></input>
      <p>CORREO</p>
      <input class="texto"></input>
      <p>CONTRASEÑA</p>
      <input class="texto"></input>
     </div>
     <div> 
     <button name="favorito" type="button">REGISTRARSE</button>
    
     </div>
    </div>
    `;
  
    const divElement = document.createElement("div");
  //   divElement.classlist.add("position")
    divElement.innerHTML = registro;
    return divElement;
  };