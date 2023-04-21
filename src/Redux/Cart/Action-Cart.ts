import initApiRequest from "../../services/api_request";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DECREASE_QTY_FROM_CARD = "DECREASE_QTY_FROM_CARD";
export const CLEAR_CART = "CLEAR_CART";


export const getProductsAction = () => async (dispatch: any) => {
  try{
    const response = await initApiRequest("/overallProducts", {}, "GET");

    dispatch({
      type: GET_PRODUCTS,
      payload: response,
    });
  }
  catch(err){
    console.log(err, 'please start the json server first')
  }
  // console.log(response, "response")
};
export const addToCartAction =
  (product: any, amount: any) => async (dispatch: any, other: any) => {
    const temp = { ...product, qty: amount , price: product.price * amount};
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
          price: product.price * (previousProduct.qty + amount),
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
    const temp = { ...product, qty: product.qty - 1, price: product.price - product.price/product.qty };
    const updatedItem = await initApiRequest(
      `/cartProducts/${product.id}`,
      {
      ...temp
      },
      "PATCH"
    );

    dispatch({
      type:  "UPDATE_CART",
      payload: updatedItem.data,
    });
  };
export const increaseQtyFromCartAction =
  (product: any) =>async (dispatch: any, getState: any) => {
    const temp = { ...product, qty: product.qty +1 , price: product.price +product.price/product.qty };
    const updatedItem = await initApiRequest(
      `/cartProducts/${product.id}`,
      {
      ...temp
      },
      "PATCH"
    );

    dispatch({
      type:  "UPDATE_CART",
      payload: updatedItem.data,
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
export const clearCart = (ids:any) => async(dispatch: any) => {
    
    ids.forEach(async (id:any) => {
     // console.log(id, "//////////////////")
  await initApiRequest(`/cartProducts/${id}`, {}, "DELETE");
    });
  const newCartList = await initApiRequest("/cartProducts", {}, "GET");

  dispatch({
    type: CLEAR_CART,
    payload: newCartList.data,
   
  });
};


