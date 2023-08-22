import { useModal } from "../../context/CarrinhoContext";
import LocalEntrega from "./LocalEntrega/LocalEntrega";
import ResumoCarrinho from "./ResumoCarrinho/ResumoCarrinho";

export default function Carrinho() {
  const { modalCarrinho, setModalCarrinho } = useModal();

  return (
    <>
      <a
        className="botao-carrinho animated bounceIn hidden"
        onClick={() => setModalCarrinho(true)}
      >
        <div className="badge-total-carrinho">0</div>
        <i className="fa fa-shopping-bag"></i>
      </a>

      <div
        className={`modal-full animated fadeIn ${
          !modalCarrinho ? "hidden" : ""
        }`}
        id="modalCarrinho"
      >
        <div className="m-header">
          <div className="container">
            <a
              className="btn btn-white btn-sm float-right"
              onClick={() => setModalCarrinho(false)}
            >
              Fechar
            </a>
            <div className="etapas">
              <div className="etapa etapa1 active">1</div>
              <div className="etapa etapa2">2</div>
              <div className="etapa etapa3">3</div>
            </div>
            <p className="title-carrinho mt-4">
              <b id="lblTituloEtapa">Seu carrinho:</b>
            </p>
          </div>
        </div>

        <div className="m-body">
          <div className="container">
            <div
              id="itensCarrinho"
              className="row mr-0 ml-0 animated fadeIn hidden"
            ></div>

            <LocalEntrega />

            <ResumoCarrinho />
          </div>
        </div>

        <div className="m-footer">
          <div className="container">
            <div className="container-total text-right mb-4">
              <p className="mb-0">
                <span>Subtotal:</span>
                <span id="lblSubTotal">R$ 0,00</span>
              </p>
              <p className="mb-0 texto-entrega">
                <span>
                  <i className="fas fa-motorcycle"></i> Entrega:
                </span>
                <span id="lblValorEntrega">+ R$ 0,00</span>
              </p>
              <p className="mb-0 texto-total">
                <span>
                  <b>Total:</b>
                </span>
                <span className="valor-total">
                  <b id="lblValorTotal">R$ 0,00</b>
                </span>
              </p>
            </div>

            <a className="btn btn-yellow float-right" id="btnEtapaPedido">
              Continuar
            </a>
            <a
              className="btn btn-yellow float-right hidden"
              id="btnEtapaEndereco"
            >
              Revisar pedido
            </a>
            <a
              href="#"
              className="btn btn-yellow float-right hidden"
              id="btnEtapaResumo"
              target="_blank"
            >
              Enviar pedido
            </a>

            <a className="btn btn-white float-right mr-3 hidden" id="btnVoltar">
              Voltar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
