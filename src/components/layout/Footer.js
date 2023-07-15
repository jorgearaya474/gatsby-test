import React from 'react';
import arrow from '../../images/arrow.png';
import location from '../../images/logolocation.png';

const Footer = ({ focusEmailField }) => {
  /**
   * Arrow click fucntion
   */
  const handleArrowClick = () => {
    focusEmailField();
  };
  return (
    <footer id='site-footer' className='dark-background'>
      <div className='footer-content py-10 md:py-24'>
        <div className='container p-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <a
                className='block text-white text-sm mb-2'
                href='tel:+1(877) 777-7777'
              >
                ✆ +1(877) 777-7777
              </a>
              <div className='flex'>
                <img className='pr-2' alt='Location' src={location} />
                <p className='text-white text-sm'>
                  123 Main st, San Francisco, CA, 94107
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
              <div>
                <h3 className='mb-2 text-md font-semibold text-white'>
                  Free Trial
                </h3>
                <ul className='max-w-md space-y-3 text-white text-sm list-none list-inside'>
                  <li>
                    <a href='#'>Azure</a>
                  </li>
                  <li>
                    <a href='#'>AWS</a>
                  </li>
                  <li>
                    <a href='#'>Google</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-2 text-md font-semibold text-white'>
                  Resources
                </h3>
                <ul className='max-w-md space-y-3 text-white text-sm list-none list-inside'>
                  <li>
                    <a href='#'>Terms Of Service</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Support</a>
                  </li>
                </ul>
              </div>
              <div className='relative'>
                <img
                  className='absolute -top-6 right-10'
                  alt='Arrow'
                  src={arrow}
                  onClick={handleArrowClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center border-t-2 border-gray-400 p-4'>
        <p className='text-white'>© 2022 Example</p>
      </div>
    </footer>
  );
};
export default Footer;
