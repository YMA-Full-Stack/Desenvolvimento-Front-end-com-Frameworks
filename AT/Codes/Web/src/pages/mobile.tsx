import { useState } from "react";

function Mobile() {
  const [sistema, setSistema] = useState("android");
  const [inicioToque, setInicioToque] = useState(0);
  const [mensagem, setMensagem] = useState(
    "Deslize o card para simular um gesto mobile."
  );

  function tocarInicio(event: React.TouchEvent<HTMLDivElement>) {
    setInicioToque(event.touches[0].clientX);
  }

  function tocarFim(event: React.TouchEvent<HTMLDivElement>) {
    const fimToque = event.changedTouches[0].clientX;
    const diferenca = inicioToque - fimToque;

    if (diferenca > 50) {
      setMensagem("Gesto detectado: usuário deslizou para a esquerda.");
    } else if (diferenca < -50) {
      setMensagem("Gesto detectado: usuário deslizou para a direita.");
    } else {
      setMensagem("Toque detectado, mas sem deslocamento suficiente.");
    }
  }

  return (
    <main className="conteudo">
      <section className="caixa">
        <h2>Versão Mobile</h2>

        <p>
          Nesta etapa, o MindCare foi preparado para uma experiência melhor em
          dispositivos móveis, com layout responsivo, navegação simples,
          autenticação para áreas internas e uso de recurso do celular.
        </p>

        <p>
          A área de documentos permite anexar imagem usando câmera ou galeria,
          dependendo do dispositivo utilizado.
        </p>
      </section>

      <section className="caixa mobile-area">
        <h2>Simulação de gesto mobile</h2>

        <div
          className="card gesto-card"
          onTouchStart={tocarInicio}
          onTouchEnd={tocarFim}
        >
          <h3>Card com gesto</h3>
          <p>
            Em um celular, deslize este card para a esquerda ou para a direita.
          </p>
        </div>

        <p className="sucesso">{mensagem}</p>
      </section>

      <section className="caixa">
        <h2>Diferenças entre iOS e Android</h2>

        <div className="sistema-botoes">
          <button onClick={() => setSistema("android")}>Android</button>
          <button onClick={() => setSistema("ios")}>iOS</button>
        </div>

        {sistema === "android" && (
          <div className="card sistema-card">
            <h3>Android</h3>
            <p>
              Em aparelhos Android, o navegador geralmente oferece opções como
              câmera, galeria e arquivos do dispositivo ao anexar uma imagem.
            </p>
            <p>
              A experiência pode variar conforme o navegador usado, como Chrome
              ou Samsung Internet.
            </p>
          </div>
        )}

        {sistema === "ios" && (
          <div className="card sistema-card">
            <h3>iOS</h3>
            <p>
              Em aparelhos iOS, o acesso à câmera depende das permissões do
              Safari ou do navegador utilizado.
            </p>
            <p>
              O sistema pode solicitar autorização antes de permitir câmera ou
              seleção de imagens.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Mobile;
