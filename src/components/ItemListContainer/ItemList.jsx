import Item from "./Item"

const ItemList = ({products}) =>{

    console.log("Productos en lista: ", products)

    return (
        <div>
          {products.map((prod)=>
          
          <Item  key={prod.id}  product={prod} />)
         
          }
            
        </div>
    )

}

export default ItemList