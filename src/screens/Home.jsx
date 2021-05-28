import * as React from 'react';

import SuperheroesSearch from '../components/SuperheroesSearch';
import TeamStats from '../components/TeamStats';
import SuperheroesList from '../components/SuperheroesList';
import { team as initialTeam } from '../constants/index';

function Home() {
  const [team, setTeam] = React.useState(initialTeam);

  return (
    <main className='min-h-screen py-2'>
      <TeamStats team={team} />
      <SuperheroesSearch setTeam={setTeam} team={team} />
      {Boolean(team.length) && <SuperheroesList setTeam={setTeam} team={team} />}
    </main>
  );
}

export default Home;
