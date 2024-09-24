import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si héore no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                try {
                    expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                    done();
                
                } catch (error) {
                    done(error);
                }
            });
    });
});
