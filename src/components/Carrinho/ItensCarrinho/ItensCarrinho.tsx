import { useCarrinho } from "../../../context/CarrinhoContext";
import { CarrinhoItem } from "../../../models/CarrinhoModel";

export default function ItensCarrinho() {
  const { carrinho, etapa, handlePlusItem, handleMinusItem, handleRemoveItem } =
    useCarrinho();

  return (
    <div
      id="itensCarrinho"
      className={`row mr-0 ml-0 animated fadeIn ${etapa != 1 ? "hidden" : ""}`}
    >
      {carrinho.itens.length > 0 ? (
        carrinho.itens.map((item: CarrinhoItem, index: number) => {
          return (
            <div className="col-12 item-carrinho">
              <div className="img-produto">
                <img src={item.produto.img} />
              </div>
              <div className="dados-produto">
                <p className="title-produto">
                  <b>{item.produto.name}</b>
                </p>
                <p className="price-produto">
                  <b>
                    {item.produto.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </b>
                </p>
              </div>
              <div className="add-carrinho">
                <span
                  className="btn-menos"
                  onClick={() => handleMinusItem(index)}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span className="add-numero-itens" id="qntd-carrinho-\${id}">
                  {item.qtde}
                </span>
                <span
                  className="btn-mais"
                  onClick={() => handlePlusItem(index)}
                >
                  <i className="fas fa-plus"></i>
                </span>
                <span
                  className="btn btn-remove no-mobile"
                  onClick={() => handleRemoveItem(index)}
                >
                  <i className="fa fa-times"></i>
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <p className="carrinho-vazio">
          <i className="fa fa-shopping-bag"></i> Seu carrinho está vazio.
        </p>
      )}
    </div>
  );
}
