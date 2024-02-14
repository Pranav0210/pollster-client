import React from 'react'

const FormTemplate = () => {
  return (
    <section className='w-full h-[91%] rounded-tl-[20%] bg-violet-500 relative flex flex-col justify-center place-items-center'>
          <div className='relative flex flex-col w-[70%] xl:w-[60%] bg-white p-10 px-10 xl:px-16 rounded-3xl'>
            <header className='text-2xl font-bold'>What is the most commonly used code editor?</header>
            <p className='text-sm my-2'>Created By <span className='font-medium'>Anonymous</span></p>
            <div className='border-2 border-solid drop-shadow-md bg-white rounded-md my-2 mt-8 flex flex-row'>
              <div className='p-4 bg-violet-500 rounded-md text-white w-4/5'>Visual Studio Code</div>
              <span className='absolute right-4 text-violet-500 py-4'>80%</span>
            </div>
            <div className='border-2 border-solid drop-shadow-md bg-white rounded-md my-2 flex flex-row'>
              <div className='p-4 bg-violet-500 rounded-md text-white w-2/5'>Atom</div>
              <span className='absolute right-4 text-violet-500 py-4'>40%</span>
            </div>
            <div className='border-2 border-solid drop-shadow-md bg-white rounded-md my-2 flex flex-row'>
              <div className='p-4 bg-violet-500 rounded-md text-white w-3/5'>Sublime</div>
              <span className='absolute right-4 text-violet-500 py-4'>60%</span>
            </div>
            <div className='border-2 border-solid drop-shadow-md bg-white rounded-md my-2 flex flex-row'>
              <div className='p-4 bg-violet-500 rounded-md text-white w-1/5'>Vim</div>
              <span className='absolute right-4 text-violet-500 py-4'>20%</span>
            </div>
          </div>
        </section> 
  )
}

export default FormTemplate