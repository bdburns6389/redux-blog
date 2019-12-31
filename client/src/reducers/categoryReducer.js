import { mapKeys } from "lodash";
import { FETCH_BLOGS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      var categories = action.payload.map(obj => obj.category);
      return { ...state, ...mapKeys(categories, "id") };
    default:
      return state;
  }
};
