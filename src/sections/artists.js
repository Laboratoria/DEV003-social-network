export default () => {
  const artists = `
   <h1>ARTISTS PAGE</h1>
   `;

  const divArtists = document.createElement('div');
  divArtists.innerHTML = artists;

  return divArtists;
};
