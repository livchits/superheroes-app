import * as React from 'react';

import Search from '../components/Search';
import TeamStats from '../components/TeamStats';
import TeamList from '../components/TeamList';

function Home() {
  const [team, setTeam] = React.useState([]);

  return (
    <main className='py-2 min-h-screen'>
      <TeamStats team={team} />
      <Search setTeam={setTeam} team={team} />
      {Boolean(team.length) && <TeamList setTeam={setTeam} team={team} />}
    </main>
  );
}

export default Home;
