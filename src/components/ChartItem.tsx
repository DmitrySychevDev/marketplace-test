import { FC, ReactNode } from "react";

import { Cart } from "@/types/Cart";

const ChartItem: FC<ChartItemProps> = ({ id, title, price, actions }) => {
  return (
    <div className="2xl:px-14 2xl:py-9 xl:px-12 xl:py-8 lg:px-8 lg:py-6 bg-gray-200 flex justify-between">
      <div className="flex items-center gap-10">
        <p className="text-gray-500 2xl:text-3xl xl:text-2xl lg:text-lg">
          Артикул: {id}
        </p>
        <h3 className="2xl:text-3xl xl:text-2xl lg:text-lg">{title}</h3>
      </div>
      <div className="flex items-center gap-12">
        <p className="2xl:text-3xl xl:text-2xl lg:text-lg">{price} $</p>
        {actions}
      </div>
    </div>
  );
};

interface ChartItemProps extends Cart {
  actions?: ReactNode;
}

export default ChartItem;
