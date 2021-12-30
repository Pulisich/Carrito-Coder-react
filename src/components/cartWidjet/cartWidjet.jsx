import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Fragment, useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartWidjet = () => {

        const {products} = useContext(CartContext);
        let itemsInCart= products.length;
        //Solo se va a renderizar si hay un producto en el cart
    
        return ( 
                <Fragment>
                        <div className="itemsCart">{products.length >=1 && (itemsInCart)}</div> 
                        <ShoppingCartIcon />
                </Fragment>        
                         
                        
               )
        
    
}

export default CartWidjet