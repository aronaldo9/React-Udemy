import { types } from "../../../src/auth";

/* eslint-disable no-undef */
describe("Pruebas en Types.js", () => {
  test("debe regresar estos types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
