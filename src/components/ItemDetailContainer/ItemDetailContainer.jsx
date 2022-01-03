import { useState, useEffect } from "react"
// import getProducts from "../../services/promise"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({}); //eso se pone cuando recibís datos de fuera
    const { id } = useParams();



    useEffect(() => {

        const db = getFirestore();

        const itemRef = doc(db, "items", id);

        getDoc(itemRef).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() })
            
        })
        
        .catch(err => console.log("El problema es", err));
    }, [id]);
  
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