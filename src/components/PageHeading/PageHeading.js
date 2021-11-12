import React from 'react';
import PropTypes from 'prop-types';

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
