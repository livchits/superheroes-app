import { LOGIN_URL } from '../constants';

export default function loginUser(formData, abortController) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    body: formData,
    signal: abortController.signal,
  })
    .then((response) => {
      if (response.ok || response.status === 401) {
        return response.json();
      }
    })
    .then((data) => data);
}
