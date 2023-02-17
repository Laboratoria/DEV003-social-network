
 // formulario de datos a solicitud para registrace  registrarse
 export default () => {
    const registro = `
    <div>
     <div>
      <h1>ESTE SERA EL TITULO</h1>
     </div>
     <div>
      <img alt='Logo'/>
     </div>
     <div>
      <p>NOMBRES</p>
      <input class="texto"></input>
      <p>APELLIDOS</p>
      <input class="texto"></input>
      <p>CORREO</p>
      <input class="texto"></input>
      <p>CONTRASEÑA</p>
      <input class="texto"></input>
     </div>
     <div> crear boton de registrar </div>
    </div>
    `;
  
    const divElement = document.createElement("div");
  //   divElement.classlist.add("position")
    divElement.innerHTML = registro;
    return divElement;
  };