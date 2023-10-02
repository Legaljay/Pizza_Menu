import { Pizza } from "./Pizza"
import { pizzaData } from "./data"

export const Menu = () => {
  return (
    <main className="menu">
        <h2>Our menu</h2>
        <ul>
            {pizzaData.map((pizza) =>  (
            <Pizza key={pizza.name} pizzaObj={pizza}/>))}
        </ul>
    </main>
  )
}

{/*name={pizza.name}
  ingredient={pizza.ingredients}
  price={pizza.price}
  photoName={pizza.photoName}
  soldout={pizza.soldOut}*/}