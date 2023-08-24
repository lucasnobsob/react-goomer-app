import { useCarrinho } from "../../context/CarrinhoContext";
import ItensCarrinho from "./ItensCarrinho/ItensCarrinho";
import LocalEntrega from "./LocalEntrega/LocalEntrega";
import ResumoCarrinho from "./ResumoCarrinho/ResumoCarrinho";
import Rodape from "./Rodape/Rodape";

export default function Carrinho() {
  const { carrinho, modalCarrinho, botaoCarrinho, etapa, setModalCarrinho } =
    useCarrinho();

  const textStyle = {
    textAlign: "left",
  };

  const contarProdutosNoCarrinho = () => {
    return carrinho.itens.reduce((total, item) => {
      return total + item.qtde;
    }, 0);
  };

  return (
    <>
      <a
        className={`botao-carrinho animated bounceIn ${
          botaoCarrinho ? "" : "hidden"
        }`}
        onClick={() => setModalCarrinho(true)}
      >
        <div className="badge-total-carrinho">{contarProdutosNoCarrinho()}</div>
        <i className="fa fa-shopping-bag"></i>
      </a>

      <div
        className={`modal-full animated fadeIn ${
          !modalCarrinho ? "hidden" : ""
        }`}
        style={textStyle}
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
            <Rodape />
          </div>
        </div>
      </div>
    </>
  );
}
