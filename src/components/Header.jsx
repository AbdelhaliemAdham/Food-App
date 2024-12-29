import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./ui/Button";
import CartContext from "../store/CartContext";
import ProgressContext from "../store/ProgressContext";

export default function Header() {
  const cartCTX = useContext(CartContext);
  const progressCTX = useContext(ProgressContext);
  function handleOpenCart() {
    progressCTX.showCart();
  }
  let cartItemsLength = cartCTX.items.reduce((totalNumber, items) => {
    return totalNumber + items.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleOpenCart}>
          Cart({cartItemsLength})
        </Button>
      </nav>
    </header>
  );
}
