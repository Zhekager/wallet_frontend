import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './SelectCategory.module.scss';

const SelectCategory = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.selectorContainer}>
      <label htmlFor={props.id || props.name}></label>
      <select className={styles.Selector} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

SelectCategory.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.node,
};

export default SelectCategory;
