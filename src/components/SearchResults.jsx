import * as React from 'react';
import PropTypes from 'prop-types';

import { superheroIsOkToAdd } from '../utils';

function SearchResults({ superheroes, setTeam, team }) {
  const handleAdd = (superhero) => {
    const addChecking = superheroIsOkToAdd(team, superhero);

    addChecking.error
      ? alert(...addChecking.messages)
      : setTeam([...addChecking.newTeam]);
  };

  return (
    <article className='absolute w-11/12 transform -translate-x-1/2 bg-gray-300 rounded-lg bg-opacity-70 left-1/2 md:max-w-4xl'>
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

SearchResults.propTypes = {
  superheroes: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired,
  team: PropTypes.array.isRequired,
};

export default SearchResults;
