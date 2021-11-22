import { createAction } from '@reduxjs/toolkit';

export const getCategoriesRequest = createAction(
    'categories/getCategoriesRequest',
);
export const getCategoriesSuccess = createAction(
    'categories/getCategoriesSuccess',
);