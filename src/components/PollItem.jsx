import React from 'react';

function PollItem({ topic, creator, tag }) {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4 flex items-center">
      <div className="mr-4">
        <h2 className="text-lg font-semibold">{topic}</h2>
        <p className="text-gray-600">Created by {creator}</p>
      </div>
      <span className="inline-block bg-gray-200 text-gray-800 px-2 py-1 text-xs font-semibold rounded-full">
        {tag}
      </span>
    </div>
  );
}

export default PollItem;
