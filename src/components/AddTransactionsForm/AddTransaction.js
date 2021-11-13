import React from "react";
import scss from "./AddTransaction.module.scss";

const AddTransaction = ({ modalHandler }) => {
  return (
    <button
      className={scss.add__transaction_btn}
      type="button"
      onClick={() => modalHandler()}
    >
      +
    </button>
  );
};

export default AddTransaction;