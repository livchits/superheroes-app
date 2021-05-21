export function normalizeData(result) {
  const {
    id,
    name,
    powerstats,
    biography: { ['full-name']: fullName, aliases, alignment },
    appearance: { height, weight, ['eye-color']: eyeColor, ['hair-color']: hairColor },
    work: { base: workPlace },
    image: { url: imageUrl },
  } = result;

  return {
    id,
    name,
    powerstats,
    fullName,
    aliases,
    alignment,
    height,
    weight,
    eyeColor,
    hairColor,
    workPlace,
    imageUrl,
  };
}
