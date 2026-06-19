import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Cards from "../components/cards";
import { Prof } from "../types";

function Profs() {
  const [profs, setProfs] = useState<Prof[]>([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProfs(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os profissionais.");
        setCarregando(false);
      });
  }, []);

  const lista = profs.filter((item) =>
    item.name.toLowerCase().includes(busca.toLowerCase())
  );

  function abrir(prof: Prof) {
    navigate("/details", { state: prof });
  }

  function agendar(prof: Prof) {
    navigate("/schedule", { state: prof });
  }

  return (
    <main className="conteudo">
      <section className="apresentacao">
        <h2>Profissionais disponíveis</h2>

        <p>
          Consulte profissionais cadastrados, pesquise pelo nome e visualize
          mais informações antes de escolher um atendimento.
        </p>
      </section>

      <input
        type="text"
        placeholder="Buscar profissional pelo nome"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      {carregando && <p>Carregando profissionais...</p>}
      {erro && <p className="erro">{erro}</p>}

      <div className="lista">
        {lista.map((item) => (
          <Cards key={item.id} prof={item} abrir={abrir} agendar={agendar} />
        ))}
      </div>
    </main>
  );
}

export default Profs;
