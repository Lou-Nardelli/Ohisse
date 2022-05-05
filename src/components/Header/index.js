// == Import : npm
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
  Toolbar,
  Container,
  Hidden,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
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
        <Container maxWidth="md">
          <div className="header-bar">
            <img className="header-bar__logo" src={ohisseLogo} alt="ohisse logo" />
            <Hidden smDown>
              {navLinks.map((item) => (
                <NavLink to={item.href}>{item.name}</NavLink>
              ))}
            </Hidden>
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
          <div>
            <IconButton>
              <CloseIcon onClick={() => setOpen(false)} />
            </IconButton>
          </div>
          <List>
            {navLinks.map((item) => (
              <ListItem className="burger__link">
                <NavLink to={item.href}>{item.name}</NavLink>
              </ListItem>
            ))}
            <ListItem className="burger__link burger__account">
              <NavLink to="/"><img className="burger__account--image" src={userLogo} alt="user logo" />Mon Compte</NavLink>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
    </AppBar>
  );
}

// == Export
export default Header;
