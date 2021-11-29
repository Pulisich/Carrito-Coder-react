import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

