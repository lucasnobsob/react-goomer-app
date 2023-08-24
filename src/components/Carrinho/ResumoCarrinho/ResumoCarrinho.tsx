import { useCarrinho } from "../../../context/CarrinhoContext";
import { CarrinhoItem } from "../../../models/CarrinhoModel";

export default function ResumoCarrinho() {
  const { etapa, carrinho, endereco } = useCarrinho();

  return (
    <div
      id="resumoCarrinho"
      className={`row mr-0 ml-0 animated fadeIn ${etapa != 3 ? "hidden" : ""}`}
    >
      <div className="col-12">
        <p className="title-carrinho mt-4">
          <b>Itens do pedido:</b>
        </p>
      </div>

      <div className="col-12">
        <div className="row" id="listaItensResumo">
          {carrinho.itens &&
            carrinho.itens.map((item: CarrinhoItem) => {
              return (
                <div className="col-12 item-carrinho resumo">
                  <div className="img-produto-resumo">
                    <img src={item.produto.img} />
                  </div>
                  <div className="dados-produto">
                    <p className="title-produto-resumo">
                      <b>{item.produto.name}</b>
                    </p>
                    <p className="price-produto-resumo">
                      <b>
                        {item.produto.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </b>
                    </p>
                  </div>
                  <p className="quantidade-produto-resumo">
                    x <b>{item.qtde}</b>
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="col-12">
        <p className="title-carrinho mt-4">
          <b>Local da entrega:</b>
        </p>
      </div>

      <div className="col-12 item-carrinho resumo">
        <div className="img-map">
          <i className="fas fa-map-marked-alt"></i>
        </div>
        <div className="dados-produto">
          <p className="texto-endereco">
            <b id="resumoEndereco">{`${endereco.endereco}, ${endereco.numero}, ${endereco.bairro}`}</b>
          </p>
          <p
            className="cidade-endereco"
            id="cidadeEndereco"
          >{`${endereco.cidade}-${endereco.uf} / ${endereco.cep}, ${endereco.complemento}`}</p>
        </div>
      </div>
    </div>
  );
}
