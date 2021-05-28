import * as React from 'react';
import PropTypes from 'prop-types';

import { getHueValue, getSortedPowerstatsTotals } from '../../utils';

function Powerstats({ team }) {
  const sortedPowerstatsTotals = getSortedPowerstatsTotals(team);
  const getHueForMaxTeamLength = getHueValue(team.length * 100);

  return (
    <article className='px-4 sm:pr-0 sm:flex-1 md:w-1/2 md:flex-0'>
      <h2 className='text-2xl font-bold'>Total Powerstats</h2>
      <div className='my-2 text-opacity-70'>
        {sortedPowerstatsTotals.map(([powerstat, total]) => (
          <div key={powerstat} className='flex'>
            <div className='flex justify-between flex-auto'>
              <div className='px-1 uppercase'>{powerstat}</div>
              <div className='px-1 text-right text-gray-500 text-opacity-100'>
                {total}
              </div>
            </div>
            <div className='flex items-center w-1/2 px-1 md:w-3/5'>
              <div className='bg-gray-400 h-3 mx-auto rounded-lg p-0.5 w-full'>
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
