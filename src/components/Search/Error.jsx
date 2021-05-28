import * as React from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';

import useCloseFromOutside from '../../hooks/useCloseFromOutside';

function Error({ message, handleClose }) {
  const ref = useCloseFromOutside(handleClose);

  return (
    <article
      ref={ref}
      className='absolute z-10 w-5/6 py-5 uppercase transform -translate-x-1/2 bg-red-400 rounded-lg bg-opacity-90 left-1/2 md:max-w-4xl'
    >
      <button
        aria-label='Close error message'
        className='absolute right-0.5 top-0.5 md:right-1.5 md:top-1.5 p-2 bg-red-300 rounded-lg bg-opacity-80 hover:bg-red-500 transition-colors duration-200 group focus:ring-red-500 focus:ring-2 focus:outline-none'
        onClick={handleClose}
      >
        <XIcon className='w-6 mx-auto text-gray-200 transition-colors duration-200 group-hover:text-gray-300' />
      </button>
      <p className='px-2 py-6 text-xl font-bold text-center text-gray-600'>{message}</p>
    </article>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Error;
