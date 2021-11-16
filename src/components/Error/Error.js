import PropTypes from 'prop-types';
import errorImage from '../image/oops.jpeg';
import styles from './Error.module.scss';

const Error = ({ errorContent }) => {
  return (
    <div role="alert" className={styles.Error}>
      <p text={errorContent} className={styles.ErrorContent}>
        {errorContent}
      </p>
      <img src={errorImage} width="550" alt="no_res" />
    </div>
  );
};

Error.propTypes = {
  errorContent: PropTypes.string.isRequired,
};

export default Error;
