import * as React from 'react';
import { Redirect } from 'react-router';

import useLogin from '../hooks/useLogin';
import Rolling from '../assets/rolling.svg?component';
import LoginError from '../components/LoginError';

function Login() {
  const [formData, setFormData] = React.useState(null);
  const { user, error, status } = useLogin(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      email: { value: emailValue },
      password: { value: passwordValue },
    } = event.target.elements;

    const formData = new FormData(event.target);
    setFormData(formData);
  };

  return user ? (
    <Redirect to='/home' />
  ) : (
    <main className='h-screen text-gray-700 bg-gray-200 rounded-md shadow-sm md:max-w-md bg-opacity-40 sm:w-11/12 sm:mx-auto'>
      <h1 className='py-12 text-4xl leading-normal text-center text-shadow sm:text-5xl'>
        Welcome to the <br />
        <span className='text-5xl font-bold text-transparent bg-clip-text text-shadow-none bg-gradient-to-l from-blue-500 to-blue-600 sm:text-6xl'>
          Superheroes App
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='w-2/3 pb-6 mx-auto max-w-min'>
          <label className='block pl-0.5 text-lg font-bold' htmlFor='email'>
            Email
          </label>
          <input
            className='p-2.5 text-gray-700 border-none rounded-md shadow-sm outline-none ring-1 ring-gray-300 focus:ring-4 focus:ring-blue-500'
            id='email'
            name='email'
            placeholder='your@email.com'
            type='email'
          />
        </div>
        <div className='w-2/3 mx-auto mb-6 max-w-min'>
          <label className='block text-lg pl-0.5 font-bold' htmlFor='password'>
            Password
          </label>
          <input
            className='p-2.5 text-gray-700 border-none rounded-md shadow-sm outline-none ring-1 ring-gray-300 focus:ring-4 focus:ring-blue-500'
            id='password'
            name='password'
            placeholder='Your password'
            type='password'
          />
        </div>
        <button
          className={`${status === 'pending'
              ? 'hover:bg-transparent'
              : 'hover:from-blue-500 hover:to-blue-600 hover:text-gray-100'
            } block w-32 px-4 py-2 mx-auto text-2xl font-bold text-blue-600 transition duration-300 shadow-md ring-2 ring-blue-600 rounded-xl focus:ring-4 focus:ring-blue-500 focus:outline-none focus:border-transparent bg-gradient-to-l`}
        >
          {status === 'pending' ? (
            <div className='mx-auto bg-transparent w-min animate-spin'>
              <Rolling />
            </div>
          ) : (
            'Login'
          )}
        </button>
        {error.error && <LoginError message={error.message} />}
      </form>
    </main>
  );
}

export default Login;
