// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const home = `
    <h2 class="texto-center">¡Bienvenido a nuestra página!</h2>
    <figure class="texto-Center">
    <img class="image" scr="/imagenes RS/CAMAPAÑA DE VACUNA.jpg" alt="Conejo codeando"
    </figure>`

  const divElement = document.createElement("div");
//   divElement.classlist.add("position")
  divElement.innerHTML = home;
  return divElement;
};
