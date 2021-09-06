export function mockedLoginUser(username, password) {
  const validUser = {
    username: 'challenge@alkemy.org',
    password: 'react',
  };

  const userExists = username === validUser.username;
  const passwordIsCorrect = password === validUser.password;

  if (userExists && passwordIsCorrect) {
    return Promise.resolve(validUser);
  }

  return Promise.reject({
    error: {
      message: 'Wrong username or password',
    },
  });
}
