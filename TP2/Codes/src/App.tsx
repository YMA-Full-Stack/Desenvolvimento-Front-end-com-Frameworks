import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [psicologos, setPsicologos] = useState<any[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => {
        setPsicologos(dados);
      });
  }, []);

  const lista = psicologos.filter((item) =>
    item.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="layout">
      <header className="topo">
        <h1>MindCare</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Psicólogos</a>
          <a href="#">Agenda</a>
        </nav>
      </header>

      <main className="conteudo">
        <input
          type="text"
          placeholder="Buscar psicólogo"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <div className="lista">
          {lista.map((item, index) => (
            <div className="card" key={index}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.address?.city}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="rodape">
        <p>© 2026 MindCare</p>
        <p>Suporte | Contato | Termos</p>
      </footer>
    </div>
  );
}

export default App;
