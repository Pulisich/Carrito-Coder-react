import { useState } from "react"

const ItemCount =({stock, initial})=>{
    
    console.log("Stock=" , stock)
    
    console.log("Inicial=" , initial)

 //La suma debe ser siempre menor o igual que el stock
 //La resta no puede ser menor que initial que es 1

 //Hook para el contador

    const [contador, setContador] = useState(initial);
//En contador se guarda el valor de la variable que vamos a ir modificando con setContador, useState determina su valor original.
    const addItem = ()=>{
        const newValue = contador + 1;
       
        if (newValue < stock){
            setContador(newValue)
        }
    }

    const quitItem =()=>{
        const newValue = contador -1
        if( newValue < initial){
            setContador(initial)
        }

    }

    const onAdd =()=>{
        const message1 = `${contador} funda agregada al carro`;
        const message2 = `${contador} fundas agregadas al carro`;
        if (contador === 1){
            alert(message1);
        } else {
            alert(message2);
        }
    }
    return(

        <div>
            
            <div>

                <button onClick={quitItem}>-</button>
                <h3>{contador}</h3>
                <button onClick={addItem}>+</button>
                <button onClick={onAdd}>Agregar</button>
            </div>

        </div>

    )
}

export default ItemCount