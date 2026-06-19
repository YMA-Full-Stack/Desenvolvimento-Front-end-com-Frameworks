function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-logo">
        <h2>MindCare</h2>
        <p>Cuidado, organização e acesso à informação em saúde mental.</p>
      </div>

      <div className="rodape-coluna">
        <a href="#">Sobre o projeto</a>
        <a href="#">Profissionais</a>
        <a href="#">Atendimento</a>
      </div>

      <div className="rodape-coluna">
        <a href="#">Agenda</a>
        <a href="#">Documentos</a>
        <a href="#">Mensagens</a>
      </div>

      <div className="rodape-coluna">
        <h4>Contato</h4>
        <p>contato@mindcare.com.br</p>

        <div className="rodape-icones">
          <span>in</span>
          <span>@</span>
          <span>▶</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
