import React, { useEffect, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import Laptop from "../../assets/Images/laptop.jpg";
import Iphone from "../../assets/Images/iphone.jpg";
import Shoes from "../../assets/Images/download.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCartAction,
  deccreaseQtyFromCardAction,
  getProductsAction,
  decreaseQtyAction,
  increaseQtyFromCardAction,
} from "../../Redux/Cart/Action-Cart";
import { connect, useDispatch, useSelector } from "react-redux";

const Card = ({ card, source, name, id }: any) => {
  const getData = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(card, "cardssss");
 // console.log(data, "data");
  const [amount, setAmount] = useState(0);
  const addToCart = (card: any) => {
    if(amount > 0){

    dispatch(addToCartAction(card, amount) as any);
    notify();
    setAmount(0);
    }
    else{
      toast.error('Please select quantity',{
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  };
  const increaseQty = (item: any) => {
    setAmount(amount + 1);
   // dispatch(increaseQtyFromCardAction(item, amount) as any);
 // console.log(item, "item")
  };
  const decreaseQty = (item: any) => {
    if(amount >0){

      setAmount(amount - 1)
      dispatch(deccreaseQtyFromCardAction(item,amount) as any);
    }
    else{
      return
    }
  };
  const notify = () => {
    toast.success(" Item added to cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div>
      <img className="h-48 w-full object-cover" src={source} alt={name} />
      <div className="px-4 py-2">
        <h3 className="text-gray-700 font-semibold text-lg mb-2">{name}</h3>

        <div className="flex flex-row justify-center my-3">
          <button
            className="text-xl"
            onClick={() => {
              decreaseQty(card);
            }}
          >
            <AiOutlineMinusSquare />
          </button>
          <p className="text-gray-500 mx-3">
            {/* {getData[card.id - 1]?.qty ? getData[card.id - 1].qty : 0} */}
            {/* {getData.length > 0
                    ? getData?.map((item: any) => {
                        if (item.id === card.id) {
                          return item.qty;
                        }
                        return 0;
                        console.log(item, "item");
                      })
                    : 0} */}
            {/* 
            {getData.find((item: any) => item.id === id)?.qty || 0} */}
            {amount}
          </p>
          <button className="text-xl" onClick={() => increaseQty(card)}>
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
