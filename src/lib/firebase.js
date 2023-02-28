import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './confirebase.js';

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
};
