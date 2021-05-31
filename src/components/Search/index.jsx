import * as React from 'react';
import PropTypes from 'prop-types';

import useGetSuperheroes from '../../hooks/useGetSuperheroes';
import Rolling from '../../assets/rolling.svg?component';

import Results from './Results';
import Error from './Error';

function Search({ setTeam, team }) {
  const [query, setQuery] = React.useState(null);
  const { status, data: superheroes, error } = useGetSuperheroes(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setQuery(value);
  };

  const handleClose = () => setQuery(null);

  return (
    <>
      <section className='py-5 my-2 mx-auto md:mx-auto w-11/12 md:max-w-4xl text-blue-600 bg-gray-200 bg-opacity-90 rounded-md shadow-sm'>
        {error && <Error handleClose={handleClose} message={error.message} />}
        <h1 className='py-3 px-7 mx-auto mb-6 w-max text-3xl font-semibold text-center text-gray-50 bg-gradient-to-l from-blue-500 to-blue-600 rounded-xl'>
          Find Superheroes
        </h1>
        <form className='px-4 mx-auto max-w-lg ' onSubmit={handleSubmit}>
          <label className='pl-0.5 text-lg' htmlFor='search'>
            Enter a superhero name
          </label>
          <div className='flex justify-center mt-0.5'>
            <div className='relative w-full'>
              <input
                required
                className='flex-1 pl-2 w-full h-full placeholder-opacity-80 text-gray-500 rounded-xl border-2 border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 shadow-md focus:outline-none'
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
              className='p-2 px-4 ml-2 text-lg hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600 rounded-xl border-2 border-blue-600 focus:border-transparent focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 focus:outline-none'
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
      </section>
      {superheroes && (
        <Results
          handleClose={handleClose}
          setTeam={setTeam}
          superheroes={superheroes}
          team={team}
        />
      )}
    </>
  );
}

Search.propTypes = {
  setTeam: PropTypes.func.isRequired,
  team: PropTypes.array.isRequired,
};

export default Search;
