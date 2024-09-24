// import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  // eslint-disable-next-line no-unused-vars
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Tu email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="paasword"
        className="form-control mt-2"
        placeholder="Tu contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-3">
        Borrar
      </button>
    </>
  );
};
