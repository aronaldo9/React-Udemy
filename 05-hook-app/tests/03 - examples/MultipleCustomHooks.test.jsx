/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

/* eslint-disable no-undef */
describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      hasError: null,
      isLoading: true,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando ..."));
    expect(screen.getByText("Información de Pokemon"));

    const nextButton = screen.getByRole("button", { name: "Anterior" });
    expect(nextButton.className).toBeTruthy();

    screen.debug();
  });

  test("debe mostrar un pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Bulbasaur",
        id: 1,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      hasError: null,
      isLoading: false,
    });

    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText(`#1 - Bulbasaur`)).toBeTruthy();
  });

  test("Debe llamar a la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Bulbasaur",
        id: 1,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      hasError: null,
      isLoading: false,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    nextButton.click();
    expect(mockIncrement).toHaveBeenCalled();
  });
});
