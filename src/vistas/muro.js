import { post, publicacionesPost, eliminarPost } from '../lib/functionFirebase';

export default () => {
  const muro = `
    <header>
      <nav>
        <h1>ANIMAL LOVERS</h1>
      </nav>
    </header>
     <div class="cajaMuro">
     <input class="texto" id="publicaciones1"></input>
     <button type="button"  id="botonP">PUBLICAR</button>
     <div class="cajaPublicaciones">
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
        <p>${elemento.contenido}</p>
        <button class="delete"  data-id="${elemento.id}" type="button"  id="botonE">ELIMINAR</button>
        </div>
        
        `;
        console.log(caja, 'contenido');
      })

    const botonEliminar = divElement.querySelectorAll('.delete');
    botonEliminar.forEach((elemento) => {
      elemento.addEventListener('click',({target:{dataset}}) => {
        eliminarPost(dataset.id); 
       // console.log(eliminarPost);

    })
    })
  });

  return divElement;
};
