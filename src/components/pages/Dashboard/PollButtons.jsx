import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PollButtons = ({icon, display, count}) => {
  return (
    <div className='w-34 flex place-items-center border-solid border-2 border-violet-400 rounded-md px-4 py-1 mr-2 text-violet-500 cursor-pointer hover:bg-violet-300 hover:text-white'>
        <FontAwesomeIcon icon={icon} size='2x'/>
        <div className='flex flex-col px-2 ml-2 text-center '>
            <span className='text-2xl'>{count}</span>
            <span className='text-sm'>{display}</span>
        </div>
    </div>
  )
}

export default PollButtons