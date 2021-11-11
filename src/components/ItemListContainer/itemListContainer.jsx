import ItemCount from "./ItemCount"
const ItemListContainer = (greeting)=>{

    return (

        <div>
        
            <h1>{greeting="City Phone"}</h1>

            <ItemCount stock= {10} initial={1}></ItemCount>

        </div>

    )

}

export default ItemListContainer