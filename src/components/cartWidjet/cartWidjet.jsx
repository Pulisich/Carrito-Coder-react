import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Fragment, useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartWidjet = () => {

        const {products} = useContext(CartContext);
        let itemsInCart= products.length;
        
    
        return ( 
                <Fragment>
                        <div className="itemsCart">{itemsInCart}</div>
                        <ShoppingCartIcon />
                </Fragment>        
                         
                        
               )
        
    
}

export default CartWidjet