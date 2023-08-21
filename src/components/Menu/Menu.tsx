import logo from "../../assets/images/logo.png";

export default function Menu() {
  return (
    <section className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg pl-0 pr-0 col-one">
          <a className="navbar-brand wow fadeIn" href="#">
            <img src={logo} width="160" className="img-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto mr-auto wow fadeIn">
              <li className="nav-item">
                <a href="#reservas" className="nav-link">
                  <b>Reservas</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#servicos" className="nav-link">
                  <b>Serviços</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#cardapio" className="nav-link">
                  <b>Cardápio</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#depoimentos" className="nav-link">
                  <b>Depoimentos</b>
                </a>
              </li>
            </ul>
            <a className="btn btn-white btn-icon wow fadeIn">
              Meu carrinho
              <span className="icon">
                <div className="container-total-carrinho badge-total-carrinho hidden">
                  0
                </div>
                <i className="fa fa-shopping-bag"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
