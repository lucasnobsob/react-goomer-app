export default function Rodape() {
  return (
    <div className="m-footer">
      <div className="container">
        <div className="container-total text-right mb-4">
          <p className="mb-0">
            <span>Subtotal:</span>
            <span id="lblSubTotal">R$ 0,00</span>
          </p>
          <p className="mb-0 texto-entrega">
            <span>
              <i className="fas fa-motorcycle"></i> Entrega:
            </span>
            <span id="lblValorEntrega">+ R$ 0,00</span>
          </p>
          <p className="mb-0 texto-total">
            <span>
              <b>Total:</b>
            </span>
            <span className="valor-total">
              <b id="lblValorTotal">R$ 0,00</b>
            </span>
          </p>
        </div>

        <a id="btnEtapaPedido">Continuar</a>
        <a className="btn btn-yellow float-right hidden" id="btnEtapaEndereco">
          Revisar pedido
        </a>
        <a
          href="#"
          className="btn btn-yellow float-right hidden"
          id="btnEtapaResumo"
          target="_blank"
        >
          Enviar pedido
        </a>

        <a className="btn btn-white float-right mr-3 hidden" id="btnVoltar">
          Voltar
        </a>
      </div>
    </div>
  );
}
