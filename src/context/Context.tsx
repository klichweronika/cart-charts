import { createContext } from "react";
import { Cart } from "../common/types/cartTypes";

type CartContextType = {
    selectedCart: Cart | null;
    setSelectedCart: (cart: Cart | null) => void;
    
    carts: Cart[] | [],
    setCarts: (carts: Cart[] | []) => void;

    cartDetailsOpen:  boolean,
    setCartDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<CartContextType>({
    selectedCart: null,
    setSelectedCart: () => {},

    carts: [],
    setCarts: () => {},

    cartDetailsOpen:  false,
    setCartDetailsOpen: () => {},

});

export default Context;

