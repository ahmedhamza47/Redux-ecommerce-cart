import React, { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQtyAction,
  increaseQtyFromCartAction,
  removeFromCartAction,
} from "../../Redux/Cart/Action-Cart";
import { HiTrash } from "react-icons/hi";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Msg = ({ closeToast, toastProps, item }: any) => {
  const dispatch = useDispatch();
  const del = () => {
    dispatch(removeFromCartAction(item) as any);
    toast.error(" Item Deleted", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div>
      <p>Are you sure you want to remove this product?</p>
      <div className="flex gap-3 flex-row justify-center mt-3">
        <button
          className=" bg-green-800 px-2 py-1 rounded-lg "
          onClick={() => {
            del();
          }}
        >
          Yes
        </button>
        <button
          className=" bg-red-800 px-2 py-1 rounded-lg  "
          onClick={closeToast}
        >
          No
        </button>
      </div>
    </div>
  );
};
const Cart = () => {
  const [toggleView, setToggleView] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state?.cart?.cart);
  //const qty = useSelector((state: any) => state?.amounts?.amount);
  // console.log(cartItems, "cartItems");
  //console.log(qty, "qty");
  const handleDelete = (item: any) => {
    toast(<Msg item={item} />);
  };
  const increaseCartQty = (item: any) => {
    dispatch(increaseQtyFromCartAction(item) as any);
  };
  const decreaseQty = (item: any) => {
    if (item.qty === 1) {
      toast(<Msg item={item} />);
    } else {
      dispatch(decreaseQtyAction(item) as any);
    }
  };
  const handleCheckout = () => {
    toast.success(
      "You products have been sent to website",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
    dispatch(clearCart() as any);
  };
  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          className="inline-flex gap-4 items-center justify-center w-full p-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => {
            setToggleView(!toggleView);
          }}
        >
          <BsFillCartCheckFill />
        </button>
        {toggleView && (
          <div className=" flex flex-col items-center  absolute right-0 w-56  mt-2  border border-gray-200 rounded-md shadow-lg">
            <div className=" py-2 px-3 text-sm font-medium w-full flex flex-row justify-center text-gray-700 bg-gray-100">
              Your Cart
            </div>

            <div className="flex flex-col items-center">
              {cartItems?.length > 0 ? (
                <div>
                  {cartItems.map((item: any, index: any) => (
                    <div key={index}>
                      <div
                        className="flex flex-row justify-center  py-2 w-56 hover:bg-gray-300  "
                        key={item.id}
                      >
                        <div className="flex flex-row justify-between w-36 ">
                          <div className="flex flex-col items-start">
                            <p className="text-sm text-gray-500">{item.name}</p>
                            {item.qty && (
                              <div className="flex flex-row">
                                <button
                                  className="text-sm"
                                  onClick={() => decreaseQty(item)}
                                >
                                  <AiOutlineMinusSquare />
                                </button>
                                <p className="text-sm text-gray-400 mx-2">
                                  Qty: <span className="ml-1">{item?.qty}</span>
                                </p>
                                <button
                                  className="text-sm"
                                  onClick={() => increaseCartQty(item)}
                                >
                                  <AiOutlinePlusSquare />
                                </button>
                              </div>
                            )}
                          </div>
                          <button onClick={() => handleDelete(item)}>
                            <HiTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-row justify-center p-2">
                    <button
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      onClick={() => handleCheckout()}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col p-2">
                  <p className="text-sm text-gray-500">Your cart is empty.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  cart: state.cart,
  amount: state?.amounts?.amount,
});

export default connect(mapStateToProps)(Cart);
