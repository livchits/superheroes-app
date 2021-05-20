import { KG_TO_LB_FACTOR } from '../constants';

export function convertKgToLb(kgValue) {
  return Math.round(kgValue * KG_TO_LB_FACTOR);
}
