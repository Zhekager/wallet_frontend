//export const getCategories = state => state.categories.categories;
//export const getTransactionStats = state => state.categories.transactionStats;

const getAllCategories = state => state.categories;

const loading = state => state.categories.isLoading;

const categorySelectors = {
  getAllCategories,
  loading,
};
export default categorySelectors;
