import { normalizeData } from '../utils';
import { SEARCH_URL } from '../constants';

async function api(query, abortController) {
  try {
    const response = await fetch(`${SEARCH_URL}${query}`, {
      signal: abortController.signal,
    });

    if (response.ok) {
      const { error, results } = await response.json();
      if (error) {
        throw new Error(error);
      }
      const data = results.map(normalizeData);
      return { data };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return { error };
  }
}

export default api;
