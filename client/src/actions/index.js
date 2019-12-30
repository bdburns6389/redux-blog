import blogs from "../api/blogs";
import { FETCH_BLOGS } from "./types";

export const fetchBlogs = () => async (dispatch, getState) => {
  // getState allows us to access redux store object.
  const response = await blogs.get("/blogs");
  dispatch({ type: FETCH_BLOGS, payload: response.data });
};
