import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Modal = ({ setIsOpen }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (options.length < 10) {
      setOptions([...options, '']);
    }
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    // Add logic to submit poll data
    const newPoll = {
      topic: question,
      tag: 'General',
      choices: options,
    }
    console.log('Question:', question);
    console.log('Options:', options);
    async function postData(){
      await axios.post(`http://13.233.172.140:8080/api/v1/polls/`, newPoll, {
          headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Content-Type': 'application/json',
          },
        })
      setIsOpen(false);
    }
    postData()
  };

  return (
    <>
      <div className='w-full h-full fixed z-20 bg-black/50'></div>
      <div className='absolute z-20 w-[50%] bg-white drop-shadow-md rounded-md top-[12%] left-[25%] blur-none'>
        <div className='p-8 px-12'>
          <FontAwesomeIcon icon={faTimes} width="20px" className='float-right cursor-pointer' onClick={() => setIsOpen(false)} />
          <header className='text-2xl font-bold text-center pb-4'>Create Poll</header>
          <input 
            className='border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-4 focus:outline-none' 
            type="text" 
            name="question" 
            id="question" 
            placeholder='Type your question here...'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {options.map((option, index) => (
            <div key={index} className='relative'>
              <input 
                className='border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-4 focus:outline-none' 
                type="text" 
                name={`option${index + 1}`} 
                id={`option${index + 1}`} 
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              {index > 1 && (
                <button 
                  className='absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md' 
                  onClick={() => handleRemoveOption(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <div className='flex flex-row justify-center place-items-center'>
            {options.length < 5 && (
              <button 
                className='mt-4 bg-violet-500 text-white px-4 py-2 mr-4 rounded-md cursor-pointer' 
                onClick={handleAddOption}
              >
                Add Option
              </button>
            )}
            <button 
              className='mt-4 bg-violet-500 text-white px-4 py-2 rounded-md cursor-pointer' 
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
