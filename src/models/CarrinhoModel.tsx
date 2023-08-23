import { ProdutoModel } from "./ProdutoModel";

export interface CarrinhoItem {
  produto: ProdutoModel;
  qtde: number;
}

export interface CarrinhoModel {
  subTotal: number;
  valorEntrega: number;
  valorTotal: number;
  itens: CarrinhoItem[];
}
