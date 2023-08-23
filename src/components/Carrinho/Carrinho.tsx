import { useCarrinho } from "../../context/CarrinhoContext";
import { CarrinhoModel } from "../../models/CarrinhoModel";
import ItensCarrinho from "./ItensCarrinho/ItensCarrinho";
import LocalEntrega from "./LocalEntrega/LocalEntrega";
import ResumoCarrinho from "./ResumoCarrinho/ResumoCarrinho";

export default function Carrinho() {
  const {
    carrinho,
    modalCarrinho,
    botaoCarrinho,
    etapa,
    setEtapa,
    setModalCarrinho,
  } = useCarrinho();
  const carrinhoState: CarrinhoModel = carrinho;

  return (
    <>
      <a
        className={`botao-carrinho animated bounceIn ${
          botaoCarrinho ? "" : "hidden"
        }`}
        onClick={() => setModalCarrinho(true)}
      >
        <div className="badge-total-carrinho">{carrinhoState.itens.length}</div>
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
              <div className={`etapa etapa1 ${etapa >= 1 ? "active" : ""}`}>
                1
              </div>
              <div className={`etapa etapa2 ${etapa >= 2 ? "active" : ""}`}>
                2
              </div>
              <div className={`etapa etapa3 ${etapa >= 3 ? "active" : ""}`}>
                3
              </div>
            </div>
            <p className="title-carrinho mt-4">
              <b id="lblTituloEtapa">Seu carrinho:</b>
            </p>
          </div>
        </div>

        <div className="m-body">
          <div className="container">
            <ItensCarrinho />
            <LocalEntrega />
            <ResumoCarrinho />
          </div>
        </div>

        <div className="m-footer">
          <div className="container">
            <div className="container-total text-right mb-4">
              <p className="mb-0">
                <span>Subtotal:</span>
                <span id="lblSubTotal">
                  {carrinhoState.subTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </p>
              <p className="mb-0 texto-entrega">
                <span>
                  <i className="fas fa-motorcycle"></i> Entrega:
                </span>
                <span id="lblValorEntrega">
                  {carrinhoState.valorEntrega.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </p>
              <p className="mb-0 texto-total">
                <span>
                  <b>Total:</b>
                </span>
                <span className="valor-total">
                  <b id="lblValorTotal">
                    {carrinhoState.valorTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </b>
                </span>
              </p>
            </div>

            {etapa == 1 && (
              <a
                className="btn btn-yellow float-right"
                id="btnEtapaPedido"
                onClick={() => setEtapa(2)}
              >
                Continuar
              </a>
            )}

            {etapa == 2 && (
              <a className="btn btn-yellow float-right" id="btnEtapaEndereco">
                Revisar pedido
              </a>
            )}

            {etapa == 3 && (
              <a
                href="#"
                className="btn btn-yellow float-right"
                id="btnEtapaResumo"
                target="_blank"
              >
                Enviar pedido
              </a>
            )}

            {etapa > 1 && (
              <a
                className="btn btn-white float-right mr-3"
                id="btnVoltar"
                onClick={() => setEtapa(etapa - 1)}
              >
                Voltar
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
