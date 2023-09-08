import { useState, useEffect } from "react";

import Image from "next/image";

import request from "@/utils/request";

import ChartItem from "@/components/ChartItem";

import { Cart } from "@/types/Cart";

interface Product extends Cart {
  [key: string]: any;
}

interface CartsFetchData {
  carts: Array<{ products: Array<Product> }>;
}

const getCarts = async (): Promise<Cart[]> => {
  const cartsData = await request<CartsFetchData>("GET", "/carts");

  // TODO: Если успею реализовать пагинацию
  const allCarts: Cart[] = cartsData.carts
    .map<Cart[]>((cartItem) => cartItem.products as Cart[])
    .reduce((prev, curr) => [...prev, ...curr]);

  return allCarts;
};

async function Page() {
  const carts = await getCarts();
  return (
    <div className="mt-16 flex-col flex gap-16 drop-shadow-xl">
      {carts &&
        carts.map((chart) => {
          return (
            <ChartItem
              key={chart.id}
              id={chart.id}
              title={chart.title}
              price={chart.price}
            />
          );
        })}
    </div>
  );
}

export default Page;
