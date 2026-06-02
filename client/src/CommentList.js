import React from 'react';
import { List, ListItem, ListItemText, Chip } from '@mui/material';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }
    console.log(comment.status);

    if (comment.status === 'rejected') {
      content = 'This comment has been rejected';
    }

    if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation';
    }

    const getColor = () => {
      if (comment.status === 'approved') return 'success';
      if (comment.status === 'rejected') return 'error';
      return 'warning';
    };

    return (
      <ListItem
        key={comment.id}
        sx={{
          bgcolor: 'background.paper',
          mb: 1,
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <ListItemText primary={content} />
        <Chip label={comment.status} color={getColor()} size="small" />
      </ListItem>
    );
  });

  return <List>{renderedComments}</List>;
};

export default CommentList;
