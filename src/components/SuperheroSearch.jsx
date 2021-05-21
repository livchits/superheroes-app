import * as React from 'react';

import useGetSuperheros from '../hooks/useGetSuperheros';

function SuperheroSearch() {
  const [query, setQuery] = React.useState(null);
  const { status, data, error } = useGetSuperheros(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setQuery(value);
  };

  return (
    <section>
      <h1>Search a Superhero</h1>
      <form onSubmit={handleSubmit}>
        <input id='search' name='search' type='text' />
        <button type='submit'>Search</button>
      </form>
      {data && (
        <ul>
          {data.map((superhero) => (
            <li key={superhero.id}>{superhero.fullName}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default SuperheroSearch;
