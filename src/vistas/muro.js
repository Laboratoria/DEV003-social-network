import { post, publicacionesPost, eliminarPost } from '../lib/functionFirebase';
export default () => {
  const muro = `
    <header></header>
    <nav>
    <h1>ANIMAL LOVERS</h1>
    </nav>
     <div class="comentario"></div>
     <div class="cajaMuro">
     <input class="texto" id="publicaciones1"></input>
     <button type="button"  id="botonP">PUBLICAR</button>
     <div class="cajaPublicaciones">
     </div>
     </div>
    `;
  const headerElement = document.createElement('header');
  const navElement = document.createElement('nav');
  const divElement = document.createElement('div');
  headerElement.innerHTML = muro;
  navElement.innerHTML = muro;
  divElement.innerHTML = muro;

  const botonAñadir = divElement.querySelector('#botonP');
  botonAñadir.addEventListener('click', () => {
    const publicar = document.querySelector('#publicaciones1').value;
    post(publicar);
  });

  publicacionesPost().then((posteos) => {
    posteos.forEach((elemento) => {
      const caja = divElement.querySelector('.cajaPublicaciones');
      caja.innerHTML += `
        <div class="contenido">
        <p>${elemento.contenido}</p>
        </div>
        <button type="button"  id="botonE"(${elemento.contenido})>ELIMINAR</button>
        `;
    });

    const botonEliminar = divElement.querySelector("#botonE");
    botonEliminar.addEventListener("click", () => {});

    console.log(eliminarPost, "hola Juana");
  });

  return divElement;
};
