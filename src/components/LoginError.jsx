import * as React from 'react';
import PropTypes from 'prop-types';

function LoginError({ message }) {
  return (
    <article className='w-5/6 py-5 mx-auto mt-8 uppercase transform bg-red-400 rounded-lg bg-opacity-90 sm:max-w-md'>
      <p className='px-2 py-6 text-xl font-bold text-center text-gray-700'>{message}</p>
    </article>
  );
}

LoginError.propTypes = { message: PropTypes.string.isRequired };

export default LoginError;
