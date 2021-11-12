import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as IconLogo } from '../icons/icon-logo30.svg';

import styles from './AuthHeading.module.scss';

export default function AuthHeading({ text }) {
  return (
    <div className={styles.head}>
      <IconLogo width={30} height={30} className={styles.icon} />
      <h2 className={styles.Heading}>{text}</h2>
    </div>
  );
}

AuthHeading.defaultProps = {
  text: '',
};

AuthHeading.propTypes = {
  text: PropTypes.string,
};
