import {
  MAXIMUM_TEAM_MEMBERS,
  MAXIMUM_ALIGNMENT_MEMBERS,
  ADD_CHECKING_ERRORS,
} from '../constants';

function getTotalAlignment(previusTeam, alignmentToSum) {
  const total = previusTeam.reduce((total, { alignment }) => {
    alignment === alignmentToSum ? total++ : total;
    return total;
  }, 0);

  return total;
}

const { maximumMembersReached, maximumAlignmentReached, superheroIsAlreadyInTeam } =
  ADD_CHECKING_ERRORS;

function allConditionsTrue(addConditions) {
  return !Object.values(addConditions).some((condition) => condition !== true);
}

function getErrorMessages(addConditions) {
  const messages = [];

  for (const condition in addConditions) {
    if (typeof addConditions[condition] === 'string') {
      messages.push(addConditions[condition]);
    }
  }

  return messages;
}

export function superheroIsOkToAdd(previusTeam, superhero) {
  const addConditions = {
    maximumMembersNotReach:
      previusTeam.length < MAXIMUM_TEAM_MEMBERS || maximumMembersReached,
    maximumAlignmentMembersNotReach:
      getTotalAlignment(previusTeam, superhero.alignment) < MAXIMUM_ALIGNMENT_MEMBERS ||
      maximumAlignmentReached(superhero.alignment),
    superheroIsNotInTeam:
      !previusTeam.find(({ id }) => id === superhero.id) || superheroIsAlreadyInTeam,
  };

  return allConditionsTrue(addConditions)
    ? { error: false, newTeam: [...previusTeam, superhero] }
    : { error: true, messages: [...getErrorMessages(addConditions)] };
}
