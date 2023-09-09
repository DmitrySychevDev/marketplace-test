"use client";

import { FC } from "react";
import Image from "next/image";

import { useCartStore } from "@/store/CartStore";

import HeaderQuantityMark from "./ChartQuantityMark";

import logo from "@/assets/logo.png";
import basket from "@/assets/basket.png";
import coinLogo from "@/assets/coin.svg";
import avatar from "@/assets/avatar.png";

const Header: FC = () => {
  const cartsCount = useCartStore((state) => state.total);

  return (
    <header className="flex justify-between align-middle 2xl:px-14 2xl:py-6 lg:px-8 lg:py-5 shadow-md">
      <div className="flex justify-between items-center gap-4">
        <div>
          <Image
            className="2xl:w-18 2xl:h-18 lg:w-12 lg:h-12"
            src={logo}
            alt="logo"
          />
        </div>
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-xl font-[Marmelad]">
          Online shop
        </h1>
      </div>
      <div className="flex items-center gap-14">
        <div className="relative">
          <Image src={basket} alt="basket" className="w-11 h-13" />
          <HeaderQuantityMark
            quontity={cartsCount}
            className="absolute top-[-10px] right-[-35px]"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="text-sm">
            <p>1000 $</p>
            <div className="flex gap-1">
              <p>1000</p>
              <div>
                <Image src={coinLogo} alt="coins" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="w-14 h-14">
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
