import * as React from 'react';
import PropTypes from 'prop-types';

import Appearance from './Appearance';
import Powerstats from './Powerstats';

function TeamStats({ team }) {
  return (
    <section className='w-11/12 py-8 mx-auto my-2 text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-40'>
      <div className='text-center'>
        <h1 className='inline-block py-3 mx-auto mb-6 text-3xl font-semibold bg-gradient-to-l from-blue-500 to-blue-600 px-7 rounded-xl text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
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

TeamStats.propTypes = { team: PropTypes.array.isRequired };

export default TeamStats;
