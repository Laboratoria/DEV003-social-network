export default () => {
  const home = `
    <h1 class="titulo">HOME PAGE</h1>
    
    `;

  const divHome = document.createElement('div');
  divHome.innerHTML = home;

  return divHome;
};
