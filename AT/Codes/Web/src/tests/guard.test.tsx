import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Guard from "../components/guard";

test("mostra aviso quando usuário não está logado", () => {
  render(
    <BrowserRouter>
      <Guard user={null}>
        <p>Conteúdo interno</p>
      </Guard>
    </BrowserRouter>
  );

  expect(screen.getByText("Acesso restrito")).toBeTruthy();
  expect(screen.getByText("Ir para login")).toBeTruthy();
});

test("mostra conteúdo quando usuário está logado", () => {
  const user: any = {
    email: "teste@email.com",
    uid: "123",
  };

  render(
    <BrowserRouter>
      <Guard user={user}>
        <p>Conteúdo interno</p>
      </Guard>
    </BrowserRouter>
  );

  expect(screen.getByText("Conteúdo interno")).toBeTruthy();
});
