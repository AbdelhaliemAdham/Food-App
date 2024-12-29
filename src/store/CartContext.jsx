import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const initialState = { items: [] };

function cartReducer(state, actions) {
  if (actions.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === actions.item.id
    );
    const updatedItems = [...state.items];
    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...actions.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (actions.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === actions.id
    );

    const updatedItems = [...state.items];
    const existingItem = state.items[existingItemIndex];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }
  if (actions.type === "CLEAR-CART") {
    return { ...state, items: [] };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatchAction] = useReducer(cartReducer, initialState);

  function addItem(item) {
    // Debugging log to check the item being added
    console.log("Adding item:", item);
    dispatchAction({ type: "ADD_ITEM", item: item });
  }

  function removeItem(id) {
    // Debugging log to check the item being removed
    console.log("Removing item with id:", id);
    dispatchAction({ type: "REMOVE_ITEM", id: id });
  }
  function clearCart() {
    dispatchAction({ type: "CLEAR-CART" });
  }

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem,
    clearCart,
  };

  // Debugging log to check the cart context
  console.log("Cart context:", cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
