import * as React from 'react';
import { Redirect } from 'react-router';

import useLogin from '../hooks/useLogin';
import Rolling from '../assets/rolling.svg?component';
import LoginError from '../components/LoginError';
import { checkIfAnyInputIsEmpty } from '../utils/checkIfInputsAreEmpty';

function Login() {
  const [formData, setFormData] = React.useState(null);
  const [inputError, setInputerror] = React.useState({ error: false, message: null });
  const { user, error, status } = useLogin(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      email: { value: emailValue },
      password: { value: passwordValue },
    } = event.target.elements;

    if (checkIfAnyInputIsEmpty([emailValue, passwordValue])) {
      setInputerror({
        error: true,
        message: 'Neither the email nor the password can be empty',
      });
    } else {
      const formData = new FormData(event.target);
      setFormData(formData);
    }
  };

  return user ? (
    <Redirect to='/home' />
  ) : (
    <div className='flex flex-col justify-center h-screen'>
      <main className='sm:mx-auto sm:w-11/12 md:max-w-md h-screen sm:h-3/4 text-gray-700 bg-gray-200 bg-opacity-70 rounded-md shadow-sm'>
        <h1 className='py-12 px-1 text-4xl sm:text-5xl leading-normal text-center'>
          Welcome to the <br />
          <span className='text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-blue-600'>
            Superheroes App
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='pb-6 mx-auto w-2/3 max-w-min'>
            <label className='block pl-0.5 text-lg font-bold' htmlFor='email'>
              Email
            </label>
            <input
              className='p-2.5 text-gray-700 rounded-md border-none ring-1 focus:ring-4 ring-gray-300 focus:ring-blue-500 shadow-sm outline-none'
              id='email'
              name='email'
              placeholder='your@email.com'
              type='email'
            />
          </div>
          <div className='mx-auto mb-6 w-2/3 max-w-min'>
            <label className='block pl-0.5 text-lg font-bold' htmlFor='password'>
              Password
            </label>
            <input
              className='p-2.5 text-gray-700 rounded-md border-none ring-1 focus:ring-4 ring-gray-300 focus:ring-blue-500 shadow-sm outline-none'
              id='password'
              name='password'
              placeholder='Your password'
              type='password'
            />
          </div>
          <button
            className={`block w-32 px-4 py-2 mx-auto text-2xl font-bold text-blue-600 transition duration-300 shadow-md ring-2 ring-blue-600 rounded-xl focus:ring-4 focus:ring-blue-500 focus:outline-none focus:border-transparent bg-gradient-to-l ${status === 'pending'
                ? 'hover:bg-transparent'
                : 'hover:from-blue-500 hover:to-blue-600 hover:text-gray-100'
              }`}
          >
            {status === 'pending' ? (
              <div className='mx-auto w-min bg-transparent animate-spin'>
                <Rolling />
              </div>
            ) : (
              'Login'
            )}
          </button>
          {error.error || inputError.error ? (
            <LoginError message={error.message || inputError.message} />
          ) : null}
        </form>
      </main>
    </div>
  );
}

export default Login;
