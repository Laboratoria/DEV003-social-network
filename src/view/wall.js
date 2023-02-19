export default () => {
  const viewWall = '<h2 class="llamado" > Chat</h2>';
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewWall;

  return divElemt;
};
