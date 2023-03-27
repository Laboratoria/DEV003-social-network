/* // importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('debería redirigir al usuario a la página principal después de crear una cuenta', async () => {
    // Utiliza librería de mocking simulando comportamiento de la función.

    // Simula una llamada exitosa a la función `createUserWithEmailAndPassword`.

    // Verifica que la función redirija al usuario a la página principal.
  });

  it('debería mostrar un error si la creación de la cuenta falla', async () => {
    // Utiliza librería de mocking simulando comportamiento de la función.

    // Simula una llamada fallida a la función `createUserWithEmailAndPassword`.

    // Verifica que la función no redirija al usuario a la página principal.
  });
});
