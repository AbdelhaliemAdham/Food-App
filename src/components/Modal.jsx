import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose, className = "" }) {
  const Dialog = useRef();

  useEffect(() => {
    const dialog = Dialog.current;
    if (open) {
      dialog.showModal();
    }
    return () => {
      dialog.close();
    };
  }, [open]);
  return createPortal(
    <dialog ref={Dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
