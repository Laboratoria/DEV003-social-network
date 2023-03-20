/* // importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */
import { authIngreso } from '../src/lib/firebase.js';

describe('authIngreso', () => {
  it('debería ser una función', () => {
    expect(typeof authIngreso).toBe('function');
  });

  it('debería llamar a signInWithEmailAndPassword con los argumentos correctos', () => {
    const email = 'test@test.com';
    const password = 'testpassword';

    const mockSignInWithEmailAndPassword = jest.fn(() => Promise.resolve());
    jest.mock('firebase/auth', () => ({
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    }));

    authIngreso(email, password);

    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
  });
});
