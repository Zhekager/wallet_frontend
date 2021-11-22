import axios from 'axios';
import {
    getCategoriesRequest,
    getCategoriesSuccess,
    getCategoriesError,
}

const getCategories = () => async dispatch => {
    dispatch(getCategoriesRequest());
    try {
        const { data } = await axios.get('/categories');
        dispatch(getCategoriesSuccess(data.result));
    } catch (error) {
        dispatch(getCategoriesError(error.message));
        
    }
};
export { getCategories };