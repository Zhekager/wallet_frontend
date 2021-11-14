/* 

import PropTypes from 'prop-types';
//import style from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ showModal, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        showModal();
      }
    };

window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);
    
const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      showModal();
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
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};  */
