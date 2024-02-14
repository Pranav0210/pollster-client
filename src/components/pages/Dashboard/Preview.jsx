import React from 'react'

const Preview = () => {
  return (
    <div className='w-1/3 bg-slate-100 rounded-3xl'>
        <div className='flex flex-row justify-between px-8 py-4 place-items-center'>
            <header className='text-xl font-semibold text-slate-500 cursor-pointer'>Quick Preview</header>
            <div className="w-fit bg-slate-500 rounded-3xl text-white px-2 py-1 cursor-pointer">
                <div className='px-4 py-1'>Discuss</div>
            </div>
        </div>
    </div>
  )
}

export default Preview