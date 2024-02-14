import React from 'react';
import ChoiceList from './ChoiceList';

function Poll({ question, choices }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <ChoiceList choices={choices} />
    </div>
  );
}

export default Poll;
