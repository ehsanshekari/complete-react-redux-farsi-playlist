import { useState, useEffect } from 'react';
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
import { useRegisterMutation } from '../../store/services/authApi';
import { useSelector } from 'react-redux';

export default function Register() {
  const { isAuthenticated } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });
  const [register] = useRegisterMutation();

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/animes');
      }
    }, [navigate, isAuthenticated]);

  const handleRegister = async () => {
    try {
      await register({ email, password }).unwrap();
      navigate('/animes');
    } catch (e) {
      setSnackbar({
        open: true,
        message: e.data.message,
        severity: 'error',
      });
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box textAlign="center" my={4}>
          <Typography variant="h4" gutterBottom>
            Register
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Register
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate('/')}
            >
              Login
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
