import { Link } from "react-router-dom";
import { User } from "firebase/auth";

interface ProfileProps {
  user: User | null;
}

function Profile({ user }: ProfileProps) {
  if (!user) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Perfil</h2>
          <p>Para visualizar seu perfil, faça login na plataforma.</p>

          <Link className="link-botao" to="/login">
            Ir para login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="conteudo">
      <section className="caixa">
        <h2>Meu Perfil</h2>

        <p>
          <strong>Nome:</strong> {user.displayName || "Usuário MindCare"}
        </p>

        <p>
          <strong>E-mail:</strong> {user.email}
        </p>

        <p>
          <strong>Status:</strong> Usuário autenticado no Firebase.
        </p>
      </section>
    </main>
  );
}

export default Profile;
