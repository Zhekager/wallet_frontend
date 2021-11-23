import axios from 'axios';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from './categories-actions';

axios.defaults.baseURL = 'https://personal-expenses.herokuapp.com';

const getCategories = () => async dispatch => {
  dispatch(getCategoriesRequest());
  try {
    const { data } = await axios.get('/api/categories');

    console.log('Categories', data.result);

    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};

const categoriesOperations = {
  getCategories,
};
export default categoriesOperations;
