import React from 'react';
import PropTypes from 'prop-types';

import useSizeScreen from '../../hooks/useSizeScreen';
import { Logo } from '../IconBtn/Logo';
// import { ReactComponent as IconLogo } from '../icons/icon-logo30.svg';

import styles from './AuthHeading.module.scss';

export default function AuthHeading({ text }) {
  const sizeScreen = useSizeScreen();

  return (
    <div className={styles.head}>
      {/* <IconLogo width={30} height={30} className={styles.icon} /> */}

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
