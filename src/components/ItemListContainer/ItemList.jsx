import Item from "./Item"
// import {collection,  getDocs, getFirestore} from 'firebase/firestore'


const ItemList = ({products}) =>{

    // console.log("Productos en lista: ", products)

    return (
        <div className="productos">
         
          {products.map((prod)=>
          
          <Item  key={prod.id}  product={prod} />)
         
          }
            
        </div>
    )

}

export default ItemList