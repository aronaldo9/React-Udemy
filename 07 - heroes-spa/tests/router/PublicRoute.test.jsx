import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

/* eslint-disable no-undef */
describe("Pruebas en <PublicRoute />", () => {
  test("debe mostrar el children si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta pública")).toBeTruthy();
    // screen.debug();
  });

  test("debe navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página Marvel")).toBeTruthy();
    // screen.debug();
  });
});
