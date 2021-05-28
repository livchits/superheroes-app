import * as React from 'react';

import Search from '../components/Search';
import TeamStats from '../components/TeamStats';
import TeamList from '../components/TeamList';
import { team as initialTeam } from '../constants/index';

function Home() {
  const [team, setTeam] = React.useState(initialTeam);

  return (
    <main className='min-h-screen py-2'>
      <TeamStats team={team} />
      <Search setTeam={setTeam} team={team} />
      {Boolean(team.length) && <TeamList setTeam={setTeam} team={team} />}
    </main>
  );
}

export default Home;
