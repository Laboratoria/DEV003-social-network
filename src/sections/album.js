export default () => {
  const album = `
  <div id="container">
  <h1>Lista de álbumes</h1>
  <div class="container-album">
    <div id="title-option-album">Álbumes</div>
      <div id="item-album">
        <img id="img-album" >
        <label>Nombre </label>
        

      </div>
  </div>
</div>

   `;

  const divAlbum = document.createElement('div');
  divAlbum.innerHTML = album;

  return divAlbum;
};
