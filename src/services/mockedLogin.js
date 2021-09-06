export default function mockedLoginUser({ emailValue, passwordValue }) {
  const validUser = {
    username: 'challenge@alkemy.org',
    password: 'react',
  };

  const userExists = emailValue === validUser.username;
  const passwordIsCorrect = passwordValue === validUser.password;

  if (userExists && passwordIsCorrect) {
    return Promise.resolve(validUser);
  }

  return Promise.reject({
    error: {
      message: 'Wrong username or password',
    },
  });
}
