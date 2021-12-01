import {Fragment} from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import ItemListContainer from '../ItemListContainer/itemListContainer';
import {Link} from 'react-router-dom'

const ItemDetail = (props) =>{
    const{ name, price, img, category, stock, description} =props.item;
    console.log("Alto detail")

    return(
        <Fragment>
        <div>
            <h1>{name}</h1> 
            <img src={img} alt="Foto Producto"></img>
            <h2>{description}</h2>
            <h2>{price}</h2>
            <h3>{stock}</h3>
            <h4>{category}</h4>
            <ItemCount stock={stock}/>

            <button type="button" className="botonesCarro"> Ver carro</button>
            <button type="button" className="botonesCarro"><Link to="/" element={<ItemListContainer/>}>Volver</Link></button>
        </div>
        </Fragment>
    )
}

export default ItemDetail