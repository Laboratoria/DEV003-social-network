export default () => {
  const viewHome = `<h2 class= text-center> Posts </h2>`

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  return divElement;
};

