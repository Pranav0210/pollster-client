import React, { useEffect, useState } from 'react';
import Poll from './components/Poll';
import DiscussionZone from './components/DiscussionZone';

// function PollPage({ pollId }) {
//   const [poll, setPoll] = useState(null);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     // Fetch poll data from API
//     fetchPollData(pollId);
    
//     // Fetch comments from API
//     fetchCommentsData(pollId);
//   }, [pollId]);

//   const fetchPollData = async (pollId) => {
//     // Fetch poll data from API using pollId
//     const pollData = await fetch(`api/polls/${pollId}`);
//     const pollJson = await pollData.json();
//     setPoll(pollJson);
//   };

//   const fetchCommentsData = async (pollId) => {
//     // Fetch comments data from API using pollId
//     const commentsData = await fetch(`api/comments/${pollId}`);
//     const commentsJson = await commentsData.json();
//     setComments(commentsJson);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {poll && <Poll question={poll.question} choices={poll.choices} />}
//       <DiscussionZone comments={comments} />
//     </div>
//   );
// }

function PollPage() {
  // Hardcoded poll data
  const pollData = {
    question: "What's your favorite programming language?",
    choices: [
      { _id: 1, text: 'JavaScript' },
      { _id: 2, text: 'Python' },
      { _id: 3, text: 'Java' },
      { _id: 4, text: 'C++' },
    ],
  };

  // Hardcoded comments data
  const commentsData = [
    { 
      _id: 1, 
      text: 'JavaScript is the best!', 
      user: { 
        name: 'Alice', 
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg' 
      },
      createdAt: '2022-02-15T08:00:00Z', 
      replies: [
        {
          _id: 101,
          text: 'I agree!',
          user: {
            name: 'Bob',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
          },
          createdAt: '2022-02-15T08:05:00Z'
        }
      ] 
    },
    { 
      _id: 2, 
      text: 'I prefer Python.', 
      user: { 
        name: 'Charlie', 
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg' 
      },
      createdAt: '2022-02-15T09:00:00Z',
      replies: []
    },
    { 
      _id: 3, 
      text: 'Java is great for enterprise applications.', 
      user: { 
        name: 'Eva', 
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg' 
      },
      createdAt: '2022-02-15T10:00:00Z',
      replies: []
    },
    { 
      _id: 4, 
      text: 'C++ is powerful but complex.', 
      user: { 
        name: 'David', 
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg' 
      },
      createdAt: '2022-02-15T11:00:00Z',
      replies: []
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Poll Page</h1>
      <Poll question={pollData.question} choices={pollData.choices} />
      <DiscussionZone comments={commentsData} />
    </div>
  );
}

export default PollPage;
