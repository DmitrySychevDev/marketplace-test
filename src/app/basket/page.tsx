"use client";

import ChartItem from "@/components/ChartItem";
import QuantityPicker from "@/components/QuantityPicker";

import { useCartStore } from "@/store/CartStore";

function Page() {
  const { carts, total } = useCartStore((state) => state);
  return (
    <div className="px 2xl:mt-32 mt-28 flex-col flex 2xl:gap-16 xl:gap-12 lg:gap-10 drop-shadow-xl">
      <h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl font-[Marmelad] 2xl:px-14 xl:px-12 lg:px-8">
        Товары в корзине ({total})
      </h2>
      {carts &&
        carts.map((cart) => {
          return (
            <ChartItem
              key={cart.id}
              id={cart.id}
              title={cart.title}
              price={cart.price}
              actions={
                <>
                  <QuantityPicker cart={cart} />
                </>
              }
            />
          );
        })}
    </div>
  );
}

export default Page;
