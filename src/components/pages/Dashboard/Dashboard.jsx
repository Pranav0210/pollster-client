import React from 'react'
import { faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import PollButtons from './PollButtons'
import Preview from './Preview'
import PollType from './PollType'

const Dashboard = () => {
  return (
    <div className='relative h-screen'>
        <div className='w-full flex justify-center pt-32'>
            <PollButtons icon={faPenToSquare} display="Created" count="24" />
            <PollButtons icon={faCircleCheck} display="Voted" count="50" />
        </div>
        <div className='flex flex-row h-4/6 mx-14 my-8 gap-8'>
            <PollType/>
            <Preview/>
        </div>
    </div>
  )
}

export default Dashboard