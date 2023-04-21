import { combineReducers } from "redux";

import { ADD_COUNTER, MIN_COUNTER, RESET_COUNTER } from "./Action";
const initialState = { counter: 0 };
export function counterApp(state = initialState, action: any) {
  switch (action.type) {
    case ADD_COUNTER:
      console.log(state.counter);
      return {
        counter: state.counter + 1,
      };

    case MIN_COUNTER:
      return {
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return { counter: 100 };
    default:
      return state;
  }

  // return state;
}
