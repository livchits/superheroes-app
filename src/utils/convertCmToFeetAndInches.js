import { CM_TO_FEET_FACTOR, FEET_TO_INCHES_FACTOR } from '../constants';

export function convertCmToFeetAndInches(cmValue) {
  const feetWithDecimals = cmValue * CM_TO_FEET_FACTOR;
  const feetIntegerPart = Math.floor(feetWithDecimals);
  const decimalPart = feetWithDecimals - feetIntegerPart;
  const inchesWithoutDecimals = Math.round(decimalPart * FEET_TO_INCHES_FACTOR);
  return `${feetIntegerPart}'${inchesWithoutDecimals}"`;
}
