import PropTypes from 'prop-types';

import styles from './AuthContentContainer.module.scss';

const AuthContentContainer = ({ children, authContainer }) => {
  return <div className={styles[`${authContainer}`]}>{children}</div>;
};

AuthContentContainer.propTypes = {
  children: PropTypes.node,
};

export default AuthContentContainer;
