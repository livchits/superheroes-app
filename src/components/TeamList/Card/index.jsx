import * as React from 'react';
import PropTypes from 'prop-types';

import PowerstatsForCard from './PowerstatsForCard';
import Details from './Details';

function Card({ superhero, handleRemove }) {
  const { name, imageUrl, powerstats, id } = superhero;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <li className='w-11/12 mx-auto my-2 border-2 border-gray-400 shadow-sm text-opacity-70 rounded-xl sm:w-72 sm:mx-0 md:mx-1'>
        <h2 className='mb-2 text-2xl font-bold text-center'>{name}</h2>
        <div className='flex mx-auto'>
          <img alt={name} className='mb-2 ml-2 mr-1 h-44 rounded-xl' src={imageUrl} />
          <PowerstatsForCard powerstats={powerstats} />
        </div>
        <div className='flex mb-2 justify-evenly'>
          <button
            className='w-24 px-3 text-lg font-semibold leading-normal transition-colors duration-300 border-2 border-blue-600 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600'
            type='submit'
            onClick={() => setShowDetails(!showDetails)}
          >
            Details
          </button>
          <button
            className='w-24 px-3 text-lg font-semibold leading-normal transition-colors duration-300 border-2 border-blue-600 shadow-md rounded-xl focus:ring-blue-500 focus:ring-2 focus:outline-none focus:border-transparent hover:text-gray-100 bg-gradient-to-l hover:from-blue-500 hover:to-blue-600'
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
