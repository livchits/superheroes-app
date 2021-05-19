function getPowerstatsTotals(team) {
  const powerstatsTotals = team.reduce((totals, { powerstats }) => {
    Object.keys(powerstats).forEach((powerstat) =>
      totals[powerstat]
        ? (totals[powerstat] += Number(powerstats[powerstat]))
        : (totals[powerstat] = Number(powerstats[powerstat]))
    );
    return totals;
  }, {});

  return powerstatsTotals;
}

function totalsFromObjectToTupleArray(totalsObject) {
  const sortedPowerstatsTotalsTupleArray = Object.entries(totalsObject).sort(
    ([, value], [, nextValue]) => nextValue - value
  );

  return sortedPowerstatsTotalsTupleArray;
}

function getSortedPowerstatsTotals(team) {
  const powerstatsTotals = getPowerstatsTotals(team);
  const sortedPowerstatsTotals = totalsFromObjectToTupleArray(powerstatsTotals);
  return sortedPowerstatsTotals;
}

export default getSortedPowerstatsTotals;
