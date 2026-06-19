import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../services/firebase";
import { MsgItem } from "../types";

interface MsgsProps {
  user: User | null;
}

function Msgs({ user }: MsgsProps) {
  const [para, setPara] = useState("");
  const [texto, setTexto] = useState("");
  const [msgs, setMsgs] = useState<MsgItem[]>([]);

  useEffect(() => {
    if (user) {
      carregar();
    }
  }, [user]);

  function carregar() {
    const consulta = query(
      collection(db, "msgs"),
      where("userId", "==", user?.uid)
    );

    getDocs(consulta).then((resultado) => {
      const lista = resultado.docs.map((documento) => {
        return {
          id: documento.id,
          ...documento.data(),
        } as MsgItem;
      });

      setMsgs(lista);
    });
  }

  function enviar(event: FormEvent) {
    event.preventDefault();

    addDoc(collection(db, "msgs"), {
      userId: user?.uid,
      userEmail: user?.email,
      para: para,
      texto: texto,
      data: new Date().toLocaleDateString("pt-BR"),
    }).then(() => {
      setPara("");
      setTexto("");
      carregar();
    });
  }

  if (!user) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Mensagens</h2>
          <p>Para acessar mensagens, faça login.</p>

          <Link className="link-botao" to="/login">
            Ir para login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="conteudo">
      <section className="caixa formulario">
        <h2>Mensagens</h2>

        <p>Espaço simples para simular uma comunicação segura.</p>

        <form onSubmit={enviar}>
          <label>Destinatário</label>
          <input
            type="text"
            placeholder="Nome do profissional"
            value={para}
            onChange={(event) => setPara(event.target.value)}
          />

          <label>Mensagem</label>
          <textarea
            placeholder="Digite sua mensagem"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />

          <button type="submit">Enviar mensagem</button>
        </form>
      </section>

      <div className="lista">
        {msgs.map((item) => (
          <div className="card" key={item.id}>
            <h3>Para: {item.para}</h3>
            <p>{item.texto}</p>
            <p>
              <strong>Data:</strong> {item.data}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Msgs;
