import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducer } from "./TODO/ReducerTODO/Reducer";
import { counterApp } from "./Counter/Reducer";
import { rootReducer } from "./RootReducer";

const initialState = {}; //initial state of the store

const middleware = [thunk]; //there can be multiple middlewares here

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type TStore = ReturnType<typeof rootReducer>;

export default store;
