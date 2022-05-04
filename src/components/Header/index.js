// == Import : npm
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Toolbar,
  Container,
  Hidden,
  IconButton,
} from '@mui/material';

// == Import : local
import ohisseLogo from 'src/assets/img/logo-complet-bicolor.png';
import './header.scss';

// == Composant
function Header() {
  const navLinks = [
    { name: 'Carte', href: '/' },
    { name: 'Ajout de spot', href: '/spot' },
    { name: 'Salles intérieur', href: '' },
    { name: 'Spots extérieurs', href: '' },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <Container maxWidth="md">
          <div>
            <img className="logo" src={ohisseLogo} alt="ohisse logo" />
            <Hidden xsDown>
              {navLinks.map((item) => (
                <NavLink to={item.href}>{item.name}</NavLink>
              ))}
            </Hidden>
            <Hidden smUp>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

// == Export
export default Header;
