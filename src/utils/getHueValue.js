function getHueValue(maximumValue) {
  return (actualValue) => {
    const MAXIMUM_HUE_VALUE = 120;
    const hueValue = Math.round((actualValue / maximumValue) * MAXIMUM_HUE_VALUE);
    return hueValue;
  };
}

export default getHueValue;
