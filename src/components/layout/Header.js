import React from 'react';

const Header = () => {
  return (
    <header id='site-header'>
      <div className='dark-background flex justify-center items-center h-9'>
        <div className='container py-1 px-2'>
          <p className='text-sm text-gray-300 text-center'>
            Learn more about our latest features
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='container p-4'>
          <h2 className='text-center text-black font-bold text-2xl'>
            Company Name
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
