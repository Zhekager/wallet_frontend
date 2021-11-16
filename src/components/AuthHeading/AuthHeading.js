import React from 'react';
import PropTypes from 'prop-types';

import useSizeScreen from '../../hooks/useSizeScreen';
import { Logo } from '../IconBtn/Logo';

import styles from './AuthHeading.module.scss';

export default function AuthHeading({ text }) {
  const sizeScreen = useSizeScreen();

  return (
    <div className={styles.head}>
      {sizeScreen <= 767 ? (
        <Logo svg={styles.svgLogo} />
      ) : (
        <Logo svg={styles.svgLogo} />
      )}

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
