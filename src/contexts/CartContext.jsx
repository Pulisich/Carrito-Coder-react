import { React,useState, createContext } from "react";

export const CartContext = createContext([]);
//Mi context es un array vacío para mandarle los productos cosa que se guarden y los renderice en el carro

export function CartProvider({ children }) {
    //El Provider manda todo lo contenido dentro del context
    //Acá va lo que tengo que tener al alcance de un click en toda la app, contenidos del carro, total, productos, etc.
    
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    // const [precioFinal, setPrecioFinal]= useState(0);

    //Función para calcular el total del carro
    // const final = ()=>{
    //     if (products.length>0){
    //     const sumando = products.map(product => product.item.price).reduce((prev,next)=> prev + next);
    //     setPrecioFinal(sumando)
    // }}
    //Función para añadir productos al carro, me da la cantidad también.
    const addItem = (product, quantity) => {
        if(quantity === 1){
            alert("Producto gregado al carro")
    } else {
        alert("Productos agregados al carro")
    };
        setProducts([...products, { item: product.item, id: product.item.id, name:product.item.name, price: product.item.price, quantity : quantity}]);
        
    console.log("Producto: ", product);
    setTotal(products.length + 1)
   
    };


    // const totalCart = ({products, quantity}) =>{
    //     setTotal (products.map(product => product.price).reduce((prev, next)=> prev + next)*quantity);
    //     console.log ("El totalCart: ", total);
    // }
    const isInCart = (id) => {
        const existe = products.find((e) => e.id === id);
      
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


      


    // const [totalCart, setTotalCart] = useState(0);
    
    // const total = ()=>{
    //     const totalCarro = newFunction();
    //      console.log ("El total es de: ", totalCarro)

    //     function newFunction() {
    //         const totalCarro = products.map(product => product.price).reduce((prev, next) => prev + next);
    //         setTotalCart = totalCarro;
    //         return totalCarro;
    //     }
    //  }
    // const isInCart = (id) => {
        
    // };

  

    
    

    return (
        <CartContext.Provider value={{ products, addItem, total, clearCart, isInCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );

}