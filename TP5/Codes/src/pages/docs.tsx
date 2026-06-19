import { FormEvent, ChangeEvent, useEffect, useState } from "react";
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
  const [foto, setFoto] = useState("");
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

  function selecionarFoto(event: ChangeEvent<HTMLInputElement>) {
    const arquivo = event.target.files?.[0];

    if (arquivo) {
      setFoto(arquivo.name);
    }
  }

  function salvar(event: FormEvent) {
    event.preventDefault();

    addDoc(collection(db, "docs"), {
      userId: user?.uid,
      userEmail: user?.email,
      titulo: titulo,
      tipo: tipo,
      desc: desc,
      foto: foto,
    }).then(() => {
      setTitulo("");
      setTipo("");
      setDesc("");
      setFoto("");
      carregar();
    });
  }

  function remover(id: string) {
    deleteDoc(doc(db, "docs", id)).then(() => {
      carregar();
    });
  }

  return (
    <main className="conteudo">
      <section className="caixa formulario">
        <h2>Documentos</h2>

        <p>
          Área para registrar documentos e simular o uso de um recurso do
          celular, como câmera ou galeria.
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

          <label>Anexar imagem</label>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={selecionarFoto}
          />

          {foto && <p className="arquivo">Arquivo selecionado: {foto}</p>}

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

            {item.foto && (
              <p>
                <strong>Anexo:</strong> {item.foto}
              </p>
            )}

            <button onClick={() => remover(item.id)}>Remover</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Docs;
