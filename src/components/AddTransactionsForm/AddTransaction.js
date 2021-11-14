import React from "react";
import PropTypes from "prop-types";
import styles from "./AddTransaction.module.scss";

const AddTransaction = ({ openModal }) => {
  return (
    <button
      className={styles.add_transaction_btn}
      type="button"
      onClick={openModal}
    >
      +
    </button>
  );
};

AddTransaction.propTypes = {
  openModal: PropTypes.func.isRequired,
};
export default AddTransaction;