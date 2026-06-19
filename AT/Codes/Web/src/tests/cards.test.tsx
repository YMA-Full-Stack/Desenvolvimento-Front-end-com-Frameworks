import { render, screen, fireEvent } from "@testing-library/react";
import Cards from "../components/cards";
import { Prof } from "../types";

const prof: Prof = {
  id: 1,
  name: "Maria Silva",
  username: "maria",
  email: "maria@email.com",
  phone: "11999999999",
  website: "maria.com",
  address: {
    street: "Rua A",
    city: "Campinas",
  },
  company: {
    name: "Clínica Bem Estar",
  },
};

test("renderiza card de profissional", () => {
  render(<Cards prof={prof} abrir={() => {}} agendar={() => {}} />);

  expect(screen.getByText("Maria Silva")).toBeTruthy();
  expect(screen.getByText("maria@email.com")).toBeTruthy();
  expect(screen.getByText("Campinas")).toBeTruthy();
});

test("executa ações do card", () => {
  const abrir = jest.fn();
  const agendar = jest.fn();

  render(<Cards prof={prof} abrir={abrir} agendar={agendar} />);

  fireEvent.click(screen.getByText("Ver detalhes"));
  fireEvent.click(screen.getByText("Agendar"));

  expect(abrir).toHaveBeenCalledTimes(1);
  expect(agendar).toHaveBeenCalledTimes(1);
});
