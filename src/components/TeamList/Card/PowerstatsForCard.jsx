import * as React from 'react';
import PropTypes from 'prop-types';

import { getHueValue } from '../../../utils/getHueValue';

const getHueforMaxValue100 = getHueValue(100);

function PowerstatsForCard({ powerstats }) {
  return (
    <ul className='flex-1 mr-2 ml-1'>
      {Object.entries(powerstats).map(([powerstat, value]) => (
        <li key={powerstat}>
          <div className='flex justify-between mb-1 text-base leading-3'>
            <div className='pr-3 capitalize'>{powerstat}</div>
            <div className='text-right text-gray-500 text-opacity-100 '>{value}</div>
          </div>
          <div className='mb-1.5 w-full'>
            <div className='p-0.5 mx-auto h-2 bg-gray-400 bg-opacity-90 rounded-lg'>
              <div
                className='h-full rounded-md rounded-r-none'
                style={{
                  width: `${value}%`,
                  backgroundColor: `hsla(${getHueforMaxValue100(value)}, 50%, 60%, .8)`,
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

PowerstatsForCard.propTypes = { powerstats: PropTypes.object.isRequired };

export default PowerstatsForCard;
