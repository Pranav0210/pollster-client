import React, { useState } from 'react';

function CreateComment({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    // Submit the comment data to the parent component
    onSubmit(text);
    // Clear the input field after submitting
    setText('');
  };

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
