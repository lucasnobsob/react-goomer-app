import { createContext, useState, useContext, useEffect } from "react";
import { CarrinhoItem, CarrinhoModel } from "../models/CarrinhoModel";
import { ProdutoModel } from "../models/ProdutoModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleToast = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const atualizaTotais = (cart: CarrinhoModel) => {
    const subTotal = cart.itens.reduce((total, item) => {
      return total + item.qtde * item.produto.price;
    }, 0);

    cart.subTotal = subTotal;
    cart.valorTotal = subTotal + carrinho.valorEntrega;
    return cart;
  };

  const handleAddCarrinho = (produto: ProdutoModel, qtde: number) => {
    const prdIndex = carrinho.itens.findIndex(
      (x) => x.produto.id === produto.id
    );

    let carrinhoClone = JSON.parse(JSON.stringify(carrinho));

    if (prdIndex !== -1) {
      carrinhoClone.itens[prdIndex].qtde += qtde;
    } else {
      carrinhoClone.itens.push({ produto, qtde });
    }

    carrinhoClone = atualizaTotais(carrinhoClone);

    setCarrinho(carrinhoClone);
    handleToast("Item adicionado ao carrinho");
  };

  const handlePlusItem = (index: number) => {
    let carrinhoClone = JSON.parse(JSON.stringify(carrinho));

    carrinhoClone.itens[index].qtde += 1;
    carrinhoClone = atualizaTotais(carrinhoClone);
    setCarrinho(carrinhoClone);
  };

  const handleMinusItem = (index: number) => {
    let carrinhoClone = JSON.parse(JSON.stringify(carrinho));

    if (carrinhoClone.itens[index].qtde > 1) {
      carrinhoClone.itens[index].qtde -= 1;
      carrinhoClone = atualizaTotais(carrinhoClone);
    }

    setCarrinho(carrinhoClone);
  };

  const handleRemoveItem = (index: number) => {
    let carrinhoClone = JSON.parse(JSON.stringify(carrinho));

    carrinhoClone.itens.splice(index, 1);
    carrinhoClone = atualizaTotais(carrinhoClone);
    setCarrinho(carrinhoClone);
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
        handlePlusItem,
        handleMinusItem,
        handleRemoveItem,
      }}
    >
      {children}
      <ToastContainer />
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
