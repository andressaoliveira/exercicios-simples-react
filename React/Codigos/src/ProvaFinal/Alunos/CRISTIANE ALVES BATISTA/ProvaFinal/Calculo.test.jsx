import { render, fireEvent, screen } from "@testing-library/react";

import { Calculo } from "./Calculo";

describe("Calculo", () => {
  const setup = () => {
    render(<Calculo />);
  };

  describe("When the values are divisible", () => {
    it("Should display a message", () => {
      setup();

      fireEvent.change(screen.getByPlaceholderText("Número 1"), {
        target: { value: "1" },
      });
      fireEvent.change(screen.getByPlaceholderText("Número 2"), {
        target: { value: "1" },
      });

      expect(screen.getByText("É divisível")).not.toBeNull();
    });
  });

  describe("When the values are not divisible", () => {
    it("Should display a message", () => {
      setup();

      fireEvent.change(screen.getByPlaceholderText("Número 1"), {
        target: { value: "1" },
      });
      fireEvent.change(screen.getByPlaceholderText("Número 2"), {
        target: { value: "2" },
      });

      expect(screen.getByText("Não é divisível")).not.toBeNull();
    });
  });

  describe("When the divisor is zero", () => {
    it("Should display a message", () => {
      setup();

      fireEvent.change(screen.getByPlaceholderText("Número 1"), {
        target: { value: "1" },
      });
      fireEvent.change(screen.getByPlaceholderText("Número 2"), {
        target: { value: "0" },
      });

      expect(screen.getByText("O divisor não pode ser 0")).not.toBeNull();
    });
  });
});
