import { createContext } from "react";
import { Cart } from "../common/types/cartTypes";

interface CartContextType {
    selectedCart: Cart | null;
    setSelectedCart: (cart: Cart | null) => void;
    
    carts: Cart[] | [],
    setCarts: (carts: Cart[] | []) => void;

    cartInfoVisible:  boolean,
    setCartInfoVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<CartContextType>({
    selectedCart: null,
    setSelectedCart: () => {},

    carts: [],
    setCarts: () => {},

    cartInfoVisible:  false,
    setCartInfoVisible: () => {},

});

export default Context;

