import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="topo">
      <h1>MindCare</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Psicólogos</Link>
        <Link to="/">Agenda</Link>
      </nav>
    </header>
  );
}

export default Header;
