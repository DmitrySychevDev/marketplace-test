"use client";

import { FC } from "react";
import Image from "next/image";

import { CartData, useCartStore } from "@/store/CartStore";

import addToBasket from "@/assets/addToBasket.svg";

const QuantityPicker: FC<{ cart: CartData }> = ({ cart }) => {
  const cartItem = useCartStore((state) =>
    state.carts.find((item) => item.id === cart.id)
  );
  const addCart = useCartStore((state) => state.addCart);
  const removeCart = useCartStore((state) => state.removeCart);
  return (
    <div className="flex items-center gap-5">
      <button
        className="text-lg rounded-full border-solid border border-black  w-8 h-8 hover:bg-black hover:text-white"
        onClick={() => {
          removeCart(cart.id);
        }}
      >
        -
      </button>
      <div>{cart.quantity}</div>
      <button
        className="text-lg rounded-full border border-black border-solid w-8 h-8 hover:bg-black hover:text-white"
        onClick={() => {
          addCart(cart);
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
