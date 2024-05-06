import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../AuthContext';
import {Link} from 'react-router-dom'

export default function ButtonAppBar() {
    const auth = useAuth();
    const loggedIn = auth.isloggedIn;
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

{ !loggedIn && 
    <a href="/signin">
  <Button color="inherit">Login</Button>
  </a>
}

{loggedIn && 
<>
<Button color="inherit">Logout</Button>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href="/">
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
