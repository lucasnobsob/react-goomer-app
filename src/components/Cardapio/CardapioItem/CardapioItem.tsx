import { useState } from "react";
import { Produto } from "./ProdutosMock";

export default function CardapioItem(produtoItem: Produto) {
  return (
    <div className="col-12 col-lg-3 col-md-3 col-sm-6 mb-5 animated fadeInUp">
      <div className="card card-item" id="the-gramercy-tavern-burger-4-pack">
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
          <span className="btn-menos">
            <i className="fas fa-minus"></i>
          </span>
          <span className="add-numero-itens" id={`qtd-${produtoItem.id}`}>
            0
          </span>
          <span className="btn-mais">
            <i className="fas fa-plus"></i>
          </span>
          <span className="btn btn-add">
            <i className="fa fa-shopping-bag"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
