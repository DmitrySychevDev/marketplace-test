import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal: FC<{
  isOpen: boolean;
  setIsOpen: Function;
  className: string;
  children: ReactNode;
}> = ({ isOpen, setIsOpen, className, children }) => {
  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <div
              className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 display flex flex-col justify-center items-center overflow-hidden z-20"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div
                className={`mx-auto bg-white shadow-md ${className} p-8 rounded-xl`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {children}
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </>
  );
};

export default Modal;
