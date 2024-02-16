import React from 'react'
import { useContext, useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import Modal from './pages/Dashboard/Modal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleLogout() {
  }
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
      <div className='w-full p-4 h-fit fixed bg-white text-16 drop-shadow-md z-10 grid grid-cols-3 justify-between '>

          <div className="w-fit bg-violet-500 rounded-3xl text-white px-2 py-1 cursor-pointer hover:bg-white hover:text-violet-500 border-solid border-2 border-violet-500">
              <div className='px-4 py-1' onClick={() => setIsOpen(!isOpen)}>Create a Poll</div>
          </div>
          <SearchBar/>
          <div className='w-full flex justify-end place-items-center'>
              <button >
              <span className='px-4 py-2 text-violet-500 cursor-pointer'>Profile</span>
              <FontAwesomeIcon icon={faBell} size="2x" width="20px" color='#8b5cf6' className='cursor-pointer mr-2' />
              </button>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className='px-4 py-2 text-violet-500 cursor-pointer' onClick={handleLogout}>Logout</span>
          </div>

      </div>
    </>
  )
}

export default Navbar;