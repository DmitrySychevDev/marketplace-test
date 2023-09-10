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
        <Image
          src={addToBasket}
          alt="basket button"
          className="2xl:w-12 2xl:h-11 xl:w-10 xl:h-9 lg:w-9 lg:h-8"
        />
        <CartQuantityMark
          className="absolute top-[-20px] right-[-30px]"
          quontity={cartItem ? cartItem.quantity : 0}
        />
      </button>
    </div>
  );
};

export default BasketButton;
