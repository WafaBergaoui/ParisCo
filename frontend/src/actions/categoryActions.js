import Axios from "axios";
import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  ADD_NEW_CATEGORY_REQUEST,
  ADD_NEW_CATEGORY_SUCCESS,
  ADD_NEW_CATEGORY_FAILURE,
  UPDATE_CATEGORIES_REQUEST,
  UPDATE_CATEGORIES_SUCCESS,
  UPDATE_CATEGORIES_FAILURE,
  DELETE_CATEGORIES_REQUEST,
  DELETE_CATEGORIES_SUCCESS,
  DELETE_CATEGORIES_FAILURE,
} from "../constants/categoryConstants";

const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORIES_REQUEST });
    const res = await Axios.get(`/api/category/getcategory`);
    console.log(res);
    if (res.status === 200) {
      const { categoryList } = res.data;

      dispatch({
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch, getState) => {
    dispatch({ type: ADD_NEW_CATEGORY_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    try {
      const res = await Axios.post(`/api/category/create`, form,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      if (res.status === 201) {
        dispatch({
          type: ADD_NEW_CATEGORY_SUCCESS,
          payload: { category: res.data.category },
        });
      } else {
        dispatch({
          type: ADD_NEW_CATEGORY_FAILURE,
          payload: res.data.error,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};


export const updateCategories = (form) => {
  return async (dispatch,getState) => {
    dispatch({ type: UPDATE_CATEGORIES_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    const res = await Axios.post(`/api/category/update`, form,
    {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    if (res.status === 201) {
      dispatch({ type: UPDATE_CATEGORIES_SUCCESS });
      dispatch(getAllCategory());
    } else {
      const { error } = res.data;
      dispatch({
        type: UPDATE_CATEGORIES_FAILURE,
        payload: { error },
      });
    }
  };
};

export const deleteCategories = (ids) => {
  return async (dispatch,getState) => {
    dispatch({ type: DELETE_CATEGORIES_REQUEST });
    const {
        userSignin: { userInfo },
      } = getState();
    const res = await Axios.post(`/api/category/delete`, {
        payload: {
          ids,
        },
      },
    {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    if (res.status == 201) {
      dispatch(getAllCategory());
      dispatch({ type: DELETE_CATEGORIES_SUCCESS });
    } else {
      const { error } = res.data;
      dispatch({
        type: DELETE_CATEGORIES_FAILURE,
        payload: { error },
      });
    }
  };
};

export { getAllCategory };
