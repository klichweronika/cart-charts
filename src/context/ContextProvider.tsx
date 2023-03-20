import { useState } from "react";
import { Cart } from "../common/types/cartTypes";
import Context from "./Context";

type ContentProps = {
    children: JSX.Element[];
}

export default function ContextProvider({ children }: ContentProps) {

    const [selectedCart, setSelectedCart] = useState<Cart | null>(null);

    const [carts, setCarts] = useState<Cart[]>([])

    const [cartInfoVisible, setCartInfoVisible] = useState(false)

    return (
        <Context.Provider value={{ selectedCart, setSelectedCart, carts, setCarts, cartInfoVisible, setCartInfoVisible }}>
            {children}
        </Context.Provider>
    );
};

