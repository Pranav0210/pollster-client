import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PollResults from './components/PollResults';
import io from 'socket.io-client';
// require('dotenv').config('./env/.env');

function PollResultsPage() {

  const { pollId } = useParams();
  const [pollData, setPollData] = useState(null);
  const [voteData, setVoteData] = useState(null);

  const socketResult = io.connect('http://127.0.0.1:8080/result');

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
  }, voteData);

  const fetchPollData = async (pollId) => {
    // Fetch poll data from API using pollId
    console.log(`http://localhost:8080/api/v1/polls/${pollId}`)
    const pollData = await fetch(`http://localhost:8080/api/v1/polls/${pollId}`);
    const pollJson = await pollData.json();
    // console.log('PollData:', pollJson);
    setPollData(pollJson);
  };

  const fetchPollResults = async (pollId) => {
    // Fetch total votes from API using pollId
    const votesData = await fetch(`http://localhost:8080/api/v1/votes/${pollId}`);
    const votesJson = await votesData.json();
    console.log('Votes:', votesJson);
    setVoteData(votesJson);
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

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PollResults from './components/PollResults';

// function PollResultsPage() {
//   const { pollId } = useParams();
//   const [pollData, setPollData] = useState(null);
//   const [totalVotes, setTotalVotes] = useState(0);
//   const [totalComments, setTotalComments] = useState(0);

//   useEffect(() => {
//     // Simulated poll data
//     const pollData = {
//       topic: "What's your favorite programming language?",
//       choices: [
//         { _id: 1, text: 'JavaScript' },
//         { _id: 2, text: 'Python' },
//         { _id: 3, text: 'Java' },
//         { _id: 4, text: 'C++' },
//       ],
//       creator: { name: 'John Doe' } // Simulated creator data
//     };

//     // Set hardcoded data
//     setPollData(pollData);
//     setTotalVotes(100); // Simulated total votes
//     setTotalComments(20); // Simulated total comments
//   }, [pollId]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {pollData && (
//         <PollResults
//           poll={pollData}
//           totalVotes={totalVotes}
//           totalComments={totalComments}
//         />
//       )}
//     </div>
//   );
// }

// export default PollResultsPage;
