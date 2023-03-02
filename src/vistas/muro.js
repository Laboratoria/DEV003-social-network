export default () => {
    const muro = `
    <div class="cajaPrincipal">
     <header>
      <h1>ANIMAL LOVERS</h1>
       <div class="comentario"></div>
     </div>
     </header>
     <div class="cajaMuro">
     <input class="texto" id="comentario"></input>
     <button type="button"  id="botonA">PUBLICAR</button>
     <button type="button"  id="botonE">ELIMINAR</button>
     <button type="button"  id="botonC">COMENTAR</button>
    </div>
    </div>
    `;
    const divElement = document.createElement('div');
    //   divElement.classlist.add("position")
    divElement.innerHTML = muro;
    

  const botonAñadir = divElement.querySelector('#botonA');
  botonAñadir.addEventListener('click', () => {
    console.log(botonAñadir);
  })
  const botonEliminar = divElement.querySelector('#botonE');
  botonEliminar.addEventListener('click', () => {
    console.log(botonEliminar);
  })
  const botonComentar = divElement.querySelector('#botonC');
  botonComentar.addEventListener('click', () => {
    console.log(botonComentar);
  })
  return divElement;
  };
  