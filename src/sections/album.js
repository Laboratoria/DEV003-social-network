export default () => {
  const album = `
   <h1>ALBUM PAGE</h1>
   `;

  const divAlbum = document.createElement('div');
  divAlbum.innerHTML = album;

  return divAlbum;
};
