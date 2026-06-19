function Mobile() {
  return (
    <main className="conteudo">
      <section className="caixa">
        <h2>Versão Mobile</h2>

        <p>
          Nesta etapa, o MindCare começou a ser preparado para uma experiência
          melhor em dispositivos móveis.
        </p>

        <p>
          A aplicação utiliza layout responsivo, navegação simples e campos de
          formulário adaptados para uso no celular.
        </p>
      </section>

      <section className="lista mobile-grid">
        <div className="card">
          <h3>Android</h3>

          <p>
            Em aparelhos Android, o acesso à câmera pelo navegador costuma abrir
            opções como câmera, galeria e arquivos do dispositivo.
          </p>

          <p>
            A experiência pode variar conforme o navegador utilizado, como
            Chrome, Samsung Internet ou outros.
          </p>
        </div>

        <div className="card">
          <h3>iOS</h3>

          <p>
            Em aparelhos iOS, o acesso à câmera depende das permissões do Safari
            ou do navegador utilizado.
          </p>

          <p>
            O sistema pode solicitar autorização antes de permitir o uso da
            câmera ou seleção de imagens.
          </p>
        </div>

        <div className="card">
          <h3>Recurso do celular</h3>

          <p>
            A área de documentos permite anexar uma imagem, podendo usar a
            câmera do celular quando o projeto é aberto em um dispositivo móvel.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Mobile;
