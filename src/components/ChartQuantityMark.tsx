import { FC } from "react";

const CartQuantityMark: FC<{ quontity: number; className?: string }> = ({
  quontity,
  className,
}) => {
  return (
    <>
      {quontity > 0 && (
        <div
          className={`xl:p-2 lg:p-1 2xl:w-10 2xl:h-10 xl:h-9 xl:w-9 lg:h-8 lg:w-8 bg-red-600 text-white rounded-[50%] text-center ${className}`}
        >
          {quontity}
        </div>
      )}
    </>
  );
};

export default CartQuantityMark;
