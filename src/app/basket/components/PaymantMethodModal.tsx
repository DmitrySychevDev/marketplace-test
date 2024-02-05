import { FC, useContext, useState } from "react";

import Modal from "@/components/Modal";
import BuyingContext from "../buying.ctx";

import { CartData } from "@/store/CartStore";

const PaymantMethodModal: FC<{
  isModalOpen: boolean;
  setIsModalOpen: Function;
}> = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useContext(BuyingContext);
  return (
    <>
      {cart && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          className="w-1/2"
        >
          <div className="flex flex-col gap-5">
            <p className="2xl:text-4xl xl:text-3xl lg:text-2xl">
              Покупка товара:{" "}
              <span className="font-semibold">{cart.title}</span>
            </p>
            <div className="flex flex-col gap-2">
              <p className="2xl:text-3xl xl:text-xl lg:text-lg">
                Количество:{" "}
                <span className="font-semibold">{cart.quantity}</span>
              </p>
              <p className="2xl:text-3xl xl:text-xl lg:text-lg">
                Стоимость: <span className="font-semibold">{cart.price}</span>
              </p>
              <p className="2xl:text-3xl xl:text-xl lg:text-lg">
                Итого:{" "}
                <span className="font-semibold">
                  {cart.price * cart.quantity} $
                </span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PaymantMethodModal;
