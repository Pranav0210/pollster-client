import React from 'react';

function Comment({ comment }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mt-4">
      <div className="flex items-center mb-2">
        <div className="flex-shrink-0 mr-2">
          {/* <img className="h-8 w-8 rounded-full" src={comment.user.avatar} alt={comment.user.name} /> */}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-800">{comment.user_id}</div>
          <div className="text-xs text-gray-500">{comment.createdAt}</div>
        </div>
      </div>
      <p className="text-sm">{comment.text}</p>
      {comment.replies && comment.replies.map(reply => (
        <div key={reply._id} className="border border-gray-300 rounded-lg p-2 mt-2 ml-8">
          <div className="flex items-center mb-2">
            <div className="flex-shrink-0 mr-2">
              {/* <img className="h-6 w-6 rounded-full" src={reply.user.avatar} alt={reply.user.name} /> */}
            </div>
            <div>
              <div className="text-xs font-medium text-gray-800">{reply.user_id}</div>
              <div className="text-xs text-gray-500">{reply.createdAt}</div>
            </div>
          </div>
          <p className="text-xs">{reply.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Comment;
