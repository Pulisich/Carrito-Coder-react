import { React,useState, createContext } from "react";

export const CartContext = createContext([]);
//Mi context es un array vacío para mandarle los productos cosa que se guarden y los renderice en el carro

export function CartProvider({ children }) {
    //El Provider manda todo lo contenido dentro del context
    //Acá va lo que tengo que tener al alcance de un click en toda la app, contenidos del carro, total, productos, etc.
    
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    

    //Función para añadir productos al carro, me da la cantidad también.
    const addItem = (product, quantity) => {
        if(quantity === 1){
            alert("Producto gregado al carro")
    } else {
        alert("Productos agregados al carro")
    };
        isInCart(product.item.id) //Acá me chequea si el tiem está, no lo toques, solo actualizá la cantidad.
        ?
        setProducts(products.map((prod)=>{
            if(prod.id === product.item.id){
              prod.quantity += quantity ;
             }
           
            return prod
        }))
        :
        setProducts([...products, { item: product.item, id: product.item.id, name:product.item.name, price: product.item.price, quantity : quantity}]);
        
    console.log("Producto: ", product);
    setTotal(products.length + 1)
   
    };
    // Función que busca los duplicados
    const isInCart = (id) => {
        const existe = products.find((product) => product.item.id === id);
      
        return existe;
        

      };

    //Función para limpiar el carro
    const clearCart=()=>{
            setProducts([]);
            console.log("Carro vacío");
            alert("El carro está vacío")
            setTotal(0);
    }
    //función para remover un item
     const removeItem = (id) => {
       
        const deleted = products.filter((product) => product.item.id !== parseInt(id));
        
        setProducts(deleted);
        setTotal(products.length - 1);
       
        
         alert("Se quitó un producto")
       };


      


    
    

    return (
        <CartContext.Provider value={{ products, addItem, total, clearCart, isInCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );

}