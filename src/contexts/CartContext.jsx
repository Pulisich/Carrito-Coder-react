import { React,useState, createContext } from "react";

export const CartContext = createContext([]);
//Mi context es un array vacío para mandarle los productos cosa que se guarden y los renderice en el carro

export function CartProvider({ children }) {
    //El Provider manda todo lo contenido dentro del context
    //Acá va lo que tengo que tener al alcance de un click en toda la app, contenidos del carro, total, productos, etc.
    const [products, setProducts] = useState([]);

    const addItem = (product, quantity) => {
        if(quantity === 1){
            alert("Producto gregado al carro")
    } else {
        alert("Productos agregados al carro")
    };
        setProducts([...products, {...product, quantity:quantity}]);
    //  Cada vez que se hace click se agrega un producto nuevo  
    };

    const [totalCart, setTotalCart] = useState(0);
    
    const total = (quantity, price)=>{
        const totalCarro= totalCart + quantity*price
        setTotalCart= totalCarro;
    }
   
    // const isInCart = (id) => {
        
    // };

  

    
    

    return (
        <CartContext.Provider value={{ products, addItem, total }}>
            {children}
        </CartContext.Provider>
    );

}