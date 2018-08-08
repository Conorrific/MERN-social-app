import axios from "axios";

import { ADD_POST, GET_ERRORS, GET_POST, POST_LOADING } from "./types";

// Add Post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Post
export const getPost = () => dispatch => {
  dispatch(SetPostLoading());
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Set loading state
export const SetPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
