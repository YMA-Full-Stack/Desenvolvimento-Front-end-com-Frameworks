import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { auth, googleProvider } from "../services/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  function entrar(event: FormEvent) {
    event.preventDefault();
    setErro("");

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setErro("Não foi possível entrar. Verifique o e-mail e a senha.");
      });
  }

  function entrarGoogle() {
    setErro("");

    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setErro("Não foi possível entrar com o Google.");
      });
  }

  return (
    <main className="conteudo">
      <section className="caixa formulario">
        <h2>Login</h2>

        <form onSubmit={entrar}>
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
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Entrar</button>
        </form>

        <button className="botao-google" onClick={entrarGoogle}>
          Entrar com Google
        </button>

        <p>
          Ainda não possui conta? <Link to="/register">Cadastrar-se</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
