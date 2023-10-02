export const Pizza = (props) => {
  return (
    <li>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
        <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price}</span>
        </div>
    </li>
  )
}