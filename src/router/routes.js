import { signUp } from '../components/signup.js';
import { logIn } from '../components/login.js';
import { home } from '../components/home.js';

export const routes = {
  '/': signUp,
  '/login': logIn,
  '/home': home,
  // '/artists': artists,
  // '/album': album,
};
