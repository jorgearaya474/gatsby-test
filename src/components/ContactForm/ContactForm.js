import React, { useState } from 'react';
import { isPhoneValid } from '../../utils/utils';
import ThankYouMessage from '../ThankYouMessage';

const ContactForm = () => {
  const [fields, setFields] = useState({
    email: '',
    name: '',
    phone: '',
    subject: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);

  /**
   * Validate form input values
   * @param {*} inputValues
   * @returns
   */
  const validateForm = (inputValues) => {
    let errors = {};

    if (inputValues.email.includes('@gmail.com')) {
      errors.email = 'Email addresses with gmail.com are not allowed';
    }

    if (!isPhoneValid(inputValues.phone)) {
      errors.phone = 'Please enter a valid 10 digit phone number';
    }

    return errors;
  };

  /**
   * Handle form submit
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form values
    setFormErrors(validateForm(fields));
    setFormSubmitting(true);
  };

  /**
   * Set field value
   * @param {*} element
   */
  const handleFieldChange = (element) => {
    setFields({ ...fields, [element.target.name]: element.target.value });
  };

  return (
    <div className='contact-form'>
      {Object.keys(formErrors).length === 0 && formSubmitting ? (
        <ThankYouMessage />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-7'>
            <input
              type='email'
              id='email'
              name='email'
              className='block w-full py-3 px-5 bg-white border border-gray-300 text-gray-500 text-md rounded'
              placeholder='Email'
              required
              onChange={handleFieldChange}
              style={{ border: formErrors.email ? '2px solid red' : null }}
            />
            {formErrors.email ? (
              <p className='text-red-500'>{formErrors.email}</p>
            ) : null}
          </div>
          <div className='mb-7'>
            <input
              type='text'
              id='name'
              name='name'
              className='block w-full py-3 px-5 bg-white border border-gray-300 text-gray-500 text-md rounded'
              placeholder='Name'
              required
              onChange={handleFieldChange}
            />
          </div>
          <div className='mb-7'>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='block w-full py-3 px-5 bg-white border border-gray-300 text-gray-500 text-md rounded'
              placeholder='Phone Number'
              required
              onChange={handleFieldChange}
              style={{ border: formErrors.phone ? '2px solid red' : null }}
            />
            {formErrors.phone ? (
              <p className='text-red-500'>{formErrors.phone}</p>
            ) : null}
          </div>
          <div className='mb-7'>
            <label
              htmlFor='subject'
              className='block relative w-fit bg-white ml-12 -mb-3 py-1 px-3 text-sm font-medium text-gray-400'
            >
              How Can We Help You?
            </label>
            <select
              id='subject'
              name='subject'
              className='block w-full py-3 px-5 bg-white border border-gray-300 text-gray-500 text-md rounded'
              onChange={handleFieldChange}
              defaultValue={`Select an option`}
            >
              <option disabled>Select an option</option>
              <option value='sales'>Sales</option>
              <option value='press'>Press</option>
              <option value='support'>Support</option>
              <option value='demo'>Demo</option>
            </select>
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='right-0 text-white bg-black hover:bg-blue-800 rounded text-2xl py-2.5 px-11'
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
