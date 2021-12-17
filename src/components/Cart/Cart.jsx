import {React, useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'

const Cart = () =>{

    const { products, total} = useContext(CartContext);

    console.log("Productos en carro", products);
    console.log ("El total es de: ", total)

    
    return(
    
    <div>

        <h1>Carrito</h1>
        {
            
            products.map((product)=>{
                <div key={product.id}>

                    <h1>{product.name}</h1>
                    <h2>{product.quantity}</h2>
                </div>
            })
        }
        <button>Quitar item</button>
        <button>Limpiar carro</button>
    </div>    
        
    )
}

export default Cart