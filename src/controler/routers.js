import { componentes } from '../vistas/components.js';

export const changeView =(route) => {
  const container = document.getElementById("container")
  container.innerHTML= "";
  switch (route) {
    case "#/animalLovers":{return container.appendChild(componentes.home())}
    case "#/registro":{return container.appendChild(componentes.registro())}
    default:
      break
  }
  console.log(route)
};

