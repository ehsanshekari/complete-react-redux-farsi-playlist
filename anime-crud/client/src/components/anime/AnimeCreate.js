import { Container } from '@mui/material';
import React from 'react';
import AnimeForm from './AnimeForm';
import { useCreateAnimeMutation } from '../../store/services/animeApi';
import { useNavigate } from 'react-router-dom';

function AnimeCreate() {
  const [createAnime] = useCreateAnimeMutation();
  const navigate = useNavigate();

  const handleCreate = async (animeData) => {
    const { title } = animeData;
    if (title) {
      await createAnime(animeData);
      navigate('/animes');
    }
  };

  return (
    <Container maxWidth="sm">
      <AnimeForm
        formTitle="Suggest an Anime"
        buttonLabel="Create"
        handleSubmit={handleCreate}
      />
    </Container>
  );
}

export default AnimeCreate;
