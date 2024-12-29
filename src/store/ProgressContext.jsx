import { createContext, useState } from "react";

const ProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export function ProgressContextProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }

  function hideCart() {
    setProgress("");
  }

  function showCheckOut() {
    setProgress("checkout");
  }

  function hideCheckOut() {
    setProgress("");
  }

  const contextValue = {
    progress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}

export default ProgressContext;
