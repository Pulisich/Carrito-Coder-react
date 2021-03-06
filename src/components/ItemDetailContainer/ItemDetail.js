import { Fragment, useContext } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import ItemListContainer from '../ItemListContainer/itemListContainer';
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart';
import { CartContext } from '../../contexts/CartContext';


const ItemDetail = (props) => {
    const { name, price, img, category, stock, description, quantity } = props.item;
    //ItemDetail recibe por props todo lo relativo a los items del array que después lo uso para renderizar.
    const { addItem, total } = useContext(CartContext);

    return (
        <Fragment>
            <div>
                {stock === 0 && (
                    <h1 className='agotado'>AGOTADO</h1>
                )}
                {stock > 0 &&(
                    <div>
                        <h1>{name}</h1>
                        <img src={img} alt="Foto Producto"></img>
                        <h2>{description}</h2>
                        <h2>{price}</h2>
                        <h3>Stock: {stock}</h3>
                        <h4>{category}</h4>
                    </div>
                )
                }

                <ItemCount product={props} total={total} quantity={quantity} addItem={addItem} stock={stock} initial={1} />


                <button type="button" className="botonesCarro"> <Link to="/cart" element={<Cart />}> Ver carro</Link></button>
                <button type="button" className="botonesCarro"><Link to="/" element={<ItemListContainer />}>Volver</Link></button>


            </div>
        </Fragment>
    )
}

export default ItemDetail