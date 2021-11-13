import PropTypes from 'prop-types';

import styles from './Error.module.scss';

const Error = ({ errorContent }) => {
  return (
    <div role="alert" className={styles.Error}>
      <p text={errorContent} className={styles.ErrorContent}>
        {errorContent}
      </p>
    </div>
  );
};

Error.propTypes = {
  errorContent: PropTypes.string.isRequired,
};

export default Error;
