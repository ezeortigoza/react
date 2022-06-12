 import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logotipo from './Ios';
import CartWidget from './CartWidget';
import { ClassNames } from '@emotion/react';
import App from '../App';
import { createTheme } from '@mui/material/styles';
import { fontFamily } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ItemListContainer from './ItemListContainer';
import { NavLink } from 'react-bootstrap';










const pages = ['Productos', 'Nosotros', 'Ubicacion', 'Accesorios'];


const MUNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  
  return (
    <AppBar  position="static" color="secondary"   >
      <Container maxWidth="xl">
        <Toolbar disableGutters   >
          < Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 10,
              letterSpacing: '.3rem',
              color: 'secondary',
              textDecoration: 'none',
            }}

          >
            <Logotipo/>
          </Typography>
    
          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'flex' },
              }}
            >
              {pages.map((page) => (
               // return <NavLink/>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
     
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box >
          <Box sx={{ flexGrow: 12, display: { xs: 'flex', md: 'flex' }, letterSpacing: '.3rem', fontFamily: 'monospace'}}>
         <div className='container-fluid row g-5  mx-auto '>
            <form className='d-flex mx-auto'>
             <input className='form-control ' type="search" placeholder="¿Que estas buscando?" aria-label="Search"/>
             {  <button className='btn btn-outline-dark btn-sm ' type="submit">Search</button> }
          </form>
      </div>
      </Box >


          

          <Box sx={{ flexGrow: 0, display: { xs: 'block', md: 'flex' }, letterSpacing: '.3rem', fontFamily: 'monospace'}}>
              <Typography variant='h7' color={"white"} >
                   Hello guest
              </Typography>
              <div>
                 {  <button className='btn btn-outline-dark btn-sm'>
                      Sign in 
                  </button> }
              </div>
              < CartWidget />
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MUNavbar;