import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

/* eslint-disable no-undef */
describe("Pruebas en <PrivateRoute />", () => {
  test("debe mostrar el children si está autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
