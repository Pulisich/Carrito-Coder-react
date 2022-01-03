import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import getProducts from "../../services/promise"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {


    // const [products, setProducts]= useState([]);
    const filter = useParams();
    //Filter será igual al parámetro que se le pase  por el Router, como es :category, será igual a lo que digan las rutas de navbar.jsx
    //Si en navbar.jsx le pongo /category/Fundas, category va a ser igual a fundas.

    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();
        let itemsCollection = [];
        const direccion = filter.category;
        if (direccion === undefined) {
            itemsCollection = collection(db, "items");
        } else {
            itemsCollection = query(
                collection(db, "items"),
                where("category", "==", filter.category)
            );
        }
        getDocs(itemsCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((document) => ({
                        id: document.id,
                        ...document.data(),
                    }))
                );
            })
    }, [filter]);

    //Con ésto le digo que, al obtener los productos, si la categoría no está definida en los parámetros de useParams en App.js, 
    //me muestre todos, caso contrario que filtre por categoría.



    return (

        <div>

            <h1>Productos</h1>

            <ItemList products={products} />

        </div>

    )

}

export default ItemListContainer