import { Fragment } from "react"



const Item = ({product}) =>{
    console.log("Item: ", product)

    return(
        <Fragment>
            <h1>{product.id}</h1>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <h3>{product.stock}</h3>
        </Fragment>
        
    )
}

export default Item