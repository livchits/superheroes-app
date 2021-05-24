import * as React from 'react';
import PropTypes from 'prop-types';

import useGetSuperheroes from '../hooks/useGetSuperheroes';
import Rolling from '../assets/rolling.svg?component';

import SearchResults from './SearchResults';

function SuperheroesSearch({ setTeam }) {
  const [query, setQuery] = React.useState(null);
  const { status, data: superheroes, error } = useGetSuperheroes(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setQuery(value);
  };

  return (
    <>
      <section className='w-11/12 py-8 mx-auto my-2 text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-40'>
        <div className='text-center'>
          <h1 className='inline-block py-3 mx-auto mb-6 text-3xl font-semibold bg-gradient-to-l from-blue-500 to-blue-600 px-7 rounded-xl text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
            Find Superheroes
          </h1>
        </div>
        <form className='max-w-lg px-4 mx-auto ' onSubmit={handleSubmit}>
          <label className='pl-0.5 text-lg' htmlFor='search'>
            Enter a superhero name
          </label>
          <div className='flex justify-center mt-0.5'>
            <div className='relative w-full'>
              <input
                required
                className='flex-1 w-full h-full pl-2 text-gray-500 border-2 border-gray-400 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent placeholder-opacity-80'
                id='search'
                name='search'
                placeholder='Ex: "Batman"'
                type='text'
              />
              {status === 'pending' && (
                <div className='absolute top-0 right-0 mt-2 mr-2 animate-spin'>
                  <Rolling />
                </div>
              )}
            </div>
            <button
              className='p-2 px-4 ml-2 text-lg transition duration-300 border-2 border-blue-600 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600'
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
      </section>
      {error && (
        <article className='absolute w-11/12 uppercase transform -translate-x-1/2 bg-red-300 rounded-lg bg-opacity-70 left-1/2 md:max-w-4xl'>
          <p className='px-2 py-6 text-xl font-bold text-center text-gray-600'>
            {error.message}
          </p>
        </article>
      )}
      {superheroes && <SearchResults setTeam={setTeam} superheroes={superheroes} />}
    </>
  );
}

SuperheroesSearch.propTypes = { setTeam: PropTypes.func.isRequired };

export default SuperheroesSearch;
