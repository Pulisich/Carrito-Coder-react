import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"



const ItemListContainer = (greeting)=>{


    const data = [{
        "id" : 1,
        "name": "Funda A58",
        "price": "800",
        "stock": "10",
        "category": "Fundas"

    }];


    const [productos, setProductos]= useState([])

    console.log ("Productos en el hook son: " , productos)

    useEffect(()=>{
        promesa
        .then(res =>{
            setProductos(res)
        }).catch(err => alert("El problema es: ", err))
    }    , []) //[Acá van las dependencias que el useEffect mira para ver si se actualiza]

    const promesa = new Promise((resolve , reject)=>{
        resolve(data);
        reject('Ooops! ¡Algo salió mal!');
    })



    return (

        <div>
        
            <h1>{greeting="City Phone"}</h1>

            <ItemCount stock= {10} initial={1}></ItemCount>

        </div>

    )

}

export default ItemListContainer