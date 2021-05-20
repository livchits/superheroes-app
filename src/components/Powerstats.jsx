import * as React from 'react';
import PropTypes from 'prop-types';

import { getHueValue, getSortedPowerstatsTotals } from '../utils';

function Powerstats({ team }) {
  const sortedPowerstatsTotals = getSortedPowerstatsTotals(team);
  const getHueForMaxTeamLength = getHueValue(team.length * 100);

  return (
    <article className='px-4 sm:flex-1'>
      <h2 className='text-2xl font-bold'>Total Powerstats</h2>
      <div className='my-2 text-opacity-70'>
        <table>
          <tbody>
            {sortedPowerstatsTotals.map(([powerstat, total]) => (
              <tr key={powerstat}>
                <td className='px-1 uppercase'>{powerstat}</td>
                <td className='px-1 text-right text-gray-500 text-opacity-100'>
                  {total}
                </td>
                <td className='w-full px-1'>
                  <div className='bg-gray-300 h-3 mx-auto rounded-lg p-0.5'>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

Powerstats.propTypes = {
  team: PropTypes.array.isRequired,
};

export default Powerstats;
