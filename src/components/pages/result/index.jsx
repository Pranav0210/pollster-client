import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PollResults from './components/PollResults';
import io from 'socket.io-client';
import axios from 'axios';
// require('dotenv').config('./env/.env');

function PollResultsPage() {

  const { pollId } = useParams();
  const [pollData, setPollData] = useState(null);
  const [voteData, setVoteData] = useState(null);

  const socketResult = io.connect('http://13.233.172.140:8080/result');

    socketResult.on('connect', () => {
        console.log('Connected to /result namespace');
      });
    socketResult.on('connect_error', (error) => {
        console.log(`Socket error: ${error}`);
      });

  socketResult.on('result-change', (poll_id) => {
      console.log('Received vote');
      if(poll_id === pollId){
        fetchPollResults(pollId);
      }
  });

  useEffect(() => {
    // Fetch poll data from API
    fetchPollData(pollId);
    
    // Fetch total votes and comments from API
    fetchPollResults(pollId);
  }, []);

  const fetchPollData = async (pollId) => {
    // Fetch poll data from API using pollId
    console.log(`http://13.233.172.140:8080/api/v1/polls/${pollId}`)
    const pollData = await axios(`http://13.233.172.140:8080/api/v1/polls/${pollId}`, {
      headers:{
        'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
        'Content-Type': 'application/json',
      },});
    
    // console.log('PollData:', pollJson);
    setPollData(pollData.data);
  };

  const fetchPollResults = async (pollId) => {
    // Fetch total votes from API using pollId
    const votesData = await fetch(`http://13.233.172.140:8080/api/v1/votes/${pollId}`, {
      headers:{
        'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
        'Content-Type': 'application/json',
      },});
    console.log('Votes:', votesData);
    setVoteData(votesData.data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {pollData && voteData && (
        <PollResults
          poll={pollData}
          voteData={voteData}
        />
      )}
    </div>
  );
}

export default PollResultsPage;
