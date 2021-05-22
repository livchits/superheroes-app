import * as React from 'react';

import api from '../api/api';

function useGetSuperheros(query) {
  const [{ status, data, error }, setState] = React.useState({
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
      setState({ data: null, error: null, status: 'idle' });
      abortController.abort();
    };
  }, [query]);

  return { data, status, error };
}

export default useGetSuperheros;
