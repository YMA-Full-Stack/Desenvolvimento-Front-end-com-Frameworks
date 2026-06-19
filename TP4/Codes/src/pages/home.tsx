import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="conteudo">
      <section className="apresentacao home">
        <h2>Bem-vindo ao MindCare</h2>

        <p>
          Uma plataforma criada para facilitar o acesso a profissionais da área
          de saúde mental, organizar atendimentos e centralizar informações
          importantes do processo terapêutico.
        </p>

        <div className="home-acoes">
          <Link className="link-botao" to="/profs">
            Ver profissionais
          </Link>

          <Link className="link-botao secundario" to="/register">
            Criar conta
          </Link>
        </div>
      </section>

      <section className="lista">
        <div className="card">
          <h3>Busca de profissionais</h3>
          <p>
            Consulte profissionais disponíveis e encontre informações básicas
            para escolher um atendimento.
          </p>
        </div>

        <div className="card">
          <h3>Agendamento</h3>
          <p>
            Organize data, horário e profissional escolhido em uma agenda
            simples.
          </p>
        </div>

        <div className="card">
          <h3>Documentos e mensagens</h3>
          <p>Acompanhe informações importantes relacionadas ao atendimento.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
