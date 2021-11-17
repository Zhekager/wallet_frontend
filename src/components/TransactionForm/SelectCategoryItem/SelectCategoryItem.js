import PropTypes from 'prop-types';

import styles from './SelectCategoryItem.module.scss';

const SelectCategoryItem = ({ category, value }) => {
  return (
    <option key={value} value={value} className={styles.SelectCategoryItem}>
      {category}
    </option>
  );
};

SelectCategoryItem.propTypes = {
  costs: PropTypes.string.isRequired,
};

export default SelectCategoryItem;
