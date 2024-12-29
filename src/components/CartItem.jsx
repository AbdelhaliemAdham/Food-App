import React from "react";

export default function CartItem({
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <ul>
      <li className="cart-item">
        <p>
          {name} - {quantity * price}
        </p>

        <p className="cart-item-actions">
          <button onClick={onIncrease}>+</button>
          <span>{quantity}</span>
          <button onClick={onDecrease}>-</button>
        </p>
      </li>
    </ul>
  );
}
