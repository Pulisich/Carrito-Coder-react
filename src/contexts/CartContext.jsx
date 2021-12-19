import { React,useState, createContext } from "react";

export const CartContext = createContext([]);
//Mi context es un array vacío para mandarle los productos cosa que se guarden y los renderice en el carro

export function CartProvider({ children }) {
    //El Provider manda todo lo contenido dentro del context
    //Acá va lo que tengo que tener al alcance de un click en toda la app, contenidos del carro, total, productos, etc.
    
    const [products, setProducts] = useState([]);

    //Función para añadir productos al carro, me da la cantidad también.
    const addItem = (product, quantity) => {
        if(quantity === 1){
            alert("Producto gregado al carro")
    } else {
        alert("Productos agregados al carro")
    };
        setProducts([...products, {...product, quantity : quantity}]);
      
    console.log("Producto: ", product, "Cantidad:", quantity)
    };

    //Función para limpiar el carro
    const clearCart=()=>{
            setProducts([]);
            console.log("El clear cartx");
    }
    
    const [totalCart, setTotalCart] = useState(0);
    
    const total = ()=>{
        const totalCarro= products.map( product => product.price).reduce((prev , next) => prev + next);
          setTotalCart= totalCarro;
         console.log ("El total es de: ", totalCarro)
     }
    // const isInCart = (id) => {
        
    // };

  

    
    

    return (
        <CartContext.Provider value={{ products, addItem, total, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}