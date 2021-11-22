// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import SelectCategoryItem from '../SelectCategoryItem';
// import classes from './SelectCategory.module.scss';
// import { costs } from '../../../assets/data/select-data/selectData';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     width: '100%',
//     minWidth: '70%',
//     color: 'white',
//     margin: '0px',
//     marginBottom: '34px',
//   },

//   selectEmpty: {
//     marginTop: theme.spacing(2),
//     background: 'white',
//     opacity: '0.7',
//     boxShadow: '0px 6px 15px rgba(0, 0, 0, 0)',
//     backdropFilter: 'blur(50px)',
//     borderRadius: '20px',
//   },

//   select: {
//     color: 'black',
//     backgroundColor: 'white',
//   },

//   padding: {
//     padding: '0px',
//   },

//   //   button: {
//   //     background: 'red',
//   //   },
// }));

// export default function SelectCategory({ category, handleChange }) {
//   const classes = useStyles();
//   return (
//     <>
//       <FormControl variant="standard" className={classes.formControl}>
//         <InputLabel id="demo-simple-select-label">Choose category</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={category}
//           onChange={handleChange}
//           className={classes.select}
//           defaultValue=""
//         >
//           {SelectCategoryItem(costs)}
//         </Select>
//       </FormControl>
//     </>
//   );
// }

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
