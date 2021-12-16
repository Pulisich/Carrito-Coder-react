import { React,useState, createContext } from "react";

export const CartContext = createContext([]);


export function CartContextProvider({ children }) {
    //El Provider manda todo lo contenido dentro del context
    //Acá va lo que tengo que tener al alcance de un click en toda la app, contenidos del carro, total, productos, etc.
    const [items, setItems] = useState([
        {id: 1,
        name: "Funda A52",
        quantity: 1}

    ]);

    // const [totalCart, setTotalCart] = useState(0);
    const isInCart = (id) => {
    };

    const addItem = (item, quantity) => {

        // isInCart(id) ?
        //     null
        //     :
        alert("Se agrego un producto al carro");
            setItems([...item, { ...item, quantity: quantity }]);
    };


    console.log("Soy el cart context", CartContext);

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    );

}