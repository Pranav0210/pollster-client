import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Poll from './components/Poll';
import DiscussionZone from './components/DiscussionZone';

function PollPage() {
  const { pollId } = useParams();
  const [poll, setPoll] = useState({topic:"",choices:[],tag:""});
  const [comments, setComments] = useState([]);

  // console.log(comments)
  useEffect(() => {
    // Fetch poll data from API
    async function fetchPollData() {
      const pollDataResponse = await axios.get(`http://13.233.172.140:8080/api/v1/polls/${pollId}`, {
          headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Content-Type': 'application/json',
          },
        })
        setPoll(pollDataResponse.data);
      }
    fetchPollData();
    
    // Fetch comments from API
    async function fetchCommentsData(){
      const commentsResponse = await axios.get(`http://13.233.172.140:8080/api/v1/comments/poll/${pollId}`, {
        headers:{
          'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
          'Content-Type': 'application/json',
        },
      })
      setComments(commentsResponse.data);
    }
    fetchCommentsData()

    console.log(poll,comments)
  }, []);

  return (
      <div className="container mx-auto px-4 py-8">
        {poll && <Poll question={poll.topic} choices={poll.choices} />}
        <DiscussionZone comments={comments} pollId={pollId}/>
      </div>
  );
}

export default PollPage;
