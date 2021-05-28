const isEmpty = (text) => !text.trim();

export function checkIfAnyInputIsEmpty(inputValues) {
  return inputValues.some(isEmpty);
}
