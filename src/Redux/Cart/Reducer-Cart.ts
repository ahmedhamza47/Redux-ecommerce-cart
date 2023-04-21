import initApiRequest from "../../services/api_request";
import { IActionSchema } from "../Schema";
import { IProductSchema } from "../Schema";
interface ICart {
  cart: any[];
}
const data = async () => {
  const response = await initApiRequest("/cartProducts", {}, "GET");
  return response?.data;
};

const initialState: ICart = {
  cart: await data(),
};
export const cartReducer = (state = initialState, action: IActionSchema) => {
  switch (action.type) {
    case "ADD_TO_CART":
    
      return {
        cart: [...state?.cart, action.payload],
      };
   
    case "UPDATE_CART":
      
      const previousProdIndex = state.cart.findIndex(
        (item: any) => item.id == action.payload.id
      );
      return {
        ...state,
        cart: state.cart
          .slice(0, previousProdIndex)
          .concat(action.payload)
          .concat(state.cart.slice(previousProdIndex + 1)),
      };
    case "REMOVE_FROM_CART":
      return {
        cart: [...action.payload],
      };
  
   
    case "CLEAR_CART":
  
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};

// Define the reducer
const initialProductState:IProductSchema = {
  products: [],
};
export const getProductReducer = (state = initialProductState, action: IActionSchema) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
      };
    default:
      return state;
  }
};
