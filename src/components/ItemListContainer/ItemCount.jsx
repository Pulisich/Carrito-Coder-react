import {  useState } from "react"

const ItemCount =({addItem, product , stock, initial})=>{

 //La suma debe ser siempre menor o igual que el stock
 //La resta no puede ser menor que initial que es 1


const [quantity, setQuantity] = useState(initial);
//Hook para el contador
//En contador se guarda el valor de la variable que vamos a ir modificando con setContador, useState determina su valor original.
   

const sumItem = () => {
    const newValue = quantity + 1;
       
    if (newValue < stock){
        setQuantity(newValue)
    } else if (newValue > stock) {
        alert("Stock is full");
        setQuantity(stock)
    }
}

const quitItem = () => {
    const newValue = quantity -1
    if (newValue < initial){
        setQuantity(initial)
    } else {
        setQuantity (newValue)
    }

}


    // const onAdd =()=>{
    //     const message1 = `${quantity} producto agregado carro`;
    //     const message2 = `${quantity}  productos agregados al carro`;
    //     if (quantity === 1){
    //         alert(message1);
    //     } else {
    //         alert(message2);
    //     }
    // }

   
    //traemos el context 
    return(

        <div>
            
            <div>
                <button onClick={sumItem} className="botonesCount">+</button>
                
                <button onClick={quitItem} className="botonesCount">-</button>
                
                <h3>{quantity}</h3>

                <button onClick={()=>addItem(product, quantity)} className="botonesCount">Agregar al carro</button>
            </div>

        </div>

    )
}

export default ItemCount