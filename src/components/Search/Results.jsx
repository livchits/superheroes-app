import * as React from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';

import { superheroIsOkToAdd } from '../../utils';
import useCloseFromOutside from '../../hooks/useCloseFromOutside';

function Results({ superheroes, setTeam, team, handleClose }) {
  const ref = useCloseFromOutside(handleClose);

  const handleAdd = (superhero) => {
    const addChecking = superheroIsOkToAdd(team, superhero);

    addChecking.error
      ? alert(...addChecking.messages)
      : setTeam([...addChecking.newTeam]);
  };

  return (
    <article
      ref={ref}
      className='absolute w-11/12 transform -translate-x-1/2 bg-gray-300 rounded-lg bg-opacity-90 left-1/2 md:max-w-4xl'
    >
      <button
        aria-label='Close search results'
        className='absolute right-0.5 top-0.5 md:right-1.5 md:top-1.5 p-2 bg-gray-400 border rounded-lg bg-opacity-80 hover:bg-gray-500 transition-colors duration-200 group focus:ring-gray-600 focus:ring-2 focus:outline-none'
        onClick={handleClose}
      >
        <XIcon className='w-6 mx-auto text-gray-600 transition-colors duration-200 group-hover:text-gray-300' />
      </button>
      <ul className='my-4 text-blue-600 sm:flex sm:flex-wrap sm:px-2 md:w-auto'>
        {superheroes.map((superhero) => {
          const { name, id, imageUrl } = superhero;

          return (
            <li key={id} className='flex justify-center mx-3 sm:w-5/12'>
              <img alt={name} className='h-40 m-2 shadow-md rounded-2xl' src={imageUrl} />
              <div className='flex flex-col items-center justify-around w-1/2 p-2 py-6'>
                <p className='h-full text-xl font-bold text-center'>{name}</p>
                <button
                  className='block w-32 p-2 px-3 text-lg transition-colors duration-300 border-2 border-blue-600 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600'
                  type='submit'
                  onClick={() => handleAdd(superhero)}
                >
                  Add to team
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

Results.propTypes = {
  superheroes: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired,
  team: PropTypes.array.isRequired,
  handleClose: PropTypes.func,
};

export default Results;
