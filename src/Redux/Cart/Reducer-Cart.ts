import initApiRequest from "../../services/api_request";

interface ICart {
  cart: any[];
}
const data = async () => {
  const response = await initApiRequest("/cartProducts", {}, "GET");
  return response?.data;
};

const initialState: any = {
  cart: await data(),
};
export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // console.log(state, "state");
      // const productIndex = state?.cart?.findIndex(
      //   (item: any) => item.id === action.payload.id
      // );

      // if (productIndex >= 0) {
      //   const updatedItem = {
      //     ...state.cart[productIndex],
      //     qty: state.cart[productIndex].qty + action.amt, // dincrease the quantity
      //   };
      //   console.log(updatedItem, "updatedItem");
      //   const updatedCart = [...state.cart];
      //   updatedCart[productIndex] = updatedItem;
      //   return {
      //     cart: updatedCart,
      //   };
      // } else {
      // const temp = { ...action.payload, qty: action.amt };
      // const prod = await initApiRequest("/cartProducts", temp, "POST");
      // console.log(prod.data, "prod");
      // console.log(state, "state.cart");
      return {
        cart: [...state?.cart, action.payload],
      };
    // }
    //   return {
    //     cart: [...state.cart, action.payload],
    //   };
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
    case "DECREASE_QTY":
      const productIndex1 = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
    //  console.log(state.cart[productIndex1].qty, "///");
      if (state.cart[productIndex1].qty > 1) {
        state.cart[productIndex1].qty -= 1;
        // const updatedItem = {
        //   ...state.cart[productIndex1],
        //   qty: state.cart[productIndex1].qty - 1, // decrement the quantity
        // };
        // const updatedCart = [...state.cart];
        // updatedCart[productIndex1] = updatedItem;
        return {
          cart: [...state.cart],
        };
      } else {
        return {
          cart: state.cart.filter((item: any) => item.id !== action.payload.id),
        };
      }

    case "INCREASE_QTY_FROM_CART":
      const productIndex2 = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (productIndex2 >= 0) {
        const updatedItem = {
          ...state.cart[productIndex2],
          qty: state.cart[productIndex2].qty + 1, // increase the quantity
        };
        const updatedCart = [...state.cart];
        updatedCart[productIndex2] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          cart: [...state.cart],
        };
      }
    case "INCREASE_QTY_FROM_CARD":
      const productIndex3 = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (productIndex3 >= 0) {
        const updatedItem = {
          ...state.cart[productIndex3],
          qty: state.cart[productIndex2].qty + action.amount, // dincrease the quantity
        };
        const updatedCart = [...state.cart];
        updatedCart[productIndex3] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          cart: [...state.cart],
        };
      }
    case "DECREASE_QTY_FROM_CARD":
      const productIndex4 = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (productIndex4 >= 0) {
        const updatedItem = {
          ...state.cart[productIndex4],
          //  qty: state.cart[productIndex2].qty + 1, // dincrease the quantity
        };
        const updatedCart = [...state.cart];
        updatedCart[productIndex4] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          cart: [...state.cart],
        };
      }
    case "CLEAR_CART":
      state.cart = [];
      return {
        cart: [],
      };
    default:
      return state;
  }
};

// Define the reducer
const initialProductState = {
  products: [],
};
export const getProductReducer = (state = initialProductState, action: any) => {
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
