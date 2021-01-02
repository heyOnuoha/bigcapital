import ApiService from 'services/ApiService';
import t from 'store/types';

export const submitItemCategory = ({ form }) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      ApiService.post('item_categories', form)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const { response } = error;
          const { data } = response;

          reject(data?.errors);
        });
    });
};
export const fetchItemCategories = ({ query }) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: t.SET_DASHBOARD_REQUEST_LOADING,
      });
      dispatch({
        type: t.ITEM_CATEGORIES_TABLE_LOADING,
        payload: {
          loading: true,
        },
      });
      ApiService.get('item_categories', { params: { ...query } })
        .then((response) => {
          dispatch({
            type: t.ITEMS_CATEGORY_LIST_SET,
            categories: response.data.item_categories,
          });
          dispatch({
            type: t.SET_DASHBOARD_REQUEST_COMPLETED,
          });
          dispatch({
            type: t.ITEM_CATEGORIES_TABLE_LOADING,
            payload: {
              loading: false,
            },
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export const editItemCategory = (id, form) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      ApiService.post(`item_categories/${id}`, form)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const { response } = error;
          const { data } = response;

          reject(data?.errors);
        });
    });
};

export const deleteItemCategory = (id) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      ApiService.delete(`item_categories/${id}`)
        .then((response) => {
          dispatch({
            type: t.CATEGORY_DELETE,
            payload: { id },
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export const deleteBulkItemCategories = ({ ids }) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      ApiService.delete(`item_categories`, { params: { ids } })
        .then((response) => {
          dispatch({
            type: t.ITEM_CATEGORIES_BULK_DELETE,
            payload: { ids },
          });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
};
