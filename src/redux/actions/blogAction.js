import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

export const loadBlog = (data) => {
    return {
      type: GET_CONTENT,
      payload: data,
    };
  };

  export const addBlog = (blog) => {
    return {
      type: ADD_CONTENT,
      payload: blog,
    };
  };

  export const removeBlog = (id) => {
    return {
      type: DELETE_CONTENT,
      payload: id,
    };
  };