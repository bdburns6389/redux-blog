import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import categoryReducer from "./categoryReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  blogs: blogReducer,
  categories: categoryReducer,
  comments: commentReducer
});
