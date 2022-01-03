import { useState, useEffect } from "react"
// import getProducts from "../../services/promise"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({}); //eso se pone cuando recibís datos de fuera
    const { id } = useParams();



    useEffect(() => {

        const db = getFirestore();

        const itemCollection = collection(db, "items");

        getDocs(itemCollection).then((snapshot) => {
            setItem(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            
        })
        
        .catch(err => console.log("El problema es", err));
    }, [id]);
    console.log("El item", item)
    // // console.log ("Item: ", item);
    // console.log(useParams);

    //acá le digo que el id del producto será igual al parámetro que me pasen por la ruta
    //  console.log("Id de useParams", id);
    //  console.log ("Tipo de Dato Id:", typeof id);



    // useEffect(()=>{
    //     getProducts    
    //     .then(res =>{
    //         setItem(res.find((product)=> product.id === parseInt(id)))
    //     }).catch(err => alert("El problema es: ", err))
    // }    , [id])   

    //Con ésto le digo que obtenga los productos.
    //Una vez esto hecho, le pido que me encuentre los productos de acuerdo a su id.

    return (

        <div>

            <ItemDetail item={item} />
            {/* Le pasamos el item a ItemDetail */}
        </div>

    )

}

export default ItemDetailContainer