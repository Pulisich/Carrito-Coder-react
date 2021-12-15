import { useState, useEffect } from "react"
import getProducts from "../../services/promise"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = ()=>{

    const [item, setItem]= useState({}); //eso se pone cuando recibís datos de fuera

    // // console.log ("Item: ", item);
    // console.log(useParams);

    const {id} = useParams();
    //acá le digo que el id del producto será igual al parámetro que me pasen por la ruta
    //  console.log("Id de useParams", id);
    //  console.log ("Tipo de Dato Id:", typeof id);



    useEffect(()=>{
        getProducts    
        .then(res =>{
            setItem(res.find((product)=> product.id === parseInt(id)))
        }).catch(err => alert("El problema es: ", err))
    }    , [id])   

//Con ésto le digo que obenga los productos.
//Una vez esto hecho, le pido que me encuentre los productos de acuerdo a su id.

    return (

        <div>
            
            <ItemDetail item={item}/>
        {/* Le pasamos el item a ItemDetail */}
        </div>

    )

}

export default ItemDetailContainer