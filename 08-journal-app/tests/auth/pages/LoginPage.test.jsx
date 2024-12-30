/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSignIn } from "../../../src/store/auth/thunks";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailPassword({ email, password });
  },
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

/* eslint-disable no-undef */
describe("Pruebas en <LoginPage />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el componente correctamente ", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    //screen.debug();
    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("botón de ggogle debe llamar al startGoogleSignIn ", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSignIn).toHaveBeenCalled();

    // screen.debug();
  });

  test("submit debe llamar a startLoginWithEmailPassword", () => {
    const email = "fernando@google.com";
    const password = "123456";

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole("textbox", { name: "Email" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passwordField = screen.getByTestId("password", { name: "Password" });
    fireEvent.change(passwordField, {
      target: { name: "password", value: password },
    });

    const loginForm = screen.getByLabelText("submit-form");
    fireEvent.submit(loginForm);

    expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
      email: email,
      password: password,
    });
  });
});
