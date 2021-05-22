import * as React from 'react';

import useGetSuperheroes from '../hooks/useGetSuperheroes';

import SearchResults from './SearchResults';

function SuperheroesSearch() {
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
          <h1 className='inline-block py-3 mx-auto mb-6 text-3xl font-semibold bg-blue-600 px-7 rounded-xl text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
            Find Superheroes
          </h1>
        </div>
        <form className='max-w-lg px-4 mx-auto ' onSubmit={handleSubmit}>
          <label className='pl-0.5 text-lg' htmlFor='search'>
            Enter a superhero name
          </label>
          <div className='flex justify-center mt-0.5'>
            <input
              className='flex-1 pl-2 text-gray-500 border-2 border-gray-400 rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent placeholder-opacity-80'
              id='search'
              name='search'
              placeholder='Ex: "Batman"'
              type='text'
            />
            <button
              className='p-2 px-4 ml-2 text-lg transition duration-300 border-2 border-blue-600 rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 hover:bg-blue-600 active:bg-blue-500'
              type='submit'
            >
              Search
            </button>
          </div>
        </form>
      </section>
      {superheroes && <SearchResults superheroes={superheroes} />}
    </>
  );
}

export default SuperheroesSearch;
