import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const item = location.state;

  if (!item) {
    return <p className="conteudo">Nenhum dado encontrado</p>;
  }

  return (
    <div className="conteudo">
      <h2>{item.name}</h2>
      <p>Email: {item.email}</p>
      <p>Cidade: {item.address?.city}</p>
    </div>
  );
}

export default Details;
