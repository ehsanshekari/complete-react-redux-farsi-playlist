import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  useGetAnimesQuery,
  useDeleteAnimeMutation,
} from '../../store/services/animeApi';

function AnimeList() {
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useGetAnimesQuery();
  const [open, setOpen] = useState(false);
  const [animeToDelete, setAnimeToDelete] = useState(null);
  const [animeDelete] = useDeleteAnimeMutation();

  const handleDelete = (animeId) => {
    setOpen(true);
    setAnimeToDelete(animeId);
  };

  const confirmDelete = async () => {
    if (animeToDelete) {
      await animeDelete(animeToDelete);
      setAnimeToDelete(null);
      setOpen(false);
    }
  };

  if (isError) {
    return <Typography variant="h4">{error.data.message}</Typography>;
  }

  if (isLoading) {
    return <Typography variant="h4">Loaing...</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom>
          Anime Series
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/create')}
        >
          {' '}
          Suggest an Anime
        </Button>
        <List>
          {data.map((anime) => (
            <ListItem>
              <ListItemText primary={anime.title} />
              <IconButton
                edge="end"
                onClick={() => navigate(`/edit/${anime.id}`)}
              >
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(anime.id)}>
                <Delete />
              </IconButton>
              <IconButton
                edge="end"
                onClick={() => navigate(`/animes/${anime.id}`)}
              >
                <Visibility />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Delete </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this anime?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default AnimeList;
