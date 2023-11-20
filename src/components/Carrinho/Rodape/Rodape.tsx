import React, { useEffect, useRef } from "react";
import { useCarrinho } from "../../../context/CarrinhoContext";

export default function Rodape() {
  const { carrinho, etapa, setEtapa, endereco, handleToast } = useCarrinho();
  const enviarPedidoButton = useRef(null);

  const handleEnderecoPreenchido = () => {
    const campos = [
      { campo: "cep", mensagem: "O campo CEP precisa ser preenchido" },
      {
        campo: "endereco",
        mensagem: "O campo Endereço precisa ser preenchido",
      },
      { campo: "bairro", mensagem: "O campo Bairro precisa ser preenchido" },
      { campo: "numero", mensagem: "O campo Número precisa ser preenchido" },
      { campo: "cidade", mensagem: "O campo Cidade precisa ser preenchido" },
      { campo: "uf", mensagem: "O campo UF precisa ser preenchido" },
    ];

    let isValid = true;

    campos.forEach(({ campo, mensagem }) => {
      if (!endereco[campo].trim()) {
        handleToast(mensagem, false);
        isValid = false;
      }
    });

    return isValid;
  };

  const montaTextoWhatsapp = () => {
    let texto = "Olá! gostaria de fazer um pedido:";
    texto += `\n*Itens do pedido:*\n\n\${itens}`;
    texto += "\n*Endereço de entrega:*";
    texto += `\n${endereco.endereco}, ${endereco.numero}, ${endereco.bairro}`;
    texto += `\n${endereco.cidade}-${endereco.uf} / ${endereco.cep} ${endereco.complemento}`;
    texto += `\n\n*Total (com entrega): R$ ${(
      carrinho.valorTotal + carrinho.valorEntrega
    )
      .toFixed(2)
      .replace(".", ",")}*`;

    let itens = "";

    itens += carrinho.itens.map((item) => {
      return `*${item.qtde}x* ${
        item.produto.name
      } ....... R$ ${item.produto.price.toFixed(2).replace(".", ",")} \n`;
    });

    texto = texto.replace(/\${itens}/g, itens);
    const encode = encodeURI(texto);
    const URL = `https://wa.me/5591995075447?text=${encode}`;

    if (enviarPedidoButton.current) {
      enviarPedidoButton.current.href = URL;
    }
  };

  useEffect(() => {
    if (etapa == 3) montaTextoWhatsapp();
  }, [etapa]);

  return (
    <>
      <div className="container-total text-right mb-4">
        <p className="mb-0">
          <span>Subtotal:</span>
          <span id="lblSubTotal">
            {carrinho.subTotal.toLocaleString("pt-BR", {
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
            {carrinho.valorEntrega.toLocaleString("pt-BR", {
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
              {carrinho.valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </b>
          </span>
        </p>
      </div>

      {etapa == 1 && (
        <a
          className={`btn btn-yellow float-right ${
            carrinho.itens.length == 0 ? "disabled-button" : ""
          }`}
          id="btnEtapaPedido"
          onClick={() => {
            if (carrinho.itens.length > 0) setEtapa(2);
          }}
        >
          Continuar
        </a>
      )}

      {etapa == 2 && (
        <a
          className="btn btn-yellow float-right"
          id="btnEtapaEndereco"
          onClick={() => {
            if (handleEnderecoPreenchido()) setEtapa(3);
          }}
        >
          Revisar pedido
        </a>
      )}

      {etapa == 3 && (
        <a
          href="#"
          className="btn btn-yellow float-right"
          id="btnEtapaResumo"
          target="_blank"
          ref={enviarPedidoButton}
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
    </>
  );
}
