import PropTypes from "prop-types";

function Pizza ({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut? 'sold-out': ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT": pizzaObj.price}</span>
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