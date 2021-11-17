import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ handleClick, contentBtn, disabled, button }) => (
  <button
    disabled={disabled}
    onClick={handleClick}
    className={styles[`${button}`]}
  >
    {contentBtn}
  </button>
);

Button.defaultProps = {
  handleClick: () => null,
  disabled: false,
};

Button.propTypes = {
  handleClick: PropTypes.func,
  contentBtn: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
