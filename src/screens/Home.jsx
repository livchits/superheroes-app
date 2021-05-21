import * as React from 'react';

import SuperheroSearch from '../components/SuperheroSearch';
import TeamStats from '../components/TeamStats';

function Home() {
  return (
    <>
      <TeamStats />
      <SuperheroSearch />
    </>
  );
}

export default Home;
