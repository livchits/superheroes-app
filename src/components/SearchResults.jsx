import * as React from 'react';
import PropTypes from 'prop-types';

function SearchResults({ superheros }) {
  return (
    <article className='absolute w-11/12 transform -translate-x-1/2 bg-gray-300 rounded-lg bg-opacity-70 left-1/2 md:max-w-4xl'>
      <ul className='text-blue-600 sm:flex sm:flex-wrap'>
        {superheros.map(({ name, id, imageUrl }) => (
          <li key={id} className='flex justify-center rounded-lg sm:w-5/12 sm:mx-2'>
            <img alt={name} className='h-40 p-2 rounded-2xl' src={imageUrl} />
            <div className='flex flex-col justify-around p-2'>
              <p className='text-xl font-bold text-center'>{name}</p>
              <button
                className='block p-2 px-4 text-lg transition-colors duration-300 border-2 border-blue-600 rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 hover:bg-blue-600 active:bg-blue-500'
                type='submit'
              >
                Add to team
              </button>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

SearchResults.propTypes = { superheros: PropTypes.array.isRequired };

export default SearchResults;
