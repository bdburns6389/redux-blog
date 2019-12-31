import { mapKeys } from "lodash";
import { FETCH_BLOGS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      var comments = [];
      action.payload.map(blog => {
        blog.comments.map(comment => comments.push(comment));
      });
      return { ...state, ...mapKeys(comments, "id") };
    default:
      return state;
  }
};
