import * as React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function TeamList({ setTeam, team }) {
  const removeSuperhero = (idToRemove) => {
    setTeam((previousTeam) => previousTeam.filter(({ id }) => id !== idToRemove));
  };

  return (
    <section className='py-5 mx-auto md:mx-auto mt-2 w-11/12 md:max-w-4xl text-blue-600 bg-gray-200 bg-opacity-90 rounded-md shadow-sm'>
      <h1 className='py-3 px-7 mx-auto mb-6 w-max text-3xl font-semibold text-center text-gray-50 bg-gradient-to-l from-blue-500 to-blue-600 rounded-xl'>
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
