import { createContext, useState, useContext, useEffect } from "react";
import { CarrinhoModel } from "../models/CarrinhoModel";
import { ProdutoModel } from "../models/ProdutoModel";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [modalCarrinho, setModalCarrinho] = useState<boolean>(false);
  const [botaoCarrinho, setBotaoCarrinho] = useState<boolean>(false);
  const [etapa, setEtapa] = useState<number>(0);
  const [carrinho, setCarrinho] = useState<CarrinhoModel>({
    subTotal: 0,
    valorEntrega: 0,
    valorTotal: 0,
    itens: [],
  });

  const handleAddCarrinho = (produto: ProdutoModel, qtde: number) => {
    const prdIndex = carrinho.itens.findIndex(
      (x) => x.produto.id === produto.id
    );

    let novoCarrinho = null,
      novosItens = null;
    let subTotal = 0;

    if (prdIndex !== -1) {
      novosItens = [...carrinho.itens];
      novosItens[prdIndex].qtde += qtde;

      novoCarrinho = {
        ...carrinho,
        itens: novosItens,
      };
    } else {
      const novoItem = {
        produto: produto,
        qtde: qtde,
      };

      novoCarrinho = {
        ...carrinho,
        itens: [novoItem],
      };
    }

    novosItens = novoCarrinho.itens.map((item) => {
      const novoItem = {
        ...item,
        subtotalItem: item.produto.price * item.qtde,
      };
      subTotal += novoItem.subtotalItem;
      return novoItem;
    });

    novoCarrinho.subTotal = subTotal;
    novoCarrinho.valorTotal = subTotal + carrinho.valorEntrega;

    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    setBotaoCarrinho(carrinho.itens.length > 0);
  }, [carrinho]);

  return (
    <CarrinhoContext.Provider
      value={{
        modalCarrinho,
        setModalCarrinho,
        botaoCarrinho,
        carrinho,
        etapa,
        setEtapa,
        handleAddCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro do CarrinhoProvider");
  }
  return context;
}
