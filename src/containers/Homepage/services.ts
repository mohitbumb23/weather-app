import Request from '../../utils/request';
import { WEATHER_PATH, FORECAST_PATH } from '../../constant';
import { getFutureData } from '../../utils/utility';

export const getWeatherData = async (city: string) => {
  const request = new Request();
  const weather = await request.get(WEATHER_PATH, {
    q: city,
  });
  return {
    name: weather.name,
    country: weather.sys.country,
    sunrise: weather.sys.sunrise,
    sunset: weather.sys.sunset,
    weather: weather.weather,
    main: weather.main,
    wind: weather.wind,
    rain: weather.rain,
    snow: weather.snow,
    dt_txt: new Date(),
  };
};

export const getForecastData = async (city: string) => {
  const request = new Request();
  const forecast = await request.get(FORECAST_PATH, {
    q: city,
  });
  return getFutureData(forecast.list);
};
