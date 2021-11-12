import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as IconLogo } from '../icons/logo.svg';

import styles from './PageHeading.module.scss';

export default function PageHeading({ text }) {
  return <h1 className={styles.PageHeading}>{text}</h1>;
}

PageHeading.defaultProps = {
  text: '',
};

PageHeading.propTypes = {
  text: PropTypes.string,
};
