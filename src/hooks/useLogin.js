import * as React from 'react';

import { useUser } from '../context/UserContext';
import loginUser from '../services/loginUser';

function useLogin(formData) {
  const [user, setUser] = useUser();
  const [error, setError] = React.useState({ error: false, message: null });

  React.useEffect(() => {
    if (formData) {
      loginUser(formData)
        .then((responseData) => {
          if (responseData.error) {
            throw new Error(responseData.error);
          }
          window.localStorage.setItem(
            'superheroes_app_user',
            JSON.stringify(responseData)
          );
          setUser({ superheroes_app_user: responseData });
        })
        .catch((error) => {
          setError({ error: true, message: error.message });
        });
    }
  }, [formData, setUser]);

  return { user, error };
}

export default useLogin;
