import PropTypes from 'prop-types';
import styles from './BgPageContainer.module.scss';

const BgPageContainer = ({ children, bgContainer }) => {
  return <div className={styles[`${bgContainer}`]}>{children}</div>;
};

BgPageContainer.propTypes = {
  children: PropTypes.node,
};

export default BgPageContainer;
