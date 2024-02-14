import React, { useState } from 'react'
import Modal from './Modal'
import FormTemplate from '../../FormTemplate'

const CreatePoll = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {isOpen && <Modal setIsOpen={setIsOpen}/>}
    <div className='flex flex-row bg-violet-500'>
      <div className='relative justify-center sm:w-1/2 flex h-screen place-items-center flex-col w-full  bg-white rounded-br-[20%]'>
        <section className='bg-white rounded-br-[50%]'>
          <div className='sm:text-5xl font-[750] text-3xl'>
            Create instant,<br/> real-time <span className='text-violet-500'>polls</span><br/> for free
          </div>
          <br/>
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="w-fit bg-violet-500 text-white px-2 py-1 cursor-pointer">
              <div className='px-4 py-1'>Create your poll now</div>
            </div>
            {/* <Button color="purple-500" name="Create your poll now"  /> */}
          </button>
        </section>
      </div>
       
      <div className='relative sm:w-1/2 h-screen w-full flex flex-col-reverse bg-white'>
        <FormTemplate/>
      </div>
    </div>
    </>
  )
}

export default CreatePoll