import React from 'react';

function ChoiceList({ choices }) {
  return (
    <ul className="space-y-2">
      {choices.map(choice => (
        <li key={choice._id} className="flex items-center">
          <input type="radio" className="mr-2" />
          <span>{choice.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default ChoiceList;
