import request from "@/utils/request";

import ChartItem from "@/components/ChartItem";
import BasketButton from "@/components/BasketButton";

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
    .reduce((prev, curr) => {
      const addedCarts = prev.map((item) => item.id);
      const uniqueCarts = curr.filter((item) => !addedCarts.includes(item.id));
      return [...prev, ...uniqueCarts] as Cart[];
    });

  return allCarts;
};

async function Page() {
  const carts = await getCarts();
  return (
    <div className="mt-16 flex-col flex gap-16 drop-shadow-xl">
      {carts &&
        carts.map((cart) => {
          return (
            <ChartItem
              key={cart.id}
              id={cart.id}
              title={cart.title}
              price={cart.price}
              actions={
                <BasketButton
                  cart={{ id: cart.id, title: cart.title, price: cart.price }}
                />
              }
            />
          );
        })}
    </div>
  );
}

export default Page;
