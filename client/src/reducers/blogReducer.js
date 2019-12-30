import { mapKeys } from "lodash";
import { FETCH_BLOGS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return { ...state, ...mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
