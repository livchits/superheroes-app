import * as React from 'react';
import PropTypes from 'prop-types';

import SuperheroCard from './SuperheroCard';

function SuperheroesList({ team }) {
  return (
    <section className='w-11/12 py-8 mx-auto my-2 text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-40'>
      <h1 className='py-3 mx-auto mb-6 text-3xl font-semibold text-center w-max bg-gradient-to-l from-blue-500 to-blue-600 px-7 rounded-xl text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
        Your team
      </h1>
      <ul>
        {team.map((superhero) => (
          <SuperheroCard key={superhero.id} superhero={superhero} />
        ))}
      </ul>
    </section>
  );
}

SuperheroesList.propTypes = { team: PropTypes.array.isRequired };

export default SuperheroesList;
