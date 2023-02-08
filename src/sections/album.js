export default () => {
  const album = `
  <div id="container">
  <h1>Lista de álbumes</h1>
  <div class="container-album">
    <div id="title-option-album">Álbumes</div>
      <div id="item-album">
        <img class="img-album" width="140" height="140"  style="background-color: black;">
        <label>Nombre </label>
        <i class="fa-solid fa-heart"></i>
        <ico> </ico>
        <ico> </ico>

      </div>
  </div>
</div>

   `;

  const divAlbum = document.createElement('div');
  divAlbum.innerHTML = album;

  return divAlbum;
};
