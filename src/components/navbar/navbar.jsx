import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidjet from '../cartWidjet/cartWidjet';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
        <Toolbar>

         <Button color="inherit">
           
           <CartWidjet/>
           
          </Button> 
          
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          
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
          <Button color="inherit">Fundas</Button>
          <Button color="inherit">Vidrios templados</Button>
          <Button color="inherit">Cargadores</Button>
          <Button color="inherit">Auriculares</Button>
          <Button color="inherit">Accesorios</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
