import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidjet from '../cartWidjet/cartWidjet';
import {Link} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/itemListContainer'


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
        <Toolbar>

         <Button color="inherit">
           
           <CartWidjet/>
           
          </Button> 
          
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className="title">
          
            CityPhone
          
          </Typography>
          {/* <select name="Productos">
            <option>Fundas</option>
            <option>Fundas</option>
            <option>Fundas</option>
            <option>Fundas</option>
            <option>Fundas</option>
            <option>Fundas</option>
          </select> */}
          <Button color="inherit"><Link to="/" element={<ItemListContainer/>}>HOME</Link> </Button>
          <Button color="inherit"><Link to={`/product?category=Fundas`}>Fundas</Link></Button>
          <Button color="inherit"><Link to={`/item/category/templados`}>Templados</Link></Button>
          <Button color="inherit"><Link to={`/item/category/cargadores`}>Cargadores</Link></Button>
          <Button color="inherit"><Link to={`/item/category/auriculares`}>Auriculares</Link></Button>
          <Button color="inherit"><Link to={`/item/category/accesorios`}>Accesorios</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
