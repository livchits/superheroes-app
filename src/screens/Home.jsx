import * as React from 'react';

import SuperheroesSearch from '../components/SuperheroesSearch';
import TeamStats from '../components/TeamStats';
import { team as initialTeam } from '../constants/index';

function Home() {
  const [team, setTeam] = React.useState(initialTeam);

  return (
    <>
      <TeamStats team={team} />
      <SuperheroesSearch />
    </>
  );
}

export default Home;
