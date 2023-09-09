import { FC } from "react";

const CartQuantityMark: FC<{ quontity: number; className?: string }> = ({
  quontity,
  className,
}) => {
  return (
    <>
      {quontity > 0 && (
        <div
          className={`p-2 w-10 h-10 bg-red-600 text-white rounded-[50%] text-center ${className}`}
        >
          {quontity}
        </div>
      )}
    </>
  );
};

export default CartQuantityMark;
