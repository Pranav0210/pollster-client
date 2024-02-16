import React, { useState, useContext, useEffect } from 'react';
import { SelectedPollContext } from './Dashboard'
import axios from 'axios';

function PollVoting() {
  const [selectedOption, setSelectedOption] = useState(null);
  const {selectedPoll, setSelectedPoll} = useContext(SelectedPollContext)
  const [poll,setPoll] = useState({topic:"",choices:[],tag:""})
  const hasVoted = false
  useEffect(()=>{
    async function fetchPollData() {
      const pollDataResponse = await axios.get(`http://13.233.172.140:8080/api/v1/polls/${selectedPoll}`, {
          headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Content-Type': 'application/json',
          },
        })
        setPoll(pollDataResponse.data);
        console.log(poll)
      }
    fetchPollData();
  },[selectedPoll])

  const handleOptionClick = (optionId) => {
    if (!hasVoted) {
      setSelectedOption(optionId);
    }
  };

  const handleSubmitVote = () => {
    if (!selectedOption || hasVoted) {
      return;
    }
    async function submitVote() {
      const submitVoteResponse = await axios.post(`http://13.233.172.140:8080/api/v1/votes/${selectedPoll}`, {
        choice:poll.choices[selectedOption]
      },
      {
          headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Content-Type': 'application/json',
          },
        })

        console.log(submitVoteResponse.data)
        setSelectedPoll('')
      }
    submitVote();
    console.log(`Vote submitted for option: ${poll.choices[selectedOption]}`);
  };

  return (
      <div className="rounded px-6 mb-4">
      <h2 className="text-lg text-slate-600 font-semibold mb-2">{poll.topic}</h2>
      <p className="text-gray-600 mb-4">Created by {poll.created_by}</p>
      <div className="grid grid-cols-1 gap-4">
        {poll && poll.choices && poll.choices.map((option,index) => (
          <button
            key={index}
            className={`p-2 border rounded cursor-pointer ${
              hasVoted
                 ? selectedOption === index
                  ? 'bg-violet-200'
                  : 'bg-violet-200 pointer-events-none'
                : selectedOption === index
                ? 'bg-violet-200'
                : 'bg-white hover:bg-violet-100'
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
      {!hasVoted && (
        <button
          className="bg-violet-500 hover:bg-white rounded-3xl hover:text-violet-500 text-white py-2 px-4 rounded mt-4 border-solid border-2 border-violet-500"
          onClick={handleSubmitVote}
          disabled={!selectedOption}
        >
          Submit Vote
        </button>
      )}
    </div>
  );
}

export default PollVoting;
