import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://posts.com/posts/create', { title });
    setTitle('');
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Create New Post!
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCreate;
