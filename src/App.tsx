import "./App.css";
import "../src/styles/animate.css";
import "../src/styles/bootstrap.min.css";
import "../src/styles/fontawesome.css";
import "../src/styles/main.css";
import "../src/styles/responsivo.css";
import Menu from "./components/Menu/Menu";
import Banner from "./components/Banner/Banner";
import Cardapio from "./components/Cardapio/Cardapio";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Reserva from "./components/Reserva/Reserva";
import Servicos from "./components/Servicos/Servicos";
import Rodape from "./components/Rodape/Rodape";

function App() {
  return (
    <>
      <div className="container-mensagens" id="container-mensagens"></div>

      <a className="botao-carrinho animated bounceIn hidden">
        <div className="badge-total-carrinho">0</div>
        <i className="fa fa-shopping-bag"></i>
      </a>

      <Menu></Menu>
      <Banner></Banner>
      <Servicos></Servicos>
      <Cardapio></Cardapio>
      <Depoimentos></Depoimentos>
      <Reserva></Reserva>
      <Rodape></Rodape>
    </>
  );
}

export default App;
