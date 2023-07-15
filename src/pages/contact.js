import React, { useRef } from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = () => {
  const inputEmailRef = useRef(null);

  /**
   * Focus email field function
   */
  const focusEmailField = () => {
    if (inputEmailRef.current) {
      inputEmailRef.current.focus();
    }
  };
  return (
    <Layout focusEmailField={focusEmailField}>
      <div className='pt-6 md:pt-14'>
        <div className='container p-4'>
          <div className='mb-10'>
            <h1 className='text-2xl mb-6'>Contact Us</h1>
            <p className='text-sm'>
              Please provide some information to get started.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2'>
              <ContactForm inputEmailRef={inputEmailRef} />
            </div>
            <div>
              <p className='mb-4'>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demostrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
              <h3 className='font-bold text-md'>Phone:</h3>
              <a
                className='text-lg text-blue block mb-4'
                href='tel:+1(877) 777-7777'
              >
                +1(877) 777-7777
              </a>
              <h3 className='font-bold text-md'>Hours:</h3>
              <p>
                Monday - Sunday: <b>7am - 11pm EST</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
