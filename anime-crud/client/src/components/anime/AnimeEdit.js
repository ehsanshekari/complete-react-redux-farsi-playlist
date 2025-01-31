import { Container, Typography } from '@mui/material';
import React from 'react';
import AnimeForm from './AnimeForm';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetAnimeQuery,
  useUpdateAnimeMutation,
} from '../../store/services/animeApi';

function AnimeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateAnime] = useUpdateAnimeMutation();
  const { data, isLoading } = useGetAnimeQuery(id);

  const handleEdit = async (animeData) => {
    await updateAnime({id, ...animeData});
    navigate('/animes');
  };

  if(isLoading) {
    return <Typography variant="h4">Loaing...</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <AnimeForm
        formTitle="Edit Anime"
        buttonLabel="Update"
        handleSubmit={handleEdit}
        animeData={data}
      />
    </Container>
  );
}

export default AnimeEdit;
