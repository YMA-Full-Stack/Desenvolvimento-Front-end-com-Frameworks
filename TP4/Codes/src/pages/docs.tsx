import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../services/firebase";
import { DocItem } from "../types";

interface DocsProps {
  user: User | null;
}

function Docs({ user }: DocsProps) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [desc, setDesc] = useState("");
  const [docs, setDocs] = useState<DocItem[]>([]);

  useEffect(() => {
    if (user) {
      carregar();
    }
  }, [user]);

  function carregar() {
    const consulta = query(
      collection(db, "docs"),
      where("userId", "==", user?.uid)
    );

    getDocs(consulta).then((resultado) => {
      const lista = resultado.docs.map((documento) => {
        return {
          id: documento.id,
          ...documento.data(),
        } as DocItem;
      });

      setDocs(lista);
    });
  }

  function salvar(event: FormEvent) {
    event.preventDefault();

    addDoc(collection(db, "docs"), {
      userId: user?.uid,
      userEmail: user?.email,
      titulo: titulo,
      tipo: tipo,
      desc: desc,
    }).then(() => {
      setTitulo("");
      setTipo("");
      setDesc("");
      carregar();
    });
  }

  function remover(id: string) {
    deleteDoc(doc(db, "docs", id)).then(() => {
      carregar();
    });
  }

  if (!user) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Documentos</h2>
          <p>Para acessar documentos, faça login.</p>

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
        <h2>Documentos</h2>

        <p>
          Área simples para registrar documentos relacionados ao atendimento.
        </p>

        <form onSubmit={salvar}>
          <label>Título</label>
          <input
            type="text"
            placeholder="Ex: Recibo de atendimento"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />

          <label>Tipo</label>
          <input
            type="text"
            placeholder="Ex: Recibo, anotação, orientação"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          />

          <label>Descrição</label>
          <textarea
            placeholder="Descreva o documento"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />

          <button type="submit">Salvar documento</button>
        </form>
      </section>

      <div className="lista">
        {docs.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.titulo}</h3>

            <p>
              <strong>Tipo:</strong> {item.tipo}
            </p>

            <p>{item.desc}</p>

            <button onClick={() => remover(item.id)}>Remover</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Docs;
