import React from 'react'
import { Link } from 'react-router-dom'
import PollVoting from './PollVoting'


const Preview = () => {
  return (
    <div className='w-1/3 bg-slate-100 rounded-3xl'>
        <div className='flex flex-row justify-between px-6 py-4 place-items-center'>
            <header className='text-xl font-semibold text-violet-500 place-content-center'>Quick Vote</header>
            <div className="w-fit bg-rose-500 rounded-3xl text-white px-2 py-1 cursor-pointer hover:bg-white hover:text-rose-500 border-solid border-2 border-rose-500">
                <Link to={'/poll'}>
                  <div className='px-4 py-1'>Report</div>
                </Link>
            </div>
        </div>
        <PollVoting/>
    </div>
  )
}

export default Preview