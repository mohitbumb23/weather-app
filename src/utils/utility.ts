export const getClosestValue = (dateInMilliseconds: any, weatherData: any) => {
  const closestForecast = weatherData.reduce(
    (accumulator: { dt: number }, current: { dt: number }) => {
      const diffCurrent = Math.abs(current.dt * 1000 - dateInMilliseconds);
      const diffAccumulator = Math.abs(
        accumulator.dt * 1000 - dateInMilliseconds
      );
      return diffAccumulator > diffCurrent ? current : accumulator;
    }
  );

  return closestForecast;
};

export const getFutureData = (forecastData: any) => {
  const getCurrentTime = new Date().getTime();
  let i = 0;
  const forecasts = [];
  for (i = 0; i < 5; i += 1) {
    const forecastTime = getCurrentTime + 86400000 * i;
    forecasts.push(getClosestValue(forecastTime, forecastData));
  }
  return forecasts;
};

export const getSumOfObjectKeyValues = (data: { [key: string]: number }) => {
  if (!data) return 0;
  return Object.values(data).reduce((a, b) => a + b, 0);
};

export const getRainyDay = (forecastData: any) => {
  if (!forecastData.length) return null;
  return forecastData.reduce((accumulator: any, current: any) => {
    return getSumOfObjectKeyValues(accumulator.rain) <
      getSumOfObjectKeyValues(current.rain)
      ? current
      : accumulator;
  });
};

export const getSnowDay = (forecastData: any) => {
  if (!forecastData.length) return null;
  return forecastData.reduce((accumulator: any, current: any) => {
    return getSumOfObjectKeyValues(accumulator.snow) <
      getSumOfObjectKeyValues(current.snow)
      ? current
      : accumulator;
  });
};
