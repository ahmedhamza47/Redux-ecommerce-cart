import { TodoReducer } from "./TODO/ReducerTODO/Reducer";
import { counterApp } from "./Counter/Reducer";
import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer, getProductReducer } from "./Cart/Reducer-Cart";
export const rootReducer = combineReducers({
  
  cart: cartReducer,
  products: getProductReducer,
});
