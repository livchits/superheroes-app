import * as React from 'react';

import { team } from '../constants';

import Appearance from './Appearance';
import Powerstats from './Powerstats';

function TeamStats() {
  return (
    <section className='w-11/12 py-8 mx-auto my-2 text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-40'>
      <div className='text-center'>
        <h1 className='inline-block px-12 py-3 mx-auto mb-6 text-3xl font-semibold bg-blue-600 rounded-full text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
          Team Stats
        </h1>
      </div>
      <div className='sm:flex'>
        <Powerstats team={team} />
        <Appearance team={team} />
      </div>
    </section>
  );
}

export default TeamStats;
