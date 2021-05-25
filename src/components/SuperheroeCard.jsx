import * as React from 'react';
import PropTypes from 'prop-types';

import { getHueValue } from '../utils/getHueValue';

const getHueforMaxValue100 = getHueValue(100);

function SuperheroeCard({ superheroe }) {
  const { name, imageUrl, powerstats } = superheroe;

  return (
    <li className='w-11/12 mx-auto border-2 border-gray-300 shadow-sm text-opacity-70 rounded-xl'>
      <h2 className='mb-2 text-2xl font-bold text-center'>{name}</h2>
      <div className='flex mx-auto'>
        <img alt={name} className='mb-2 ml-2 mr-1 h-44 rounded-xl' src={imageUrl} />
        <ul className='flex-1 ml-1 mr-2'>
          {Object.entries(powerstats).map(([powerstat, value]) => (
            <li key={powerstat}>
              <div className='flex justify-between mb-1 text-base leading-3'>
                <div className='pr-3 capitalize'>{powerstat}</div>
                <div className='text-right text-gray-500 text-opacity-100 '>{value}</div>
              </div>
              <div className='w-full mb-1.5'>
                <div className='bg-gray-300 h-2 mx-auto rounded-lg p-0.5'>
                  <div
                    className='h-full rounded-md rounded-r-none'
                    style={{
                      width: `${value}%`,
                      backgroundColor: `hsla(${getHueforMaxValue100(
                        value
                      )}, 50%, 60%, .8)`,
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex mb-2 justify-evenly'>
        <button
          className='w-24 px-3 text-lg font-semibold leading-normal transition-colors duration-300 border-2 border-blue-600 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600'
          type='submit'
        >
          Details
        </button>
        <button
          className='w-24 px-3 text-lg font-semibold leading-normal transition-colors duration-300 border-2 border-blue-600 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600'
          type='submit'
        >
          Remove
        </button>
      </div>
    </li>
  );
}

SuperheroeCard.propTypes = {
  superheroe: PropTypes.object,
};

export default SuperheroeCard;
