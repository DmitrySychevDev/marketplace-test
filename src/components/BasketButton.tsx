"use client";

import { FC } from "react";
import Image from "next/image";

import CartQuantityMark from "./ChartQuantityMark";

import { useCartStore } from "@/store/CartStore";

import { Cart } from "@/types/Cart";

import addToBasket from "@/assets/addToBasket.svg";

const BasketButton: FC<{ cart: Cart }> = ({ cart }) => {
  const cartItem = useCartStore((state) =>
    state.carts.find((item) => item.id === cart.id)
  );
  const addCart = useCartStore((state) => state.addCart);
  return (
    <div className="relative">
      <button
        onClick={() => {
          if (!cartItem) {
            addCart(cart);
          }
        }}
        title="Добавить в корзину"
      >
        <Image src={addToBasket} alt="basket button" className="w-12 h-11" />
        <CartQuantityMark
          className="absolute top-[-10px] right-[-30px]"
          quontity={cartItem ? cartItem.quantity : 0}
        />
      </button>
    </div>
  );
};

export default BasketButton;
