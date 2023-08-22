import "./App.css";
import "../src/styles/animate.css";
import "../src/styles/bootstrap.min.css";
import "../src/styles/fontawesome.css";
import "../src/styles/main.css";
import "../src/styles/responsivo.css";
import logo from "./assets/images/logo.png";
import Menu from "./components/Menu/Menu";
import Banner from "./components/Banner/Banner";
import Cardapio from "./components/Cardapio/Cardapio";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Reserva from "./components/Reserva/Reserva";
import Servicos from "./components/Servicos/Servicos";
import Carrinho from "./components/Carrinho/Carrinho";
import { ModalProvider } from "./context/CarrinhoContext";

function App() {
  return (
    <>
      <div className="container-mensagens" id="container-mensagens"></div>

      <ModalProvider>
        <Menu></Menu>
        <Carrinho></Carrinho>
      </ModalProvider>

      <Banner></Banner>
      <Servicos></Servicos>
      <Cardapio></Cardapio>
      <Depoimentos></Depoimentos>
      <Reserva></Reserva>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-one container-logo-footer wow fadeIn">
              <img className="logo-footer" src={logo} />
            </div>

            <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-one container-texto-footer wow fadeIn">
              <p className="mb-0">
                <b>Menu On-line</b> &copy; Todos os direitos reservados
              </p>
            </div>

            <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-one container-redes-footer wow fadeIn">
              <a className="btn btn-sm btn-white btn-social mr-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-sm btn-white btn-social mr-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm btn-white btn-social">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
