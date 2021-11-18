import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SelectCategoryItem from '../SelectCategoryItem';

import { costs } from '../../../assets/data/select-data/selectData';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '97%',
    color: 'white',
    margin: '0px',
    marginBottom: '34px',
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
    background: 'white',
    opacity: '0.7',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFfilter: 'blur(50px)',
    borderRadius: '20px',
  },

  select: {
    color: 'black',
    background: 'white',
  },

  padding: {
    padding: '0px',
  },

  //   button: {
  //     background: 'red',
  //   },
}));

export default function SelectCategory({ category, handleChange }) {
  const classes = useStyles();
  return (
    <>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          className={classes.select}
          defaultValue=""
        >
          {SelectCategoryItem(costs)}
        </Select>
      </FormControl>
    </>
  );
}
