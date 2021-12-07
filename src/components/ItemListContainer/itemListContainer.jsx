import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getProducts from "../../services/promise"
import ItemList from "./ItemList"

const ItemListContainer = ()=>{


    const [products, setProducts]= useState([]);
    const {category} = useParams();
   
    console.log ("Productos en el hook son: " , category);


    const listaFiltrada = [];


   
    useEffect(() => {
        if (products.length === 0) {
            getProducts
                .then(res => {
                    setProducts(res)
                    if (category !== undefined) {
                        console.log("Los products antes del filter", products)
                        setProducts(res.filter(product => product.category === category))
                        console.log("Tamo en el filter")
                        console.log("Los products", products)
                    }
                }).catch(err => alert("El problema es: ", err))
            console.log("Todo cargado")
        }
    }, [products]) //[Acá van las dependencias que el useEffect mira para ver si se actualiza]
    
    console.log("A ver si cargan", products)
 
    return (

        <div>
        
            <ItemList products={products}/>

        </div>

    )

}

export default ItemListContainer