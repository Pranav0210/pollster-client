import React from 'react'
import PollItem from '../../PollItem'

const PollsList = ({ polls }) => {
  return (
    <div className='flex flex-grow flex-col text-center py-4 border-b-2 border-slate-400 text-slate-500'>
        {polls.map((poll, index) => (
        <PollItem
          key={index}
          topic={poll.topic}
          creator={poll.creator}
          tag={poll.tag}
        />
      ))}
    </div>
  )
}

export default PollsList