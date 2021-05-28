const PROPERTIES_TO_GET_AVERAGE = ['height', 'weight'];
const KG_TO_LB_FACTOR = 2.20462262185;
const CM_TO_FEET_FACTOR = 0.032808;
const FEET_TO_INCHES_FACTOR = 12;
const MAXIMUM_TEAM_MEMBERS = 6;
const MAXIMUM_ALIGNMENT_MEMBERS = 3;

const ADD_CHECKING_ERRORS = {
  maximumMembersReached: 'Maximum of team members has already reached. Remove one',
  maximumAlignmentReached: (alignment) =>
    `Maximum of ${alignment} members has already reached. Remove one`,
  superheroIsAlreadyInTeam: 'The superhero you want to add is already in the team',
};

const LOGIN_URL = 'http://challenge-react.alkemy.org/';

const { VITE_API_ACCESS_TOKEN } = import.meta.env;
const SEARCH_URL = `https://www.superheroapi.com/api.php/${VITE_API_ACCESS_TOKEN}/search/`;

export {
  PROPERTIES_TO_GET_AVERAGE,
  KG_TO_LB_FACTOR,
  CM_TO_FEET_FACTOR,
  FEET_TO_INCHES_FACTOR,
  MAXIMUM_TEAM_MEMBERS,
  MAXIMUM_ALIGNMENT_MEMBERS,
  ADD_CHECKING_ERRORS,
  LOGIN_URL,
  SEARCH_URL,
};
