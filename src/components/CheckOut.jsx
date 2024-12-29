import React, { useContext } from "react";
import Modal from "./Modal";
import { currencyFormatter } from "../utils/currencyFormatter";
import CartContext from "../store/CartContext";
import Input from "./Input";
import Button from "./ui/Button";
import ProgressContext from "../store/ProgressContext";
import useHttp from "../hook/useHttp";
const configuration = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function CheckOut() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(ProgressContext);
  const totalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const { data, error, isLoading, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    configuration
  );

  function handleClose() {
    progressCtx.hideCheckOut();
  }
  function handleFinish() {
    progressCtx.hideCheckOut();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    )
      .then((response) => {
        if (response.ok) {
          console.log("Order submitted successfully");
          handleClose();
        } else {
          console.error("Failed to submit order");
        }
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  }

  let buttons = (
    <>
      <Button onClick={handleClose} type="button" textOnly>
        Close
      </Button>
      <Button type="submit">Submit-Order</Button>
    </>
  );
  if (isLoading) {
    buttons = <span>Sending Request....</span>;
  }
  if (data && !error) {
    return (
      <>
        <Modal
          open={progressCtx.progress === "checkout"}
          onClose={handleFinish}
        >
          <h2>You Successfully send the request</h2>
          <p>we will call you viva email for more information</p>
          <p className="modal-actions">
            <Button onClick={handleFinish}>Ok</Button>
          </p>
        </Modal>
      </>
    );
  }

  return (
    <Modal open={progressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Check Out</h2>
        <p>Your Total Price : {currencyFormatter.format(totalPrice)}</p>
        <Input type="text" label="Full Name" id="name" name="name" />
        <Input type="email" label="E-Mail" id="email" name="email" />
        <Input type="text" label="Street" id="Street" name="street" />
        <div className="control-row">
          <Input
            type="text"
            label="Postal-Code"
            id="postal-code"
            name="postal-code"
          />
          <Input type="text" label="City" id="city" name="city" />
        </div>
        <p className="modal-actions">{buttons}</p>
      </form>
    </Modal>
  );
}
