import { Prof } from "../types";

interface CardsProps {
  prof: Prof;
  abrir: (prof: Prof) => void;
  agendar: (prof: Prof) => void;
}

function Cards({ prof, abrir, agendar }: CardsProps) {
  return (
    <div className="card">
      <h3>{prof.name}</h3>

      <p>
        <strong>Email:</strong> {prof.email}
      </p>

      <p>
        <strong>Cidade:</strong> {prof.address?.city}
      </p>

      <p>
        <strong>Telefone:</strong> {prof.phone}
      </p>

      <div className="card-botoes">
        <button onClick={() => abrir(prof)}>Ver detalhes</button>
        <button onClick={() => agendar(prof)}>Agendar</button>
      </div>
    </div>
  );
}

export default Cards;
