// == Import : npm
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import {
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Divider,
  Box,
} from '@mui/material';

import userLogo from 'src/assets/img/user.png';
import './accountConnect.scss';

// == Composant
function AccountConnect() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="accountConnect">
      {/* Content box component */}
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={userLogo} className="accountConnect__logo" />
          </IconButton>
        </Tooltip>
      </Box>
      {/* CSS of the Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* Menu inside the pop-up */}
        <Link to="/profil">
          <MenuItem>
            <PersonIcon /> Mon compte
          </MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>
            <StarIcon /> Mes favoris
          </MenuItem>
          <Divider />
        </Link>
        <Link to="/">
          <MenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            Me déconnecter
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

// == Export
export default AccountConnect;
