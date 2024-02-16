import React, {useState, useEffect} from 'react'
import PollsList from './PollsList'
import axios from 'axios'

const PollType = () => {
  const [polls,setPolls] = useState([])
  const [createdPolls, setCreatedPolls] = useState([{}])
  const [votedPolls, setVotedPolls] = useState([{}])
  const [activeTab, setActiveTab] = useState('new');
  const [pollsProp, setPollsProp] = useState(polls)

  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    async function fetchNewPolls() {
    const userPollsResponse = await axios.get(`http://13.233.172.140:8080/api/v1/users/${sessionStorage.getItem('user_id')}/polls`, {
        headers:{
          'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
          'Content-Type': 'application/json',
        },
      })
      setCreatedPolls(userPollsResponse.data.createdPolls)
      setVotedPolls(userPollsResponse.data.votedPolls)
    }
    fetchNewPolls()
    if(tab === 'voted'){
      // Fetch new polls
      setPollsProp(votedPolls)
    } else if(tab === 'created'){
      // Fetch created polls
      setPollsProp(createdPolls)
    }
    else
      setPollsProp(polls)
  };
  // console.log(polls)
  useEffect(() => {
    async function fetchData() {
      const pollsResponse = await axios.get('http://13.233.172.140:8080/api/v1/polls/', {
        headers:{
          'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
          'Content-Type': 'application/json',
        },
      })
      setPolls(pollsResponse.data);

      const userPollsResponse = await axios.get(`http://13.233.172.140:8080/api/v1/users/${sessionStorage.getItem('user_id')}/polls`, {
        headers:{
          'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
          'Content-Type': 'application/json',
        },
      })
      setCreatedPolls(userPollsResponse.data.createdPolls)
      setVotedPolls(userPollsResponse.data.votedPolls)
      console.log(votedPolls)
    }
    fetchData()
  },[])
  return (
    <div className='w-2/3 bg-slate-100 rounded-3xl'>
      <div className='grid grid-cols-3 text-center'>
        <header
          className={`text-xl font-semibold py-4 cursor-pointer ${
            activeTab === 'new' ? 'text-white bg-violet-400 rounded-tl-3xl' : 'text-violet-500'
          }`}
          onClick={() => handleTabClick('new')}
        >
          New Polls
        </header>
        <header
          className={`text-xl font-semibold py-4 cursor-pointer ${
            activeTab === 'created' ? 'text-white bg-violet-400' : 'text-violet-500'
          }`}
          onClick={() => handleTabClick('created')}
        >
          Created
        </header>
        <header
          className={`text-xl font-semibold py-4 cursor-pointer ${
            activeTab === 'voted' ? 'text-white bg-violet-400 rounded-tr-3xl' : 'text-violet-500'
          }`}
          onClick={() => handleTabClick('voted')}
        >
          Voted
        </header>
      </div>
      <div className='h-4/5 mx-4 overflow-auto'>
        {/* Pass activeTab to PollsList component if needed */}
        <PollsList polls={pollsProp} activeTab={activeTab} />
      </div>
    </div>
  )
}

export default PollType