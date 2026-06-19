import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../services/firebase";
import { Prof } from "../types";

interface ScheduleProps {
  user: User | null;
}

function Schedule({ user }: ScheduleProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const prof = location.state as Prof;

  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setObs] = useState("");
  const [msg, setMsg] = useState("");

  if (!user) {
    return (
      <main className="conteudo">
        <section className="caixa">
          <h2>Agendamento</h2>
          <p>Para agendar uma sessão, faça login na plataforma.</p>

          <Link className="link-botao" to="/login">
            Ir para login
          </Link>
        </section>
      </main>
    );
  }

  function salvar(event: FormEvent) {
    event.preventDefault();

    if (!prof) {
      setMsg("Selecione um profissional antes de agendar.");
      return;
    }

    addDoc(collection(db, "agenda"), {
      userId: user?.uid,
      userEmail: user?.email,
      prof: prof.name,
      data: data,
      hora: hora,
      obs: obs,
    })
      .then(() => {
        setMsg("Agendamento salvo com sucesso.");

        setData("");
        setHora("");
        setObs("");

        setTimeout(() => {
          navigate("/agenda");
        }, 800);
      })
      .catch(() => {
        setMsg("Não foi possível salvar o agendamento.");
      });
  }

  return (
    <main className="conteudo">
      <section className="caixa formulario">
        <h2>Agendar sessão</h2>

        {!prof && <p>Nenhum profissional selecionado.</p>}

        {prof && (
          <p>
            <strong>Profissional:</strong> {prof.name}
          </p>
        )}

        <form onSubmit={salvar}>
          <label>Data</label>
          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
          />

          <label>Horário</label>
          <input
            type="time"
            value={hora}
            onChange={(event) => setHora(event.target.value)}
          />

          <label>Observações</label>
          <textarea
            placeholder="Informe alguma observação sobre o atendimento"
            value={obs}
            onChange={(event) => setObs(event.target.value)}
          />

          {msg && <p className="sucesso">{msg}</p>}

          <button type="submit">Salvar agendamento</button>
        </form>
      </section>
    </main>
  );
}

export default Schedule;
