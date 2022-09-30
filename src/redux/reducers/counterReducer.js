import { DECREMENT, INCREMENT } from "../types";

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
}
export default counterReducer;
