import * as React from 'react';
import PropTypes from 'prop-types';

import Appearance from './Appearance';
import Powerstats from './Powerstats';

function TeamStats({ team }) {
  return (
    <article className='py-5 mx-auto w-11/12 md:max-w-4xl text-blue-600 bg-gray-200 bg-opacity-90 rounded-md shadow-sm'>
      <h1 className='py-3 px-7 mx-auto mb-6 w-max text-3xl font-semibold text-center text-gray-50 bg-gradient-to-l from-blue-500 to-blue-600 rounded-xl'>
        Team Stats
      </h1>
      {team.length ? (
        <div className='sm:flex md:px-7'>
          <Powerstats team={team} />
          <Appearance team={team} />
        </div>
      ) : (
        <section className='px-3 mx-auto max-w-lg text-2xl font-bold text-center'>
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
