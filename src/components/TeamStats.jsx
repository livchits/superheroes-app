import * as React from 'react';

import { team, PROPERTIES_TO_GET_AVERAGE } from '../constants';
import {
  getHueValue,
  getSortedPowerstatsTotals,
  getAverageOf,
  convertCmToFeetAndInches,
  convertKgToLb,
} from '../utils';

function TeamStats() {
  const sortedPowerstatsTotals = getSortedPowerstatsTotals(team);
  const getHueForMaxTeamLength = getHueValue(team.length * 100);
  const averages = getAverageOf(team, PROPERTIES_TO_GET_AVERAGE);

  return (
    <section className='max-w-4xl py-8 m-2 mx-auto text-blue-600 bg-gray-200 rounded-md bg-opacity-40'>
      <div className='text-center'>
        <h1 className='inline-block px-12 py-3 mx-auto mb-6 text-3xl font-semibold bg-blue-600 rounded-full text-gray-50 ring-4 ring-opacity-80 ring-gray-200'>
          Team Stats
        </h1>
      </div>
      <div className='sm:flex'>
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
        <article className='px-4'>
          <h2 className='mt-4 text-2xl font-bold sm:mt-0'>Average Appearance</h2>
          <ul className='px-1 mt-2'>
            {Object.keys(averages).map((property) => {
              const value = averages[property];
              return (
                <li key={property} className='flex justify-between w-4/6 sm:w-full'>
                  <span className='uppercase'>{property} </span>
                  <span className='text-gray-500'>
                    {property === 'height'
                      ? ` cm / ${convertCmToFeetAndInches(value)}`
                      : ` kg / ${convertKgToLb(value)} lb`}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default TeamStats;
