// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const home = `
  <header>
      <h1>ANIMAL LOVERS</h1>
  </header>
   <h2 class="texto-center">Vets Vetwork</h2>
 <div class="logo">
    <img src='../imagenes RS/logo final1.png' alt=''>
  </div>
  <nav class='imagen'>

</nav>
<p>CORREO</p>
<input class="texto"></input>
<p>CONTRASEÑA</p>
<input class="texto"></input>
</div>
<div> 
<button name="favorito" type="button">ENTRAR</button>
</div>
`;

  const divElement = document.createElement('div');
  //   divElement.classlist.add("position")
  divElement.innerHTML = home;
  return divElement;

  // buttonInicicar.addEventListener("click",())
};
