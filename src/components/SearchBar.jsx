import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='flex flex-row border-2 border-solid border-slate-200 rounded-3xl px-4 py-1 place-items-center'>
            <div className='w-1/6 border-r-slate-200 border-r-2 text-center text-slate-500 cursor-pointer'>Sort By</div>
            <input className='pl-4 focus:outline-none w-4/5' type="text" name="search" id="search" placeholder='Search Polls...' />
            <FontAwesomeIcon icon={faSearch} color='#64748b' width="20px" />
        </div>
  )
}

export default SearchBar