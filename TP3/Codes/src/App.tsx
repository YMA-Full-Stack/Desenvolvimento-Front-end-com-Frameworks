import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles.css";

import Header from "../components/header";
import Footer from "../components/footer";
import Details from "../pages/details";

function App() {
  const [psicologos, setPsicologos] = useState<any[]>([]);
  const [busca, setBusca] = useState("");

  const navigate = useNavigate();

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

  function abrirDetails(item: any) {
    navigate("/details", { state: item });
  }

  return (
    <div className="layout">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="conteudo">
              <input
                type="text"
                placeholder="Buscar psicólogo"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />

              <div className="lista">
                {lista.map((item, index) => (
                  <div
                    className="card"
                    key={index}
                    onClick={() => abrirDetails(item)}
                  >
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                    <p>{item.address?.city}</p>
                  </div>
                ))}
              </div>
            </main>
          }
        />

        <Route path="/details" element={<Details />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
