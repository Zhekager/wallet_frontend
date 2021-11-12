import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onLoadMore, contentBtn, disabled }) => (
  <button disabled={disabled} onClick={onLoadMore} className={styles.Button}>
    {contentBtn}
  </button>
);

Button.defaultProps = {
  onLoadMore: () => null,
  disabled: false,
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
  contentBtn: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
