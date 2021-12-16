import { useState } from "react"


const ItemCount =({item, stock, initial})=>{
    
 //La suma debe ser siempre menor o igual que el stock
 //La resta no puede ser menor que initial que es 1

 

    const [contador, setContador] = useState(initial);
    //Hook para el contador
    //En contador se guarda el valor de la variable que vamos a ir modificando con setContador, useState determina su valor original.
   

const sumItem = () => {
    const newValue = contador + 1;
       
    if (newValue < stock){
        setContador(newValue)
    } else if (newValue > stock) {
        alert("Stock is full");
        setContador(stock)
    }
}

const quitItem = () => {
    const newValue = contador -1
    if (newValue < initial){
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
                <button onClick={sumItem} className="botonesCarro">+</button>
                
                <button onClick={quitItem} className="botonesCarro">-</button>
                
                <h3>{contador}</h3>

                <button onClick={onAdd} className="botonesCarro">Agregar al carro</button>
            </div>

        </div>

    )
}

export default ItemCount