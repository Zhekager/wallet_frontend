import PropTypes from 'prop-types';
import PageHeading from '../PageHeading';

import styles from './ImgContentContainer.module.scss';

const ImgContentContainer = ({ children }) => {
  return (
    <div className={styles.ImgContent}>
      {children}
      <PageHeading text="Finance App" />
    </div>
  );
};

ImgContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ImgContentContainer;
