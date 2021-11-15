import PropTypes from 'prop-types';

import styles from './Error.module.scss';

const Error = ({ errorContent }) => {
  return (
    <div role="alert" className={styles.Error}>
      <p text={errorContent} className={styles.ErrorContent}>
        {errorContent}
      </p>
      <div class="contant_box_404">
        <h3 className={styles.ErrorContent}>Look like you're lost</h3>

        <p className={styles.ErrorContent}>
          the page you are looking for not avaible!
        </p>

        <a href="" class="link_404">
          Go to Home
        </a>
      </div>
    </div>
  ):
};

Error.propTypes = {
  errorContent: PropTypes.string.isRequired,
};

export default Error;
