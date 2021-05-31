import * as React from 'react';
import PropTypes from 'prop-types';

import PowerstatsForCard from './PowerstatsForCard';
import Details from './Details';

function Card({ superhero, handleRemove }) {
  const { name, imageUrl, powerstats, id } = superhero;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <li className='my-2 mx-auto sm:mx-0 md:mx-1 w-11/12 sm:w-72 text-opacity-70 rounded-xl border-2 border-gray-400 shadow-sm'>
        <h2 className='mb-2 text-2xl font-bold text-center'>{name}</h2>
        <div className='flex mx-auto'>
          <img alt={name} className='mr-1 mb-2 ml-2 h-44 rounded-xl' src={imageUrl} />
          <PowerstatsForCard powerstats={powerstats} />
        </div>
        <div className='flex justify-evenly mb-2'>
          <button
            className='px-3 w-24 text-lg font-semibold leading-normal hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600 rounded-xl border-2 border-blue-600 focus:border-transparent focus:ring-2 focus:ring-blue-500 shadow-md transition-colors duration-300 focus:outline-none'
            type='submit'
            onClick={() => setShowDetails(!showDetails)}
          >
            Details
          </button>
          <button
            className='px-3 w-24 text-lg font-semibold leading-normal hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600 rounded-xl border-2 border-blue-600 focus:border-transparent focus:ring-2 focus:ring-blue-500 shadow-md transition-colors duration-300 focus:outline-none'
            type='submit'
            onClick={() => handleRemove(id)}
          >
            Remove
          </button>
        </div>
      </li>
      {showDetails && (
        <Details handleClose={() => setShowDetails(!showDetails)} superhero={superhero} />
      )}
    </>
  );
}

Card.propTypes = {
  superhero: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Card;
