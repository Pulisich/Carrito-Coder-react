import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getProducts from "../../services/promise"
import ItemList from "./ItemList"

const ItemListContainer = ()=>{


    const [products, setProducts]= useState([]);
    const {category} = useParams();
   
    console.log ("Productos en el hook son: " , category);



   
    useEffect(() => {
        if (products.length === 0) {
            getProducts
                .then(res => {
                    setProducts(res)
                    if (category !== undefined) {
                        setProducts(res.filter(product => product.category === category))
                        
                    }
                }).catch(err => alert("El problema es: ", err))
            console.log("Todo cargado")
        }
    }, []) //[Acá van las dependencias que el useEffect mira para ver si se actualiza]
    
    console.log("Filtrados", products)
 
    return (

        <div>
        
            <ItemList products={products}/>

        </div>

    )

}

export default ItemListContainer