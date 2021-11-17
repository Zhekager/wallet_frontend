import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthNav.module.scss';

const AuthNav = ({ content, path }) => (
  <div className={styles.AuthNav}>
    <Link to={path} exact className={styles.link}>
      {content}
    </Link>
  </div>
);

export default AuthNav;
