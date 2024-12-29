import React, { useContext } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";
import Button from "./ui/Button";
import CartContext from "../store/CartContext.jsx";

function Meal({ meal }) {
  const cartCTX = useContext(CartContext);

  function handleAddItem() {
    cartCTX.addItem(meal);
  }

  return (
    <div className="meal-item">
      <article>
        <img src={"http://localhost:3000/" + meal.image} alt={meal.name} />
        <div>
          <h3 className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </h3>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItem}> Add To Cart</Button>
        </p>
      </article>
    </div>
  );
}

export default Meal;
