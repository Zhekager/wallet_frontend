import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.scss';

const AuthNav = ({ content, path }) => (
  <div className={styles.AuthNav}>
    <NavLink
      to={path}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      {content}
    </NavLink>
  </div>
);

export default AuthNav;
