import * as React from 'react';
import PropTypes from 'prop-types';

import Appearance from './Appearance';
import Powerstats from './Powerstats';

function TeamStats({ team }) {
  return (
    <article className='w-11/12 py-5 mx-auto text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-90'>
      <h1 className='py-3 mx-auto mb-6 text-3xl font-semibold text-center w-max bg-gradient-to-l from-blue-500 to-blue-600 px-7 rounded-xl text-gray-50'>
        Team Stats
      </h1>
      {team.length ? (
        <div className='sm:flex'>
          <Powerstats team={team} />
          <Appearance team={team} />
        </div>
      ) : (
        <section className='max-w-lg px-3 mx-auto text-2xl font-bold text-center'>
          <p>Your team has no members.</p>
          <p className='mb-2 font-normal'>Search superheroes and add them to the team.</p>
          <p> Have fun!</p>
        </section>
      )}
    </article>
  );
}

TeamStats.propTypes = { team: PropTypes.array.isRequired };

export default TeamStats;
