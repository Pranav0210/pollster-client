import React, { useState } from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';

function DiscussionZone({ comments, pollId }) {
  const [commentList, setCommentList] = useState(comments);

  console.log(commentList)
  // const handleAddComment = (text) => {
  //   // Create a new comment object
  //   const newComment = {
  //     _id: commentList.length + 1, // Replace with actual ID from the server
  //     text,
  //     user: {
  //       name: 'Anonymous', // Replace with the authenticated user's name
  //       avatar: 'https://via.placeholder.com/50', // Replace with the authenticated user's avatar
  //     },
  //     createdAt: new Date().toISOString(), // Current timestamp
  //     replies: [], // Assuming no replies for a new comment
  //   };
  //   // Add the new comment to the comment list
  //   setCommentList([newComment, ...commentList]);
    
  //   // Submit the comment data to the API endpoint for creation of new comment
  //   // Replace this with actual API call
  //   console.log('Submitting new comment:', newComment);
  // };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4">Discussion Zone</h3>
      <CreateComment pollId={pollId}/>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

export default DiscussionZone;
