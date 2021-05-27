import { LOGIN_URL } from '../constants';

export default function loginUser(formData) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok || response.status === 401) {
        return response.json();
      }
    })
    .then((data) => data);
}
