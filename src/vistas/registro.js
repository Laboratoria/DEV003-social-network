
 // formulario de datos a solicitud para registrace  registrarse
 export default () => {
    const registro = `
      <h2 class="texto-center">¡Bienvenido a nuestra página!</h2>
      <input class="texto">Nombres </input>
      <input class="texto">Apellidos </input>` 
  
    const divElement = document.createElement("div");
  //   divElement.classlist.add("position")
    divElement.innerHTML = registro;
    return divElement;
  };