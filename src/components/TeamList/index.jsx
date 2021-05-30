import * as React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function TeamList({ setTeam, team }) {
  const removeSuperhero = (idToRemove) => {
    setTeam((previousTeam) => previousTeam.filter(({ id }) => id !== idToRemove));
  };

  return (
    <section className='w-11/12 py-5 mx-auto mt-2 text-blue-600 bg-gray-200 rounded-md shadow-sm md:mx-auto md:max-w-4xl bg-opacity-90'>
      <h1 className='py-3 mx-auto mb-6 text-3xl font-semibold text-center w-max bg-gradient-to-l from-blue-500 to-blue-600 px-7 rounded-xl text-gray-50'>
        Your team
      </h1>
      <ul className='sm:flex sm:flex-wrap sm:justify-evenly md:ml-1'>
        {team.map((superhero) => (
          <Card key={superhero.id} handleRemove={removeSuperhero} superhero={superhero} />
        ))}
      </ul>
    </section>
  );
}

TeamList.propTypes = {
  team: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default TeamList;
