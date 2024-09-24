import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(userTest).toEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Aarón';

        const usuarioActivo = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);
        expect(usuarioActivo).toEqual(user);
        
        
    })
    
    
})
