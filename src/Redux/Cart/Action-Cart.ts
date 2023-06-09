import initApiRequest from "../../services/api_request";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY_FROM_CART = "INCREASE_QTY_FROM_CART";
export const INCREASE_QTY_FROM_CARD = "INCREASE_QTY_FROM_CARD";
export const DECREASE_QTY_FROM_CARD = "DECREASE_QTY_FROM_CARD";

export const DECREASE_QTY = "DECREASE_QTY";
export const CLEAR_CART = "CLEAR_CART";

//export const SET_AMOUNT = "SET_AMOUNT";

// export function setAmount(amount: any) {
//   return {
//     type: SET_AMOUNT,
//     payload: amount,
//   };
// }

export const getProductsAction = () => async (dispatch: any) => {
  const response = await initApiRequest("/overallProducts", {}, "GET");
  // console.log(response, "response")
  dispatch({
    type: GET_PRODUCTS,
    payload: response,
  });
};
export const addToCartAction =
  (product: any, amount: any) => async (dispatch: any, other: any) => {
    const temp = { ...product, qty: amount };
    // console.log(temp, "temp");
    const products = await initApiRequest("/cartProducts", {}, "GET");

    if (products.data.find((item: any) => item.id === product.id)) {
      const previousProduct = products.data.find(
        (item: any) => item.id === product.id
      );
      const updatedItem = await initApiRequest(
        `/cartProducts/${product.id}`,
        {
          ...temp,
          qty: previousProduct.qty + amount,
        },
        "PATCH"
      );

      dispatch({
        type: "UPDATE_CART",
        payload: updatedItem.data,
      });
    } else {
      const prod = await initApiRequest("/cartProducts", temp, "POST");
      dispatch({
        type: ADD_TO_CART,
        payload: prod.data,
      });
    }
  };
export const removeFromCartAction =
  (product: any) => async (dispatch: any, getState: any) => {
    const deletedProd = await initApiRequest(
      `/cartProducts/${product.id}`,
      {},
      "DELETE"
    );
    const newProdList = await initApiRequest("/cartProducts", {}, "GET");

    // const {cart :{cart}} = getState()
    // console.log(prod,'prod')
    dispatch({
      type: REMOVE_FROM_CART,
      payload: newProdList.data,
    });
  };
export const decreaseQtyAction =
  (product: any) => async (dispatch: any, getState: any) => {
    // const {cart :{cart}} = getState()
    const temp = { ...product, qty: product.qty - 1 };
    const updatedItem = await initApiRequest(
      `/cartProducts/${product.id}`,
      {
        ...temp,
        qty: temp,
      },
      "PATCH"
    );

    dispatch({
      type: DECREASE_QTY,
      payload: updatedItem?.data,
    });
  };
export const increaseQtyFromCartAction =
  (product: any) => (dispatch: any, getState: any) => {
    // const temp = { ...product, qty: amount };
    dispatch({
      type: INCREASE_QTY_FROM_CART,
      payload: product,
    });
  };
export const increaseQtyFromCardAction =
  (product: any, amount: any) => (dispatch: any, getState: any) => {
    // const temp = { ...product, qty: amount };
    console.log(product, "product");

    dispatch({
      type: INCREASE_QTY_FROM_CARD,
      payload: product,
      amt: amount,
    });
  };
export const deccreaseQtyFromCardAction =
  (product: any, amount: any) => (dispatch: any, getState: any) => {
    const temp = { ...product, qty: amount };
    dispatch({
      type: DECREASE_QTY_FROM_CARD,
      payload: temp,
    });
  };
export const clearCart = () => (dispatch: any) => {
  dispatch({
    type: CLEAR_CART,
  });
};
