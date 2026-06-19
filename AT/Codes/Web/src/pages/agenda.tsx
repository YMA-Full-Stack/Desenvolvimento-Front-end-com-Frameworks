import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../services/firebase";
import { AgendaItem } from "../types";

interface AgendaProps {
  user: User | null;
}

function Agenda({ user }: AgendaProps) {
  const [agenda, setAgenda] = useState<AgendaItem[]>([]);

  useEffect(() => {
    if (user) {
      carregar();
    }
  }, [user]);

  function carregar() {
    const consulta = query(
      collection(db, "agenda"),
      where("userId", "==", user?.uid)
    );

    getDocs(consulta).then((resultado) => {
      const lista = resultado.docs.map((documento) => {
        return {
          id: documento.id,
          ...documento.data(),
        } as AgendaItem;
      });

      setAgenda(lista);
    });
  }

  function remover(id: string) {
    deleteDoc(doc(db, "agenda", id)).then(() => {
      carregar();
    });
  }

  if (!user) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Agenda</h2>
          <p>Para visualizar sua agenda, faça login.</p>

          <Link className="link-botao" to="/login">
            Ir para login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="conteudo">
      <section className="apresentacao">
        <h2>Minha agenda</h2>

        <p>Aqui ficam os agendamentos criados pelo usuário autenticado.</p>
      </section>

      <div className="lista">
        {agenda.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.prof}</h3>

            <p>
              <strong>Data:</strong> {item.data}
            </p>

            <p>
              <strong>Horário:</strong> {item.hora}
            </p>

            <p>{item.obs}</p>

            <button onClick={() => remover(item.id)}>Remover</button>
          </div>
        ))}
      </div>

      {agenda.length === 0 && <p>Nenhum agendamento encontrado.</p>}
    </main>
  );
}

export default Agenda;
