import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function AnimeForm({ formTitle, buttonLabel, handleSubmit, animeData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (animeData) {
      setTitle(animeData.title);
      setDescription(animeData.description);
    }
  }, [animeData]);

  return (
    <Box textAlign="center" my={4}>
      <Typography variant="h4" gutterBottom>
        {formTitle}
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          multiline
          rows={8}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSubmit({ title, description });
          }}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
}

export default AnimeForm;
