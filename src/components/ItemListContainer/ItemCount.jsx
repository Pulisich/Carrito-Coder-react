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
        const newValue = setContador(contador +1);
       
        if (newValue < {stock}){
            setContador(newValue)
        }
    }

    const quitItem =()=>{
        const newValue = setContador(contador -1)
        if( newValue < initial){
            setContador(initial)
        }

    }

    const onAdd =()=>{
        const message1 = `${contador} producto agregado carro`;
        const message2 = `${contador}  productos agregados al carro`;
        if (contador === 1){
            alert(message1);
        } else {
            alert(message2);
        }
    }
    return(

        <div>
            
            <div>
                <button onClick={addItem} className="botonesCarro">+</button>
                
                <button onClick={quitItem} className="botonesCarro">-</button>
                
                <h3>{contador}</h3>

                <button onClick={onAdd} className="botonesCarro">Agregar al carro</button>
            </div>

        </div>

    )
}

export default ItemCount