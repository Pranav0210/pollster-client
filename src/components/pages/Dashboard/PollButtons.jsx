import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PollButtons = ({icon, display, count}) => {
  return (
    <div className='w-34 flex place-items-center border-solid border-2 border-slate-500 rounded-md px-4 py-1 mr-2 text-slate-500 cursor-pointer hover:bg-slate-500 hover:text-white'>
        <FontAwesomeIcon icon={icon} height="2em"/>
        <div className='flex flex-col px-2 ml-2 text-center '>
            <span className='text-2xl'>{count}</span>
            <span className='text-sm'>{display}</span>
        </div>
    </div>
  )
}

export default PollButtons