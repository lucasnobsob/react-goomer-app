import pizzas from "../..//assets/images/pizzas.png";

export default function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="background-depoimentos"></div>

      <div className="container">
        <div className="row">
          <div className="col-5 no-mobile text-center">
            <div className="card-depoimentos wow fadeIn"></div>
            <div className="d-flex img-banner wow fadeInLeft delay-02s">
              <img src={pizzas} />
            </div>
          </div>

          <div className="col-12 col-lg-7 col-md-7 col-sm-12 col-one">
            <span className="hint-title wow fadeIn">
              <b>Depoimentos</b>
            </span>
            <h1 className="title wow fadeIn">
              <b>O que dizem sobre nós?</b>
            </h1>
            <div className="mb-5">
              <div className="depoimento animated fadeIn" id="depoimento-1">
                <div className="container-dados-depoimento">
                  <div className="imagem-depoimento"></div>
                  <div>
                    <p className="nome-depoimento">
                      <b>Diego Pereira</b>
                    </p>
                    <p className="nota-depoimento">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>&nbsp;{" "}
                      <span>4.5</span>
                    </p>
                  </div>
                </div>
                <p className="texto-depoimento">
                  <i className="fas fa-quote-left"></i>
                  <span>
                    Muito bom, recomendo demais! Comida muito bem feita pelo
                    chefe, atendimento dentro dos parâmetros e boa comunicação
                    com o cliente.
                  </span>
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>

              <div
                className="depoimento animated fadeIn hidden"
                id="depoimento-2"
              >
                <div className="container-dados-depoimento">
                  <div className="imagem-depoimento"></div>
                  <div>
                    <p className="nome-depoimento">
                      <b>Ana Beatriz</b>
                    </p>
                    <p className="nota-depoimento">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>&nbsp; <span>5.0</span>
                    </p>
                  </div>
                </div>
                <p className="texto-depoimento">
                  <i className="fas fa-quote-left"></i>
                  <span>
                    Um jantar perfeito do começo ao fim. Comida, experiência,
                    serviço... foi tão maravilhoso que fomos dois dias seguidos
                    - fato inédito para mim em uma viagem.
                  </span>
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>

              <div
                className="depoimento animated fadeIn hidden"
                id="depoimento-3"
              >
                <div className="container-dados-depoimento">
                  <div className="imagem-depoimento"></div>
                  <div>
                    <p className="nome-depoimento">
                      <b>João Guilherme</b>
                    </p>
                    <p className="nota-depoimento">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>&nbsp; <span>4.0</span>
                    </p>
                  </div>
                </div>
                <p className="texto-depoimento">
                  <i className="fas fa-quote-left"></i>
                  <span>
                    A comida estava excelente e o serviço gentil nos
                    surpreendeu! Dica: reserve umas 3 horas para ter uma
                    experiência incrível.
                  </span>
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>
            </div>

            <a
              id="btnDepoimento-1"
              className="btn btn-sm btn-white btn-social wow fadeIn mr-3 active"
            >
              1
            </a>
            <a
              id="btnDepoimento-2"
              className="btn btn-sm btn-white btn-social wow fadeIn mr-3"
            >
              2
            </a>
            <a
              id="btnDepoimento-3"
              className="btn btn-sm btn-white btn-social wow fadeIn"
            >
              3
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
