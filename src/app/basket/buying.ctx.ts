import { useState, createContext } from "react";

import { CartData } from "@/store/CartStore";

const BuyingContext = createContext<CartData | undefined>(undefined);

export default BuyingContext;
