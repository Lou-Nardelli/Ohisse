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
  const navLinks = [
    { name: 'Carte', href: '/' },
    { name: 'Ajout de spot', href: '/spot' },
    { name: 'Salles intérieur', href: '' },
    { name: 'Spots extérieurs', href: '' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <Container maxWidth="md" className="header">
          <div className="header-bar">
            <img className="header-bar__logo" src={ohisseLogo} alt="ohisse logo" />
            <div className="header-bar__links">
              <Hidden smDown>
                {navLinks.map((item) => (
                  <NavLink to={item.href} className="gutter-links">{item.name}</NavLink>
                ))}
                <div className="burger__connect--dark-mode">
                  <WbSunnyIcon className="gutter-links" />
                  <Switch />
                  <Brightness2Icon />
                </div>
                <NavLink to="/" className="gutter-links"><img className="burger__connect--image" src={userLogo} alt="user logo" /></NavLink>
              </Hidden>
            </div>
            <Hidden smUp>
              <IconButton>
                <MenuIcon className="header-bar__button" onClick={() => setOpen(true)} />
              </IconButton>
            </Hidden>
          </div>
        </Container>
      </Toolbar>
      <div className="burger">
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div className="burger__top-nav">
            <div className="burger__close-button">
              <IconButton>
                <CloseIcon onClick={() => setOpen(false)} />
              </IconButton>
            </div>
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
    </AppBar>
  );
}

// == Export
export default Header;
