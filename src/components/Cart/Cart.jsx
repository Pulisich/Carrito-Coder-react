import {React, useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'

const Cart = () =>{

    const { items, addItem } = useContext(CartContext);

    console.log("Los items", items);


    return(
    
    <div>

        <h1>Carrito</h1>
        {
            items.map((item)=>{
                <div key={item.id}>

                    <h1>{item.name}</h1>

                </div>
            })
        }
        
    </div>    
        
    )
}

export default Cart