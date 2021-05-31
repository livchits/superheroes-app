import * as React from 'react';
import PropTypes from 'prop-types';

function LoginError({ message }) {
  return (
    <article className='py-5 mx-auto mt-8 w-5/6 sm:max-w-md uppercase bg-red-400 bg-opacity-90 rounded-lg transform'>
      <p className='py-6 px-2 text-xl font-bold text-center text-gray-700'>{message}</p>
    </article>
  );
}

LoginError.propTypes = { message: PropTypes.string.isRequired };

export default LoginError;
