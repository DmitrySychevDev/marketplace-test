import { FC, ReactNode } from "react";

import { Cart } from "@/types/Cart";

const ChartItem: FC<ChartItemProps> = ({ id, title, price, actions }) => {
  return (
    <div className="px-14 py-9 bg-gray-200 flex justify-between">
      <div className="flex items-center gap-10">
        <p className="text-gray-500 text-3xl">Артикул: {id}</p>
        <h3 className="text-3xl">{title}</h3>
      </div>
      <div className="flex items-center gap-12">
        <p className="text-2xl">{price} $</p>
        {actions}
      </div>
    </div>
  );
};

interface ChartItemProps extends Cart {
  actions?: ReactNode;
}

export default ChartItem;
