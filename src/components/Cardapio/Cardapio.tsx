import CardapioItem from "./CardapioItem/CardapioItem";
import {
  burgers,
  bebidas,
  churrasco,
  pizzas,
  sobremesas,
  steaks,
} from "./CardapioItem/ProdutosMock";
import { useEffect, useState } from "react";

export default function Cardapio() {
  const [divItensCardapio, setDivItensCardapio] = useState(null);

  const getObjectByString = (str: string): Produto[] => {
    const objectMap = {
      burgers: { value: burgers },
      bebidas: { value: bebidas },
      churrasco: { value: churrasco },
      pizzas: { value: pizzas },
      sobremesas: { value: sobremesas },
      steaks: { value: steaks },
    };

    return objectMap[str].value || null;
  };

  const handleCategoryButton = (category) => {
    const product = getObjectByString(category);

    const html = product.map((item, index) => (
      <>
        <CardapioItem
          dsc={item.dsc}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
        />
      </>
    ));

    setDivItensCardapio(html);
  };

  useEffect(() => {
    handleCategoryButton("burgers");
  }, []);

  return (
    <section className="cardapio" id="cardapio">
      <div className="background-cardapio"></div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-one text-center mb-5 wow fadeIn">
            <span className="hint-title">
              <b>Cardápio</b>
            </span>
            <h1 className="title">
              <b>Conheça o nosso cardápio</b>
            </h1>
          </div>

          <div className="col-12 col-one container-menu wow fadeInUp">
            <a
              id="menu-burgers"
              className="btn btn-white btn-sm mr-3 active"
              onClick={() => handleCategoryButton("burgers")}
            >
              <i className="fas fa-hamburger"></i>&nbsp; Burgers
            </a>
            <a
              id="menu-pizzas"
              className="btn btn-white btn-sm mr-3"
              onClick={() => handleCategoryButton("pizzas")}
            >
              <i className="fas fa-pizza-slice"></i>&nbsp; Pizzas
            </a>
            <a
              id="menu-churrasco"
              className="btn btn-white btn-sm mr-3"
              onClick={() => handleCategoryButton("churrasco")}
            >
              <i className="fas fa-drumstick-bite"></i>&nbsp; Churrasco
            </a>
            <a
              id="menu-steaks"
              className="btn btn-white btn-sm mr-3"
              onClick={() => handleCategoryButton("steaks")}
            >
              <i className="fas fa-bacon"></i>&nbsp; Steaks
            </a>
            <a
              id="menu-bebidas"
              className="btn btn-white btn-sm mr-3"
              onClick={() => handleCategoryButton("bebidas")}
            >
              <i className="fas fa-cocktail"></i>&nbsp; Bebidas
            </a>
            <a
              id="menu-sobremesas"
              className="btn btn-white btn-sm mr-3"
              onClick={() => handleCategoryButton("sobremesas")}
            >
              <i className="fas fa-ice-cream"></i>&nbsp; Sobremesas
            </a>
          </div>

          <div className="col-12 col-one">
            <div className="row" id="itensCardapio">
              {divItensCardapio}
            </div>
          </div>

          <div className="col-12 col-one text-center wow fadeInUp">
            <a id="btnVerMais" className="btn btn-white btn-sm">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
