import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='w-full p-4 h-fit fixed bg-white text-16 drop-shadow-md z-10 grid grid-cols-3 justify-between '>

        <div className='w-full flex justify-start'>
            Home
        </div>
        <SearchBar/>
        <div className='w-full flex justify-end place-items-center'>
            <FontAwesomeIcon icon={faBell} width="20px" color='#8b5cf6' className='cursor-pointer mr-2' />
            <span className='px-4 py-2 text-violet-500 cursor-pointer border-r-2 border-solid border-slate-200'>Polls</span>
            <span className='px-4 py-2 text-violet-500 cursor-pointer'>Login</span>
            <div className="w-fit bg-violet-500 rounded-3xl text-white px-2 py-1 cursor-pointer hover:bg-white hover:text-violet-500 border-solid border-2 border-violet-500">
                <div className='px-4 py-1'>Sign Up</div>
            </div>
        </div>

    </div>
  )
}

export default Navbar