import React, { useState } from 'react';
import axios from 'axios';

function CreateComment({ pollId }) {
  const [text, setText] = useState('');
  const [parentComment, setParentComment] = useState(null);

  const handleSubmit = () => {
    // Submit the comment data to the parent component
    async function postComment(){
      await axios.post(`http://13.233.172.140:8080/api/v1/comments/poll/${pollId}`, {
        text: text,
        reply_to: parentComment
      }, {
          headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Content-Type': 'application/json',
          },
        })
      
    }
    postComment()
    // Clear the input field after submitting
    setText('');
  };

  const handleReply = (commentId) => {
    setParentComment(commentId);
  }

  return (
    <div className="mb-4">
      <textarea
        className="w-full border border-gray-300 rounded-md p-2"
        rows="3"
        placeholder="Write your comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        onClick={handleSubmit}
      >
        Add Comment
      </button>
    </div>
  );
}

export default CreateComment;
