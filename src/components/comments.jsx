// Comments.js
import React, { useState } from 'react';
import Comment from './comment';

const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'Вау', replies: []},
    { id: 2, text: 'Крута новина', replies: [] },
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const handleDelete = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleEdit = (commentId, newText, updatedReplies) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, text: newText, replies: updatedReplies || comment.replies } : comment
    );
    setComments(updatedComments);
  };

  const handleReply = (commentId, replyText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, replies: [...comment.replies, { id: Date.now(), text: replyText }] }
        : comment
    );
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    if (newCommentText.trim() !== '') {
      const newComment = {
        id: Date.now(),
        text: newCommentText,
        replies: [],
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setNewCommentText('');
    }
  };

  return (
    <div className='comms'>
      <h2 className='disc-slog' style={{ color: '#d5d5d5' }}>Коментарі</h2>
      <div className='add'>
        <input
          type="text"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Написати коментар..."
        />
        <button onClick={handleAddComment}>Відправити</button>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
        />
      ))}
    </div>
  );
};

export default Comments;
