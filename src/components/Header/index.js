// == Import : npm
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import {
  Toolbar,
  Container,
  Hidden,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  Switch,
} from '@mui/material';

// == Import : local
import ohisseLogo from 'src/assets/img/logo-complet-bicolor.png';
import userLogo from 'src/assets/img/user.png';
import './header.scss';

// == Composant
function Header() {
  // Link's array
  const navLinks = [
    { name: 'Carte', href: '/' },
    { name: 'Ajout de spot', href: '/spot' },
    { name: 'Salles intérieur', href: '' },
    { name: 'Spots extérieurs', href: '' },
  ];

  const [open, setOpen] = useState(false);

  return (
    // Material UI components
    <AppBar position="sticky">
      <Toolbar className="header">
        <Container maxWidth="md" className="header">
          <div className="header-bar">
            <img className="header-bar__logo" src={ohisseLogo} alt="ohisse logo" />
            {/* Desktop Nav */}
            <div className="header-bar__links">
              <Hidden smDown>
                {navLinks.map((item) => (
                  <NavLink to={item.href} className="gutter-links">{item.name}</NavLink>
                ))}
                {/* Dark mode/Connect links */}
                <div className="burger__connect--dark-mode">
                  <WbSunnyIcon className="gutter-links" />
                  <Switch />
                  <Brightness2Icon />
                </div>
                <NavLink to="/" className="gutter-links"><img className="burger__connect--image" src={userLogo} alt="user logo" /></NavLink>
              </Hidden>
            </div>
            {/* Button of hamburger menu */}
            <Hidden smUp>
              <IconButton>
                <MenuIcon className="header-bar__button" onClick={() => setOpen(true)} />
              </IconButton>
            </Hidden>
          </div>
        </Container>
      </Toolbar>
      {/* End of Desktop Nav */}

      {/* Mobile Nav */}
      <div className="burger">
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          {/* Close button of the burger nav */}
          <div className="burger__top-nav">
            <div className="burger__close-button">
              <IconButton>
                <CloseIcon onClick={() => setOpen(false)} />
              </IconButton>
            </div>
            {/* Links of top nav burger */}
            <List>
              {navLinks.map((item) => (
                <ListItem className="burger__links">
                  <NavLink to={item.href}>{item.name}</NavLink>
                </ListItem>
              ))}
              <ListItem className="burger__links burger__account">
                <NavLink to="/"><img className="burger__account--image" src={userLogo} alt="user logo" />Mon Compte</NavLink>
              </ListItem>
            </List>
          </div>
          {/* Links of bottom burger nav */}
          <List>
            <ListItem className="burger__links burger__connect">
              <NavLink to="/"><img className="burger__connect--image" src={userLogo} alt="user logo" />Connexion</NavLink>
              <div className="burger__connect--dark-mode">
                <WbSunnyIcon />
                <Switch />
                <Brightness2Icon />
              </div>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
      {/* End of Mobile Nav */}
    </AppBar>
  );
}

// == Export
export default Header;
