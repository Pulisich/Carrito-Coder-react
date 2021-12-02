import { useState, useEffect } from "react"
import getProducts from "../../services/promise"
import ItemList from "./ItemList"

const ItemListContainer = (greeting)=>{


    const [products, setProducts]= useState([])

    console.log ("Productos en el hook son: " , products)

    useEffect(()=>{
        getProducts
        .then(res =>{
            setProducts(res)
        }).catch(err => alert("El problema es: ", err))
    }    , []) //[Acá van las dependencias que el useEffect mira para ver si se actualiza]

  
    
    return (

        <div>
        
            <h1>{greeting="City Phone"}</h1>

            <ItemList products={products}/>

        </div>

    )

}

export default ItemListContainer