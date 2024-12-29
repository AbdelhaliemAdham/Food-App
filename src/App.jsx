import Cart from "./components/Cart.jsx";
import CheckOut from "./components/CheckOut.jsx";
import Header from "./components/Header";
import Meal from "./components/Meals";
import { CartContextProvider } from "./store/CartContext.jsx";
import { ProgressContextProvider } from "./store/ProgressContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <ProgressContextProvider>
        <Header />
        <Meal />
        <Cart />
        <CheckOut />
      </ProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
