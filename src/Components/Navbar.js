import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './Assets/logo2.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

const pages = [
  { label: 'Home', icon: <HomeIcon style={{ color: '#a37907' }} />, path: '/' },
  { label: 'About', icon: <InfoIcon style={{ color: '#a37907' }} />, path: '/about' },
  { label: 'Projects', icon: <DescriptionIcon style={{ color: '#a37907' }} />, path: '/projects' }, 
  { label: 'ReachOut', icon: <MailOutlineIcon style={{ color: '#a37907' }} />, path: '/reachout' },
];

const LogoImage = (
  <img
    alt="Logo"
    src={logo}
    style={{
      width: 220,
      height: 150,
      float: 'right',
      position: 'relative',
      marginTop: '-100px',
    }}
  />
);

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#d2b7ed', boxShadow: '0 0 10px #001f3f, 0 0 20px #001f3f, 0 0 40px #001f3f' ,height: '120px' }}>
      <Container maxWidth="xl" className="navbar-container">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: '35px' }} />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}
                  sx={{
                    color: '#a37907',
                    '&:hover': {
                      color: 'white',
                      background: `linear-gradient(to right, gold, orange)`,
                    },
                  }}
                >
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {page.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , m: '10px' }}
              >
                 <Typography sx={{ display: 'flex', alignItems: 'center', gap: '8px', m: '10px' }}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {page.icon}
                    <span>{page.label}</span>
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>

        </Toolbar>
        {LogoImage}
      </Container>
    </AppBar>
  );
}

export default Navbar;
