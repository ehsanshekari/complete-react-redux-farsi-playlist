import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/services/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { /*login as loginAction, startTokenExpireTimer,*/ loginThunk } from '../../store/features/authSlice';

export default function Login() {
  const { isAuthenticated } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/animes');
    }
  }, [navigate, isAuthenticated]);

  const handleLogin = async () => {
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(loginThunk(response.access_token));
      // setSnackbar({ open: true, message: 'Successfully logged in', severity: 'success' });
      // dispatch(loginAction(response.access_token));
      // setTimeout(() => {dispatch(logoutAction())}, TOKEN_EXPIRE_TIME );
      //dispatch(startTokenExpireTimer());
      navigate('/animes');
    } catch (e) {
      setSnackbar({ open: true, message: e.data.message, severity: 'error' });
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box textAlign="center" my={4}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Username"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </Box>
        </Box>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}
