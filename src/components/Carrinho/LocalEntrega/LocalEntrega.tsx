import { useCarrinho } from "../../../context/CarrinhoContext";

export default function LocalEntrega() {
  const { etapa } = useCarrinho();

  return (
    <div
      id="localEntrega"
      className={`row mr-0 ml-0 animated fadeIn ${etapa != 2 ? "hidden" : ""}`}
    >
      <div className="col-12 col-lg-4 col-md-4 col-sm-12">
        <div className="form-group container-cep">
          <label>CEP:</label>
          <input id="txtCEP" type="text" className="form-control" />
          <a className="btn btn-yellow btn-sm">
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>

      <div className="col-8 no-mobile"></div>

      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
          <label>Endereço:</label>
          <input id="txtEndereco" type="text" className="form-control" />
        </div>
      </div>

      <div className="col-12 col-lg-4 col-md-4 col-sm-12">
        <div className="form-group">
          <label>Bairro:</label>
          <input id="txtBairro" type="text" className="form-control" />
        </div>
      </div>

      <div className="col-12 col-lg-2 col-md-2 col-sm-12">
        <div className="form-group">
          <label>Número:</label>
          <input id="txtNumero" type="text" className="form-control" />
        </div>
      </div>

      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
          <label>Cidade:</label>
          <input id="txtCidade" type="text" className="form-control" />
        </div>
      </div>

      <div className="col-12 col-lg-4 col-md-4 col-sm-12">
        <div className="form-group">
          <label>Complemento:</label>
          <input id="txtComplemento" type="text" className="form-control" />
        </div>
      </div>

      <div className="col-12 col-lg-2 col-md-2 col-sm-12">
        <div className="form-group">
          <label>UF:</label>
          <select id="ddlUf" className="form-control">
            <option value="-1">...</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </div>
      </div>
    </div>
  );
}
