import { post, publicacionesPost, eliminarPost } from '../lib/functionFirebase';

export default () => {
  const muro = `
    <header>
      <nav>
        <h1 class="titulo">ANIMAL LOVERS</h1>
      </nav>
    </header>
    <di class="cajaMuroC">
     <div class="cajaMuro">
      <input class="texto" id="publicaciones1"></input>
      
      <div button>
      <button type="button"  id="botonP">PUBLICAR</button>
      </div>
     
      <div class="cajaPublicaciones">
     </div>

     </div>
     </div>
     
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = muro;

  const botonPublicar = divElement.querySelector('#botonP');
  botonPublicar.addEventListener('click', () => {
    const publicar = document.querySelector('#publicaciones1').value;
    post(publicar);
  });

  publicacionesPost().then((posteos) => {
    posteos.forEach((elemento) => {
      // console.log(elemento.id,'id')
      const caja = divElement.querySelector('.cajaPublicaciones');
      caja.innerHTML += `
        <div class="contenido">
          <p class="coleccion">${elemento.contenido}</p>
        <button class="delete"  data-id="${elemento.id}" type="button"  id="botonE">
        </button>
        </div> 
        `;
    //  console.log(caja, 'contenido');
    });

    const botonEliminar = divElement.querySelectorAll('.delete');
    botonEliminar.forEach((elemento) => {
      elemento.addEventListener('click', ({ target: { dataset } }) => {
       eliminarPost(dataset.id);
       
       
       console.log(dataset.id);
      });
    });
  //   const botonEdi = divElement.querySelectorAll('.editar');
  //   botonEdi.forEach((elemento) => {
  //     elemento.addEventListener('click', ({ target: { dataset } }) => {
  //       console.log(dataset.id);
  //       // console.log(eliminarPost);
  //     });
  //   });

});

  return divElement;
};