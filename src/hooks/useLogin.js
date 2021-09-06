import * as React from 'react';

import { useUser } from '../context/UserContext';
import mockedLoginUser from '../services/mockedLogin';

function useLogin(loginData) {
  const [user, setUser] = useUser();
  const [error, setError] = React.useState({ error: false, message: null });
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    let shouldSetUser = true;

    if (loginData) {
      setStatus('pending');
      mockedLoginUser(loginData)
        .then((responseData) => {
          if (responseData.error) {
            throw new Error(responseData.error);
          }
          window.localStorage.setItem(
            'superheroes_app_user',
            JSON.stringify(responseData)
          );
          if (shouldSetUser) {
            setUser({ superheroes_app_user: responseData });
          }
        })
        .catch(({ error }) => {
          setError({ error: true, message: error.message });
        })
        .finally(() => setStatus('complete'));
    }

    return () => (shouldSetUser = false);
  }, [loginData, setUser]);

  return { user, error, status };
}

export default useLogin;
