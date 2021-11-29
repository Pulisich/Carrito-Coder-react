import {Fragment} from 'react'


const ItemDetail = (props) =>{
    const{ name, price, img, category, stock, description} =props.item;
    console.log("Alto detail")

    return(
        <Fragment>

         <h1>{name}</h1> 
         <img src={img} alt="Foto Producto"></img>
         <h2>{description}</h2>
         <h2>{price}</h2>
         <h3>{stock}</h3>
         <h4>{category}</h4>

        </Fragment>
    )
}

export default ItemDetail