import * as React from 'react';
import PropTypes from 'prop-types';

import SuperheroCard from './SuperheroCard';

function SuperheroesList({ setTeam, team }) {
  const removeSuperhero = (idToRemove) => {
    setTeam((previousTeam) => previousTeam.filter(({ id }) => id !== idToRemove));
  };

  return (
    <section className='w-11/12 py-8 mx-auto my-2 text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-40'>
      <h1 className='py-3 mx-auto mb-6 text-3xl font-semibold text-center w-max bg-gradient-to-l from-blue-500 to-blue-600 px-7 rounded-xl text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
        Your team
      </h1>
      <ul className='sm:flex sm:flex-wrap sm:justify-evenly md:justify-start md:ml-1'>
        {team.map((superhero) => (
          <SuperheroCard
            key={superhero.id}
            handleRemove={removeSuperhero}
            superhero={superhero}
          />
        ))}
      </ul>
    </section>
  );
}

SuperheroesList.propTypes = {
  team: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default SuperheroesList;
