import { useState } from "react";
import { ProdutoModel } from "../../../models/ProdutoModel";
import { useCarrinho } from "../../../context/CarrinhoContext";

export default function CardapioItem(produtoItem: ProdutoModel) {
  const [qtdeItem, setQtdeItem] = useState<number>(0);
  const { handleAddCarrinho, setEtapa } = useCarrinho();

  const handleSubtracaoItem = () => {
    if (qtdeItem > 0) setQtdeItem(qtdeItem - 1);
  };

  const handleButtonAddCarrinho = () => {
    if (qtdeItem > 0) {
      handleAddCarrinho(produtoItem, qtdeItem);
      setQtdeItem(0);
      setEtapa(1);
    }
  };

  return (
    <div className="col-12 col-lg-3 col-md-3 col-sm-6 mb-5 animated fadeInUp">
      <div className="card card-item" id={produtoItem.id}>
        <div className="img-produto">
          <img src={produtoItem.img} />
        </div>
        <p className="title-produto text-center mt-4">
          <b>{produtoItem.name}</b>
        </p>
        <p className="price-produto text-center">
          <b>
            {produtoItem.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </b>
        </p>
        <div className="add-carrinho">
          <span className="btn-menos" onClick={() => handleSubtracaoItem()}>
            <i className="fas fa-minus"></i>
          </span>
          <span className="add-numero-itens" id={`qtd-${produtoItem.id}`}>
            {qtdeItem}
          </span>
          <span className="btn-mais" onClick={() => setQtdeItem(qtdeItem + 1)}>
            <i className="fas fa-plus"></i>
          </span>
          <span className="btn btn-add" onClick={handleButtonAddCarrinho}>
            <i className="fa fa-shopping-bag"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
