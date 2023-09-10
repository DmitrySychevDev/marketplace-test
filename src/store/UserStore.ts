import { create } from "zustand";
import { Cart } from "@/types/Cart";
import { stat } from "fs";

type UserStore = {
  coins: number;
  dollars: number;
  buyCart: (price: number, paymentMethod: "dollars" | "coins") => void;
};

export const useUserStore = create<UserStore>((set) => ({
  coins: 1000,
  dollars: 1000,
  buyCart: (price: number, paymentMethod) =>
    set((state) => {
      if (state.coins + state.dollars < price) {
        return { ...state };
      }
      if (state[paymentMethod] < price) {
        const remainder = price - state[paymentMethod];

        if (paymentMethod === "coins") {
          return {
            ...state,
            coins: 0,
            dollars: state.dollars - remainder,
          };
        }
        return {
          ...state,
          coins: state.coins - remainder,
          dollars: 0,
        };
      }
      return { ...state, [paymentMethod]: state[paymentMethod] - price };
    }),
}));
