import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getProducts from "../../services/promise"
import ItemList from "./ItemList"

const ItemListContainer = ()=>{


    const [products, setProducts]= useState([]);
    const {category} = useParams();
    //Categoría será igual al parámetro que se le pase  por el Router, como es :category, será igual a lo que digan las rutas de navbar.jsx
    //Si en navbar.jsx le pongo /category/Fundas, category va a ser igual a fundas.
   
    useEffect(() => {
       
            getProducts
                .then(res => {
                    setProducts(res)
                    if (category !== undefined) {
                        setProducts(res.filter(product => product.category === category))
                        
                    }
                }).catch(err => alert("El problema es: ", err))
            console.log("Todo cargado")
        }
    , [category]) 
    
    //Con ésto le digo que, al obtener los productos, si la categoría no está definida en los parámetros de useParams en App.js, 
    //me muestre todos, caso contrario que filtre por categoría.
    
   
 
    return (

        <div>
            <h1>Productos</h1>
            <ItemList products={products}/>

        </div>

    )

}

export default ItemListContainer