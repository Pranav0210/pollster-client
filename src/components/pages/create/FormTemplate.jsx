import React, { useState } from 'react';

const FormTemplate = ({ options, setOptions }) => {
  const handleAddOption = () => {
    if (options.length < 10) {
      setOptions([...options, '']); // Add an empty option
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Poll Options</h2>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-1 px-2 mr-2"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={() => handleRemoveOption(index)}
          >
            Remove
          </button>
        </div>
      ))}
      {options.length < 10 && (
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
          onClick={handleAddOption}
        >
          Add Option
        </button>
      )}
    </div>
  );
};

export default FormTemplate;
