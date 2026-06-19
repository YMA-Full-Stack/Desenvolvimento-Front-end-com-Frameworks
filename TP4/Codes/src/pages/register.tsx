import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import { auth, db } from "../services/firebase";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  function cadastrar(event: FormEvent) {
    event.preventDefault();
    setErro("");

    if (nome.trim() === "") {
      setErro("Informe seu nome.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then((resultado) => {
        updateProfile(resultado.user, {
          displayName: nome,
        });

        setDoc(doc(db, "usuarios", resultado.user.uid), {
          nome: nome,
          email: email,
          tipo: "paciente",
        });

        navigate("/profile");
      })
      .catch(() => {
        setErro("Não foi possível cadastrar. Verifique os dados informados.");
      });
  }

  return (
    <main className="conteudo">
      <section className="caixa formulario">
        <h2>Cadastro</h2>

        <form onSubmit={cadastrar}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Crie uma senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Cadastrar</button>
        </form>

        <p>
          Já possui conta? <Link to="/login">Entrar</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
