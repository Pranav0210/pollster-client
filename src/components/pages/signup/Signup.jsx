import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center h-screen place-items-center'>
        <div className='absolute w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%] bg-white border-2 border-slate-100 drop-shadow-md rounded-lg p-8 px-12 mt-12'>
            <header className='text-3xl font-bold text-center mb-4 text-slate-600'>Sign Up</header>
            <section className='flex flex-col place-items-center'>
                <input className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-2 focus:outline-none' type="text" name="question" id="question" placeholder='First Name' />
                <input className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-2 focus:outline-none' type="text" name="question" id="question" placeholder='Last Name' />
                <input className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-2 focus:outline-none' type="text" name="question" id="question" placeholder='Email' />
                <input className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-2 focus:outline-none' type="password" name="option1" id="option1" placeholder='Password' />
                <input className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-2 focus:outline-none' type="password" name="option1" id="option1" placeholder=' Confirm Password' />
                    <div className="rounded-md w-full mt-8 text-center bg-violet-500 text-white p-2 cursor-pointer">
                        <div className='px-4 py-1 text-lg'>Sign Up</div>
                    </div>
                    <p className='pt-6 text-sm text-slate-500'>Already have an account? <span className='text-violet-500 font-semibold cursor-pointer'>Login</span></p>
            </section>
        </div>
    </div>
  )
}

export default Signup