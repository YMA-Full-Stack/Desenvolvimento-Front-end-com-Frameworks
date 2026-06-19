import { render, screen, fireEvent } from "@testing-library/react";
import Mobile from "../pages/mobile";

test("renderiza informações da versão mobile", () => {
  render(<Mobile />);

  expect(screen.getByText("Versão Mobile")).toBeTruthy();
  expect(screen.getByText("Diferenças entre iOS e Android")).toBeTruthy();
});

test("alterna conteúdo entre Android e iOS", () => {
  render(<Mobile />);

  expect(screen.getAllByText("Android").length > 0).toBe(true);

  fireEvent.click(screen.getByRole("button", { name: "iOS" }));

  expect(screen.getByText(/Em aparelhos iOS/i)).toBeTruthy();
});
