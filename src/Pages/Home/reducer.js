import { ADD_ITEM} from "./constants";
import produce from "immer";

export const initialState = {
  items: {
   
  },  
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_ITEM:
        draft.items = action.value;
        break;
      default:
        return draft;
    }
  });
export default homeReducer;
