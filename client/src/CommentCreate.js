import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    setContent('');
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h4" gutterBottom>
          Add Comment
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="New Comment"
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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

export default CommentCreate;
