import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

/* eslint-disable no-undef */
describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Aarón",
    email: "aaaron@google.com",
  };

  test("debe regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Pepe";
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test("debe resetear el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Pepe";
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
