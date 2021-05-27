import * as React from 'react';
import { Redirect } from 'react-router';

import useLogin from '../hooks/useLogin';

function Login() {
  const [formData, setFormData] = React.useState(null);
  const { user, error } = useLogin(formData);

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
    <form onSubmit={handleSubmit}>
      <div className='w-2/3 pb-1 mx-auto max-w-min'>
        <label className='block py-1 pr-2 text-xl' htmlFor='email'>
          Email
        </label>
        <input
          className='p-2 text-gray-800 border-none rounded-md outline-none focus:ring-4 focus:ring-indigo-400'
          id='email'
          name='email'
          placeholder='your@email.com'
          type='email'
        />
      </div>
      <div className='w-2/3 mx-auto mb-6 max-w-min'>
        <label className='block py-1 pr-2 text-xl' htmlFor='password'>
          Password
        </label>
        <input
          className='p-2 text-gray-800 border-none rounded-md outline-none focus:ring-4 focus:ring-indigo-400'
          id='password'
          name='password'
          placeholder='Your password'
          type='password'
        />
      </div>
      <button className='block p-2 m-auto text-2xl font-black transition-all duration-100 ease-in rounded-md px-9 ring-2 ring-gray-50 ring-opacity-75 hover:ring-4 focus:ring-4 focus:ring-indigo-400 active:text-gray-200 focus:outline-none'>
        Login
      </button>
      {error && <div>{error.message}</div>}
    </form>
  );
}

export default Login;
