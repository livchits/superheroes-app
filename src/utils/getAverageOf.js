export function getAverageOf(team, appearanceProperties) {
  const averages = {};

  appearanceProperties.forEach((property) => {
    const average =
      team.reduce((total, superhero) => {
        const value = Number(superhero[property][1].split(' ')[0]);
        return (total += value);
      }, 0) / team.length;

    const roundAverage = Math.round(average);
    averages[property] = roundAverage;
  });

  return averages;
}
