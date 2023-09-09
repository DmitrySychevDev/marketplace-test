import { create } from "zustand";
import { Cart } from "@/types/Cart";

// При каждом изменении CartStore делать мапу [id]:quantity
interface CartData extends Cart {
  quantity: number;
}

type CartStore = {
  carts: CartData[];
  total: number;
  addCart: (cart: Cart) => void;
  removeCart: (cartId: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  carts: [],
  total: 0,
  cartQuantity: {},
  addCart: (cart: Cart) =>
    set((state) => {
      const existrindCard = state.carts.find((cartsItem) => {
        cartsItem.id === cart.id;
      });
      if (existrindCard) {
        existrindCard.quantity++;

        return {
          ...state,
          carts: state.carts,
          total: state.total + 1,
        };
      } else {
        const cartData: CartData = { ...cart, quantity: 1 };
        return {
          ...state,
          carts: { ...state.carts, cartData },
          total: state.total + 1,
        };
      }
    }),
  removeCart: (cartId: number) =>
    set((state) => {
      const existrindCard = state.carts.find((cartsItem) => {
        cartId === cartsItem.id;
      });
      if (!existrindCard) {
        return { ...state };
      }
      if (existrindCard.quantity === 1) {
        return {
          ...state,
          carts: state.carts.filter((cart) => cart.id !== cartId),
          total: state.total - 1,
        };
      }
      existrindCard.quantity--;
      return { ...state, total: state.total - 1 };
    }),
}));
