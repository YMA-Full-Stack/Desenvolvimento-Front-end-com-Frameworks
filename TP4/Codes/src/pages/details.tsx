import { useLocation, useNavigate } from "react-router-dom";

import { Prof } from "../types";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();

  const prof = location.state as Prof;

  if (!prof) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Profissional não encontrado</h2>
          <p>Volte para a lista e selecione um profissional.</p>

          <button onClick={() => navigate("/profs")}>Voltar</button>
        </section>
      </main>
    );
  }

  return (
    <main className="conteudo">
      <section className="caixa">
        <h2>{prof.name}</h2>

        <p>
          <strong>E-mail:</strong> {prof.email}
        </p>

        <p>
          <strong>Telefone:</strong> {prof.phone}
        </p>

        <p>
          <strong>Site:</strong> {prof.website}
        </p>

        <p>
          <strong>Cidade:</strong> {prof.address?.city}
        </p>

        <p>
          <strong>Clínica/empresa:</strong> {prof.company?.name}
        </p>

        <div className="card-botoes">
          <button onClick={() => navigate("/schedule", { state: prof })}>
            Agendar
          </button>

          <button onClick={() => navigate("/profs")}>Voltar</button>
        </div>
      </section>
    </main>
  );
}

export default Details;
