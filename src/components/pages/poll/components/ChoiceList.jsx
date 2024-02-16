import React from 'react';

function ChoiceList({ choices }) {
  return (
    <ul className="space-y-2">
      {choices.map((choice,key) => (
        <li key={key} className="flex items-center">
          <input type="radio" className="mr-2" />
          <span>{choice}</span>
        </li>
      ))}
    </ul>
  );
}

export default ChoiceList;
