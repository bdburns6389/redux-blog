import { mapKeys } from "lodash";
import { FETCH_BLOGS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      var newState = action.payload.map(obj => {
        return { ...obj, category: obj.category.id };
      });
      return { ...mapKeys(newState, "id") };
    default:
      return state;
  }
};
