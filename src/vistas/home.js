// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const home = `
  <header>
      <h1>ANIMAL LOVERS</h1>
  </header>
  <h2 class="texto-center">Vets Vetwork</h2>

  <div class="logo">
    <img src="imagenes RS/imagen logo 2.jpg" alt="">
  </div>`

  const divElement = document.createElement("div");
//   divElement.classlist.add("position")
  divElement.innerHTML = home;
  return divElement;
};

// iniciar sesion o logear