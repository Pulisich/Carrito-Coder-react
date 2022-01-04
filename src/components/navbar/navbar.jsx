import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidjet from '../cartWidjet/cartWidjet';
import {Link} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/itemListContainer'
import Cart from '../Cart/Cart';
import Home from '../../Home';

export default function NavBar() {
  
  return (
    <Box>
      <AppBar position="static">
        
        <Toolbar>

         <Button color="inherit">
         
         <Link to="/cart" element={<Cart/>}>
         
           <CartWidjet/>
            
          </Link>
          
           
          </Button> 
          
          <Typography variant="h4" component="div"  className="title">
          
            CityPhone
          
          </Typography>
         
          <Button color="inherit"><Link to="/home" element={<Home/>}>Home</Link> </Button>
          <Button color="inherit"><Link to="/" element={<ItemListContainer/>}>Productos</Link> </Button>
          <Button color="inherit"><Link to={`/category/Fundas`}>Fundas</Link></Button>
          <Button color="inherit"><Link to={`/category/Templados`}>Templados</Link></Button>
          <Button color="inherit"><Link to={`/category/Cargadores`}>Cargadores</Link></Button>
          <Button color="inherit"><Link to={`/category/Auriculares`}>Auriculares</Link></Button>
          <Button color="inherit"><Link to={`/category/Accesorios`}>Accesorios</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
