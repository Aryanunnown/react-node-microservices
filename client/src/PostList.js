import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <Card key={post.id} sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            {post.title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <CommentList comments={post.comments} />
          <Box sx={{ mt: 2 }}>
            <CommentCreate postId={post.id} />
          </Box>
        </CardContent>
      </Card>
    );
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 3 }}>
        Posts
      </Typography>
      <Box>{renderedPosts}</Box>
    </Container>
  );
};

export default PostList;
