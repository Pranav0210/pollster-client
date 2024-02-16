import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PollItem from './PollItem'
import axios from 'axios'

const PollsList = ({polls}) => {
  return (
    <div className='flex flex-grow flex-col text-center py-4 text-slate-500'>
        {polls.map((poll, index) => (
        <PollItem
          key={index}
          pollid={poll._id}
          topic={poll.topic}
          creator={poll.created_by}
          tag={poll.tag}
        />
      ))}
    </div>
  )
}

export default PollsList