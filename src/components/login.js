import { onNavigate } from '../router/utils';

export const logIn = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  button.textContent = 'Botón de LogIn';
  buttonBack.textContent = 'Botón de Regreso';
  title.textContent = 'LOG IN';
  button.addEventListener('click', () => {
    onNavigate('/home');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, button, buttonBack);

  return div;
};
