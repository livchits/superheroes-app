import * as React from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';

import useCloseFromOutside from '../../../hooks/useCloseFromOutside';
import { formatList } from '../../../utils';

import PowerstatsForCard from './PowerstatsForCard';

function Details({ superhero, handleClose }) {
  const ref = useCloseFromOutside(handleClose);

  const {
    name,
    imageUrl,
    powerstats,
    weight,
    height,
    fullName,
    aliases,
    eyeColor,
    hairColor,
    workPlace,
  } = superhero;

  return (
    <div className='grid fixed top-0 left-0 z-10 items-center w-screen h-screen bg-gray-200 bg-opacity-95'>
      <article ref={ref} className='p-3 mx-auto w-11/12 max-w-lg bg-gray-300 rounded-lg'>
        <button
          aria-label='Close search results'
          className='group block p-2 ml-auto bg-gray-400 hover:bg-gray-500 bg-opacity-80 rounded-lg focus:ring-2 focus:ring-gray-600 transition-colors duration-200 focus:outline-none'
          onClick={handleClose}
        >
          <XIcon className='mx-auto w-6 text-gray-600 group-hover:text-gray-300 transition-colors duration-200' />
        </button>
        <h1 className='py-3 px-7 mx-auto mb-6 w-max text-3xl font-semibold text-center text-gray-50 bg-gradient-to-l from-blue-500 to-blue-600 rounded-xl'>
          {name}
        </h1>
        <div className='flex mx-auto'>
          <img alt={name} className='mr-1 mb-2 ml-2 h-44 rounded-xl' src={imageUrl} />
          <PowerstatsForCard powerstats={powerstats} />
        </div>
        <ul className='mx-2 text-lg leading-tight'>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Weight: </span>
            {`${weight[0]} / ${weight[1]}`}
          </li>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Height: </span>
            {`${height[0]} / ${height[1]}`}
          </li>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Full name: </span>
            {`${fullName}`}
          </li>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Aliases: </span>
            {formatList(aliases)}
          </li>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Eye color: </span>
            {`${eyeColor}`}
          </li>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Hair color: </span>
            {`${hairColor}`}
          </li>
          <li className='mb-1.5'>
            <span className='font-bold uppercase'>Work place: </span>
            {`${workPlace}`}
          </li>
        </ul>
      </article>
    </div>
  );
}

Details.propTypes = {
  superhero: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Details;
