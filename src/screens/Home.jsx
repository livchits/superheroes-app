import * as React from 'react';

import SuperheroesSearch from '../components/SuperheroesSearch';
import TeamStats from '../components/TeamStats';

function Home() {
  return (
    <>
      <TeamStats />
      <SuperheroesSearch />
    </>
  );
}

export default Home;
