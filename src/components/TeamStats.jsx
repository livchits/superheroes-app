import * as React from 'react';

import { team } from '../constants';
import getHueValue from '../utils/getHueValue';
import getSortedPowerstatsTotals from '../utils/getSortedPowerstatsTotals';

function TeamStats() {
  const sortedPowerstatsTotals = getSortedPowerstatsTotals(team);
  const getHueForMaxTeamLength = getHueValue(team.length * 100);

  return (
    <section className='text-center'>
      <h1 className='inline-block px-6 py-3 mx-auto mt-8 mb-6 text-3xl bg-opacity-50 rounded-full text-gray-50 bg-cyan-600 ring-8 ring-opacity-80 ring-gray-200'>
        Your team stats
      </h1>
      <h2 className='ml-4 text-2xl text-left text-opacity-50 text-cyan-600'>
        Total Powerstats
      </h2>
      <div className='px-4 mt-2 text-opacity-70 text-cyan-600'>
        <table>
          <tbody>
            {sortedPowerstatsTotals.map(([powerstat, total]) => (
              <tr key={powerstat}>
                <td className='px-1 text-left capitalize'>{powerstat}</td>
                <td className='px-1 text-right '>{total}</td>
                <td className='w-full px-1'>
                  <div className='bg-gray-300 h-4 mx-auto rounded-lg p-0.5'>
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
    </section>
  );
}

export default TeamStats;
