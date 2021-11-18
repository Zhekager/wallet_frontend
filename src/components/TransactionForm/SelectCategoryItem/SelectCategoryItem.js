// import PropTypes from 'prop-types';

// import styles from './SelectCategoryItem.module.scss';

// const SelectCategoryItem = ({ category, value }) => {
//   return (
//     <option key={value} value={value} className={styles.SelectCategoryItem}>
//       {category}
//     </option>
//   );
// };

// SelectCategoryItem.propTypes = {
//   costs: PropTypes.string.isRequired,
// };

// export default SelectCategoryItem;

// import { MenuItem } from '@material-ui/core';
// import { styles } from '@material-ui/pickers/views/Calendar/Calendar';

// function SelectCategoryItem({ costs }) {
//   return costs.map(cost => {
//     return (
//       <MenuItem
//         key={cost.value}
//         value={cost.value}
//         width="100%"
//         color="red"
//         className={styles.select}
//       >
//         {cost.label}
//       </MenuItem>
//     );
//   });
// }

// export default SelectCategoryItem;

import { MenuItem } from '@material-ui/core';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';

function SelectCategoryItem(array) {
  return array.map(option => {
    return (
      <MenuItem
        key={option.value}
        value={option.value}
        width="100%"
        color="red"
        className={styles.select}
      >
        {option.label}
      </MenuItem>
    );
  });
}

export default SelectCategoryItem;
