import * as React from 'react';
import PropTypes from 'prop-types';

import { PROPERTIES_TO_GET_AVERAGE } from '../../constants';
import { convertCmToFeetAndInches, convertKgToLb, getAverageOf } from '../../utils';

function Appearance({ team }) {
  const averages = getAverageOf(team, PROPERTIES_TO_GET_AVERAGE);

  return (
    <article className='px-4 md:w-2/5 lg:pl-10'>
      <h2 className='mt-4 text-2xl font-bold sm:mt-0'>Average Appearance</h2>
      <ul className='px-1 mt-2'>
        {Object.keys(averages).map((property) => {
          const value = averages[property];
          return (
            <li key={property} className='flex justify-between w-4/6 sm:w-full md:w-3/4'>
              <span className='uppercase'>{property} </span>
              <span className='text-gray-500'>
                {property === 'height'
                  ? `${value} cm / ${convertCmToFeetAndInches(value)}`
                  : `${value} kg / ${convertKgToLb(value)} lb`}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

Appearance.propTypes = { team: PropTypes.array.isRequired };

export default Appearance;
