import * as React from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';

import { superheroIsOkToAdd } from '../../utils';
import useCloseFromOutside from '../../hooks/useCloseFromOutside';

function Results({ superheroes, setTeam, team, handleClose }) {
  const ref = useCloseFromOutside(handleClose);

  const handleAdd = (superhero) => {
    const { error, messages, newTeam } = superheroIsOkToAdd(team, superhero);

    error ? alert(messages) : setTeam(newTeam);
  };

  return (
    <article
      ref={ref}
      className='absolute left-1/2 w-11/12 md:max-w-4xl bg-gray-300 bg-opacity-90 rounded-lg transform -translate-x-1/2'
    >
      <button
        aria-label='Close search results'
        className='group absolute top-0.5 md:top-1.5 right-0.5 md:right-1.5 p-2 bg-gray-400 hover:bg-gray-500 bg-opacity-80 rounded-lg border focus:ring-2 focus:ring-gray-600 transition-colors duration-200 focus:outline-none'
        onClick={handleClose}
      >
        <XIcon className='mx-auto w-6 text-gray-600 group-hover:text-gray-300 transition-colors duration-200' />
      </button>
      <ul className='sm:flex sm:flex-wrap sm:px-2 my-4 md:w-auto text-blue-600'>
        {superheroes.map((superhero) => {
          const { name, id, imageUrl } = superhero;

          return (
            <li key={id} className='flex justify-center mx-3 sm:w-5/12'>
              <img alt={name} className='m-2 h-40 rounded-2xl shadow-md' src={imageUrl} />
              <div className='flex flex-col justify-around items-center p-2 py-6 w-1/2'>
                <p className='h-full text-xl font-bold text-center'>{name}</p>
                <button
                  className='block p-2 px-3 w-32 text-lg hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600 rounded-xl border-2 border-blue-600 focus:border-transparent focus:ring-2 focus:ring-blue-500 shadow-md transition-colors duration-300 focus:outline-none'
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
