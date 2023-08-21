import iconeReserva from "../../assets/images/icone-reserva.svg";

export default function Reserva() {
  return (
    <section className="reserva" id="reservas">
      <div className="container">
        <div className="row">
          <div className="col-12 col-one">
            <div className="card-secondary wow fadeInUp">
              <div className="row">
                <div className="col-12 col-lg-7 col-md-7 col-sm-12">
                  <span className="hint-title">
                    <b>Reserva</b>
                  </span>
                  <h1 className="title">
                    <b>Quer reservar um horário?</b>
                  </h1>
                  <p className="pr-5">
                    Mande uma mensagem clicando no botão abaixo
                    <br />
                    Reserve sua data e horário de forma simples e rápida.
                  </p>
                  <a
                    className="btn btn-yellow mt-4 wow fadeIn delay-05s"
                    href="#"
                    id="btnReserva"
                    target="_blank"
                  >
                    Fazer reserva
                  </a>
                </div>

                <div className="col-5 no-mobile">
                  <div className="card-reserva"></div>
                  <div className="d-flex img-banner">
                    <img src={iconeReserva} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
