import React, { useEffect, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCartAction,
  deccreaseQtyFromCardAction,
} from "../../Redux/Cart/Action-Cart";
import { useDispatch } from "react-redux";
import { ICardSchema, ICartSchema } from "./cart-schema";
import { Dispatch } from "redux";

const Card = ({ card, src, name, id, price }: ICartSchema ) => {
  const dispatch = useDispatch();
  //console.log(card, "cardssss");
  // console.log(data, "data");
  const [amount, setAmount] = useState(0);
  const addToCart = (card: ICardSchema) => {
    if (amount > 0) {
      dispatch<any>(addToCartAction(card, amount));
      notify();
      setAmount(0);
    } else {
      toast.error("Please select quantity", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const increaseQty = () => {
    setAmount(amount + 1);
    // dispatch(increaseQtyFromCardAction(item, amount) as any);
    // console.log(item, "item")
  };
  const decreaseQty = (item: ICardSchema) => {
    if (amount > 0) {
      setAmount(amount - 1);
      dispatch(deccreaseQtyFromCardAction(item, amount) as any);
    } else {
      return;
    }
  };
  const notify = () => {
    toast.success(" Item added to cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div>
      <img className="h-48 w-full object-cover" src={src} alt={name} />
      <div className="px-4 py-2">
        <h3 className="text-gray-700 font-semibold text-lg mb-2">{name}</h3>
        <h3 className="text-gray-700 font-semibold text-lg mb-2">${price}</h3>

        <div className="flex flex-row justify-center my-3">
          <button
            className="text-xl"
            onClick={() => {
              decreaseQty(card);
            }}
          >
            <AiOutlineMinusSquare />
          </button>
          <p className="text-gray-500 mx-3">{amount}</p>
          <button className="text-xl" onClick={() => increaseQty()}>
            <AiOutlinePlusSquare />
          </button>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            addToCart(card);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
