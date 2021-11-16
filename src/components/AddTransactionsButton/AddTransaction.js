
import React, { useContext } from "react";
import styles from "./AddTransaction.module.scss";
import { ModalContext } from "../Modal/ModalContext";

  

const Controls = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal({
      title: '',
      children:
        <div>
        <button type="button" className={styles.close} onClick={closeModal}></button>
  
        </div>
    });
  }

  return (
    <div className="Controls">
      <button className={styles.add_transaction_btn} onClick={handleClick}>+</button>
    </div>
  )
};

export default Controls;

