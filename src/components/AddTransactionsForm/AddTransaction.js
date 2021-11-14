import React from "react";
import PropTypes from "prop-types";
import styles from "./AddTransaction.module.scss";

const AddTransaction = ({ onClick }) => {
  return (
    <button
      className={styles.add_transaction_btn}
      type="button"
      onClick={onClick}
    >
      +
    </button>
  );
};

AddTransaction.propTypes = {
  openModal: PropTypes.func.isRequired,
};
export default AddTransaction;