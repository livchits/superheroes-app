const PROPERTIES_TO_GET_AVERAGE = ['height', 'weight'];
const KG_TO_LB_FACTOR = 2.20462262185;
const CM_TO_FEET_FACTOR = 0.032808;
const FEET_TO_INCHES_FACTOR = 12;

const team = [
  {
    id: '70',
    name: 'Batman',
    powerstats: {
      intelligence: '100',
      strength: '26',
      speed: '27',
      durability: '50',
      power: '47',
      combat: '100',
    },
    fullName: 'Bruce Wayne',
    aliases: ['Insider', 'Matches Malone'],
    alignment: 'good',
    height: ["6'2", '188 cm'],
    weight: ['210 lb', '95 kg'],
    eyeColor: 'blue',
    hairColor: 'black',
    workPlace:
      'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
    imageUrl: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
  },
];

export {
  team,
  PROPERTIES_TO_GET_AVERAGE,
  KG_TO_LB_FACTOR,
  CM_TO_FEET_FACTOR,
  FEET_TO_INCHES_FACTOR,
};
