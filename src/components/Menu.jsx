import { Fragment } from "react";
import Pizza  from "./Pizza"
import { pizzaData } from "./data"

export const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
        <h2>Our menu</h2>
        {
          numPizzas > 0 ? ( 
        <Fragment> 
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All 
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
                {pizzaData.map((pizza) =>  (
                <Pizza 
                    key={pizza.name} 
                    pizzaObj={pizza}
                />))}
            </ul>
        </Fragment> 
          ) : `<p>We're still working on our menu. Please come back later :)</p>`
        }
        {/* {numPizzas > 0 &&( 
        
          <ul className="pizzas">
              {pizzaData.map((pizza) =>  (
              <Pizza key={pizza.name} pizzaObj={pizza}/>))}
          </ul>
        
        )} */}
    </main>
  )
}

{/*name={pizza.name}
  ingredient={pizza.ingredients}
  price={pizza.price}
  photoName={pizza.photoName}
  soldout={pizza.soldOut}*/}