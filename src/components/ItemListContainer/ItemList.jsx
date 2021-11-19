import Item from "./Item"

const ItemList = ({products}) =>{

    console.log("Productos en lista: ", products)

    return (
        <div>
          <h3>Funda</h3>
            <Item></Item>
        </div>
    )

}

export default ItemList