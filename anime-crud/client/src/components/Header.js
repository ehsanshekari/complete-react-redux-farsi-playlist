import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/features/authSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/animes')}
        >
          Anime Explorer
        </Typography>
        <Button onClick={() => dispatch(logout())} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
