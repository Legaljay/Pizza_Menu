import PropTypes from "prop-types";

function Pizza (props) {
  return (
    <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
        <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price}</span>
        </div>
    </li>

  

  )
  
}

Pizza.propTypes = {
  pizzaObj: PropTypes.object,
  photoName:PropTypes.string,
  name: PropTypes.string, 
  ingredients: PropTypes.string,
  price: PropTypes.number
}

export default Pizza