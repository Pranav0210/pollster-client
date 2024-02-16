import React from 'react'
import { useState, useEffect } from 'react'
import { faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import PollButtons from './PollButtons'
import Preview from './Preview'
import PollSection from './PollSection'
import Navbar from '../../Navbar'
import Modal from './Modal'
import axios from 'axios'

const SelectedPollContext = React.createContext()
const Dashboard = () => {
  const [selectedPoll, setSelectedPoll] = useState("")
  const [pollsCreated, setPollsCreated] = useState(0);
  const [pollsVoted, setPollsVoted] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const userResponse = await axios.get(`http://13.233.172.140:8080/api/v1/users/${sessionStorage.getItem('user_id')}`, {
        headers:{
          'Authorization': `Bearer ${sessionStorage.getItem('accesstoken')}`,
          'Content-Type': 'application/json',
        },
      })
      console.log(userResponse)
      setPollsCreated(userResponse.data.polls_created)
      setPollsVoted(userResponse.data.polls_voted)
    }
    fetchData()
  },[])

  return (
      <div className='relative h-screen'>
          <Navbar/>
          <div className='w-full flex justify-center pt-32'>
              <PollButtons icon={faPenToSquare} display="Created" count={pollsCreated} />
              <PollButtons icon={faCircleCheck} display="Voted" count={pollsVoted} />
          </div>
          <SelectedPollContext.Provider value={{selectedPoll, setSelectedPoll}}>
            <div className='flex flex-row h-4/6 mx-14 my-8 gap-8'>
                <PollSection/>
                <Preview/>
            </div>
          </SelectedPollContext.Provider>
      </div>
  )
}

export {SelectedPollContext}
export default Dashboard