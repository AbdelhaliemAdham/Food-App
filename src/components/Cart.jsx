import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import ProgressContext from "../store/ProgressContext";
import Button from "./ui/Button.jsx";
import Modal from "./Modal.jsx";
import { currencyFormatter } from "../utils/currencyFormatter.js";
import CartItem from "./CartItem.jsx";

function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCTX = useContext(ProgressContext);

  // Debugging log to check cart items
  console.log("Cart items:", cartCtx.items);

  const totalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    progressCTX.hideCart();
  }
  function handleGoToCheckOut() {
    progressCTX.showCheckOut();
  }

  return (
    <Modal
      onClose={progressCTX.progress === "cart" ? handleCloseCart : null}
      open={progressCTX.progress === "cart"}
    >
      <h2>Your Cart</h2>

      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onIncrease={() => cartCtx.addItem(item)}
          onDecrease={() => cartCtx.removeItem(item.id)}
        />
      ))}

      <p>Your total Price: {currencyFormatter.format(totalPrice)}</p>
      <p>
        <Button textOnly={true} onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckOut}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
