import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetAnimeQuery } from '../../store/services/animeApi';

function AnimeDetail() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetAnimeQuery(id);

  if (isError) {
    return <Typography variant="h4">{error.data.message}</Typography>;
  }

  if (isLoading) {
    return <Typography variant="h4">Loaing...</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="body">{data.description}</Typography>
      </Box>
    </Container>
  );
}

export default AnimeDetail;
