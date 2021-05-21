import { normalizeData } from '../utils';

const { VITE_SEARCH_URL: SEARCH_URL } = import.meta.env;

async function api(query, abortController) {
  try {
    const response = await fetch(`${SEARCH_URL}${query}`, {
      signal: abortController.signal,
    });

    if (response.ok) {
      const { results } = await response.json();
      const data = results.map(normalizeData);
      return { data };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error };
  }
}

export default api;