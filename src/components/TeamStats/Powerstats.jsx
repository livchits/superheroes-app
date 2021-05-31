import * as React from 'react';
import PropTypes from 'prop-types';

import { getHueValue, getSortedPowerstatsTotals } from '../../utils';

function Powerstats({ team }) {
  const sortedPowerstatsTotals = getSortedPowerstatsTotals(team);
  const getHueForMaxTeamLength = getHueValue(team.length * 100);

  return (
    <article className='sm:flex-1 px-4 sm:pr-0 md:w-1/2'>
      <h2 className='text-2xl font-bold'>Total Powerstats</h2>
      <div className='my-2 text-opacity-70'>
        {sortedPowerstatsTotals.map(([powerstat, total]) => (
          <div key={powerstat} className='flex'>
            <div className='flex flex-auto justify-between'>
              <div className='px-1 uppercase'>{powerstat}</div>
              <div className='px-1 text-right text-gray-500 text-opacity-100'>
                {total}
              </div>
            </div>
            <div className='flex items-center px-1 w-1/2 md:w-3/5'>
              <div className='p-0.5 mx-auto w-full h-3 bg-gray-400 rounded-lg'>
                <div
                  className='h-full rounded-md rounded-r-none'
                  style={{
                    width: `${total / team.length}%`,
                    backgroundColor: `hsla(${getHueForMaxTeamLength(
                      total
                    )}, 50%, 60%, .8)`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

Powerstats.propTypes = {
  team: PropTypes.array.isRequired,
};

export default Powerstats;
