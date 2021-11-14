

import PropTypes from 'prop-types';
//import style from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ openModal, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        openModal();
      }
    };

window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal]);
    
const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      openModal();
    }
};
    return createPortal(
      <div onClick={handleBackdropClick}>
        <div>{children}</div>
      </div>,
      modalRoot
    );
  }

Modal.propTypes = {
  openModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};  
