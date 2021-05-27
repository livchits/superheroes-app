import { LOGIN_URL } from '../constants';

export default function loginUser(formData) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((tokenObject) => tokenObject);
  // .then(({ token }) => {
  //   window.localStorage.setItem(
  //     `superheores_app_user_${token}`,
  //     JSON.stringify({ token })
  //   );
  //   return { [`superheores_app_user_${token}`]: { token } };
  // });
}
