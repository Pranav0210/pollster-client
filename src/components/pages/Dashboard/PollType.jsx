import React from 'react'
import PollsList from './PollsList'

const PollType = () => {
  const polls = [
    { topic: 'Favorite Color', creator: 'John', tag: 'General' },
    { topic: 'Best Movie', creator: 'Alice', tag: 'Entertainment' },
    { topic: 'Weekend Plans', creator: 'Bob', tag: 'Leisure' }
  ];
  return (
    <div className='w-2/3 bg-slate-100 rounded-3xl'>
        <div className='grid grid-cols-3 text-center'>
            <header className='text-xl font-semibold rounded-tl-3xl py-4 text-white bg-slate-400 cursor-pointer'>New Polls</header>
            <header className='text-xl font-semibold py-4 text-slate-500 cursor-pointer'>Created</header>
            <header className='text-xl font-semibold py-4 text-slate-500 cursor-pointer'>Voted</header>
        </div>
        <div className='h-4/5 mx-4'>
            <PollsList polls={polls}/>
        </div>
    </div>
  )
}

export default PollType