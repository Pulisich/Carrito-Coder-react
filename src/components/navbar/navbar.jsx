import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidjet from '../cartWidjet/cartWidjet';
import { Link } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/itemListContainer'
import Cart from '../Cart/Cart';
import Home from '../../Home';
import { useMediaQuery, useTheme } from '@material-ui/core';
import BasicMenu from './menu';


export default function NavBar() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        {/* <select name="|||">
            <option><Button color="inherit"><Link to="/home" element={<Home />}>Home</Link> </Button></option>
            <option><Button color="inherit"><Link to="/" element={<ItemListContainer />}>Productos</Link> </Button></option>
            <option><Button color="inherit"><Link to={`/category/Fundas`}>Fundas</Link></Button></option>
            <option><Button color="inherit"><Link to={`/category/Templados`}>Templados</Link></Button></option>
            <option><Button color="inherit"><Link to={`/category/Cargadores`}>Cargadores</Link></Button></option>
            <option><Button color="inherit"><Link to={`/category/Auriculares`}>Auriculares</Link></Button></option>
            <option><Button color="inherit"><Link to={`/category/Accesorios`}>Accesorios</Link></Button></option>

          </select> */}
        {isMatch ? (

          <Toolbar>

            <Button color="inherit">

              <Link to="/cart" element={<Cart />}>

                <CartWidjet />

              </Link>

            </Button>

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className="title">

              CityPhone

            </Typography>

            <BasicMenu/>
            {/* <select name="|||">
              <option><Link to="/home" element={<Home />}>Home</Link> </option>
              <option><Link to="/" element={<ItemListContainer />}>Productos</Link> </option>
              <option><Link to={`/category/Fundas`}>Fundas</Link></option>
              <option><Link to={`/category/Templados`}>Templados</Link></option>
              <option><Link to={`/category/Cargadores`}>Cargadores</Link></option>
              <option><Link to={`/category/Auriculares`}>Auriculares</Link></option>
              <option><Link to={`/category/Accesorios`}>Accesorios</Link></option>

            </select> */}

          </Toolbar>
        ) :
          (
            <Toolbar>

              <Button color="inherit">

                <Link to="/cart" element={<Cart />}>

                  <CartWidjet />

                </Link>

              </Button>

              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className="title">

                CityPhone

              </Typography>

              <Button color="inherit"><Link to="/home" element={<Home />}>Home</Link> </Button>
              <Button color="inherit"><Link to="/" element={<ItemListContainer />}>Productos</Link> </Button>
              <Button color="inherit"><Link to={`/category/Fundas`}>Fundas</Link></Button>
              <Button color="inherit"><Link to={`/category/Templados`}>Templados</Link></Button>
              <Button color="inherit"><Link to={`/category/Cargadores`}>Cargadores</Link></Button>
              <Button color="inherit"><Link to={`/category/Auriculares`}>Auriculares</Link></Button>
              <Button color="inherit"><Link to={`/category/Accesorios`}>Accesorios</Link></Button>
            </Toolbar>
          )}
      </AppBar>
    </Box>
  );
}
