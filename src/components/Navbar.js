import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {

  const navigate = useNavigate();

  const auth = useAuth();

  const logout = () => {
     auth.logout(navigate);
  }

  const loggedIn = auth.loggedIn;
  console.log(loggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">
              BookStore
            </a>
          </Typography>

          {!loggedIn &&
            <a href="/signin">
              <Button color="inherit">Login</Button>
            </a>
          }

          {loggedIn &&
            <>
              <Button color="inherit" onClick = {logout}>Logout</Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <a href="/viewcart">
                  Cart
                </a>
              </Typography>
            </>


          }


        </Toolbar>
      </AppBar>
    </Box>
  );
}
