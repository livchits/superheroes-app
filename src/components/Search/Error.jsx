import * as React from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';

import useCloseFromOutside from '../../hooks/useCloseFromOutside';

function Error({ message, handleClose }) {
  const ref = useCloseFromOutside(handleClose);

  return (
    <article
      ref={ref}
      className='absolute left-1/2 z-10 py-5 w-5/6 md:max-w-4xl uppercase bg-red-400 bg-opacity-90 rounded-lg transform -translate-x-1/2'
    >
      <button
        aria-label='Close error message'
        className='group absolute top-0.5 md:top-1.5 right-0.5 md:right-1.5 p-2 bg-red-300 hover:bg-red-500 bg-opacity-80 rounded-lg focus:ring-2 focus:ring-red-500 transition-colors duration-200 focus:outline-none'
        onClick={handleClose}
      >
        <XIcon className='mx-auto w-6 text-gray-200 group-hover:text-gray-300 transition-colors duration-200' />
      </button>
      <p className='py-6 px-2 text-xl font-bold text-center text-gray-600'>{message}</p>
    </article>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Error;
