import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";

interface GuardProps {
  user: User | null;
  children: ReactNode;
}

function Guard({ user, children }: GuardProps) {
  if (!user) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Acesso restrito</h2>

          <p>
            Para acessar esta área, é necessário entrar com uma conta
            cadastrada.
          </p>

          <Link className="link-botao" to="/login">
            Ir para login
          </Link>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}

export default Guard;
