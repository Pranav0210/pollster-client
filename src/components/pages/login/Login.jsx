import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('http://13.233.172.140:8080/api/v1/auth/login', {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.data.accesstoken) {
      sessionStorage.setItem('accesstoken', response.data.accesstoken);
      sessionStorage.setItem('user_id', response.data.email);
      navigate('/');
      window.location.reload();
    } else {
      console.log(response.error);
    }
  };

  const handleChange = e => {
    if (e.currentTarget.name === 'email') {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };
  return (
    <div className='flex justify-center h-screen place-items-center'>
        <div className='absolute w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%] bg-white border-2 border-slate-100 drop-shadow-md rounded-lg p-8 px-12'>
            <header className='text-3xl font-bold text-center mb-12 text-slate-600'>Login</header>
            <section className='flex flex-col place-items-center'>
                <input 
                  className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-4 focus:outline-none' 
                  onChange={handleChange}
                  type="text" 
                  name="email" 
                  id="email" 
                  placeholder='Email' />
                <input 
                  className='rounded-md border-2 border-solid border-slate-100 drop-shadow-lg p-4 w-full my-4 focus:outline-none' 
                  onChange={handleChange}
                  type="password" 
                  name="password" 
                  id="pass" 
                  placeholder='Password' />
                    <div className="rounded-md w-full mt-16 text-center bg-violet-500 text-white p-2 cursor-pointer">
                        <div onClick={handleSubmit} className='px-4 py-1 text-lg'>Login</div>
                    </div>
                    <p className='pt-6 text-sm text-slate-500'>Do not have an account? <span className='text-violet-500 font-semibold cursor-pointer'><Link to={'/signup'}>Sign Up</Link></span></p>
            </section>
        </div>
    </div>
  )
}

export default Login