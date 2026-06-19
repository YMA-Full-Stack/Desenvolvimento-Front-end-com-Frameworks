import { Link } from "react-router-dom";
import { User } from "firebase/auth";

interface HeaderProps {
  user: User | null;
  sair: () => void;
}

function Header({ user, sair }: HeaderProps) {
  return (
    <header className="topo">
      <div>
        <h1>MindCare</h1>
        <p>Cuidado e informação em saúde mental</p>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/profs">Profissionais</Link>
        <Link to="/agenda">Agenda</Link>
        <Link to="/docs">Documentos</Link>
        <Link to="/msgs">Mensagens</Link>
        <Link to="/about">Sobre</Link>

        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Cadastro</Link>}

        {user && <Link to="/profile">Perfil</Link>}

        {user && (
          <button className="botao-sair" onClick={sair}>
            Sair
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
