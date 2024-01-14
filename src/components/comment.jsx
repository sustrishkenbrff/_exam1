import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onEdit, onReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const [replyText, setReplyText] = useState('');

  const handleEdit = () => {
    onEdit(comment.id, editedText);
    setIsEditing(false);
  };

  const handleReply = () => {
    onReply(comment.id, replyText);
    setReplyText('');
  };

  const handleDeleteReply = (replyId) => {
    const updatedReplies = comment.replies.filter((reply) => reply.id !== replyId);
    onEdit(comment.id, editedText, updatedReplies);
  };

  return (
    <div>
      {isEditing ? (
        <div className='comment'>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Зберегти</button>
        </div>
      ) : (
        <div style={{ width: '1080px' }}>
          <div className='fdc'>
            <div className='comment'>
              <p>{comment.text}</p>
              <div className='btns'>
                <button onClick={() => onDelete(comment.id)}>Видалити</button>
                <button onClick={() => setIsEditing(true)}>Редагувати</button>
              </div>
            </div>
            {comment.replies && comment.replies.length > 0 && (
              <div className='reply-txt'>
                {comment.replies.map((reply) => (
                  <div className="rep-del" key={reply.id}>
                 
                    <p>{reply.text}</p>
  
                    <button onClick={() => handleDeleteReply(reply.id)}>ВИДАЛИТИ</button>
           
                  </div>
                ))}
              </div>
            )}
            <div className='replie'>
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Відповісти..."
              />
              <button onClick={handleReply}>Відправити</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
