import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Home from '../../Home';
import ItemListContainer from '../ItemListContainer/itemListContainer'


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
      >
        Menú
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/home" element={<Home />}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/" element={<ItemListContainer />}>Productos</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Fundas`}>Fundas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Templados`}>Templados</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Cargadores`}>Cargadores</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Auriculares`}>Auriculares</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/category/Accesorios`}>Accesorios</Link></MenuItem>
      </Menu>
    </div>
  );
}
