import * as React from 'react';

import api from '../api/api';

function SuperheroSearch() {
  const [query, setQuery] = React.useState(null);
  const [{ status, data }, setState] = React.useState({
    status: 'idle',
    data: null,
    error: null,
  });

  React.useEffect(() => {
    const abortController = new AbortController();
    const getSuperheros = async (query) => {
      setState((state) => ({ ...state, status: 'pending' }));
      const { data, error } = await api(query, abortController);
      error
        ? setState((state) => ({ ...state, status: 'rejected', error }))
        : setState((state) => ({ ...state, status: 'resolved', data }));
    };
    if (query !== null) {
      getSuperheros(query);
    }
    return () => {
      abortController.abort();
    };
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setQuery(value);
  };
  console.log(data);
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
