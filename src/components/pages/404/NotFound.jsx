import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-1/3 bg-gray-200 rounded-3xl shadow-lg'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col items-center justify-center h-full px-8 py-12'>
            <header className='text-xl font-semibold text-gray-700 cursor-pointer'>404 - Page Not Found</header>
            <p className='text-gray-500 mt-4'>Sorry, the page you are looking for could not be found.</p>
          </div>
          <div className='flex justify-between px-8 py-4'>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400'>Go Back</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400'>Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
