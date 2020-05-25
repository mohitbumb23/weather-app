export interface HomepageProps {
  isLoading: boolean;
  forecastError: string;
  weatherError: string;
  fetchForecastData: (city: string) => void;
  fetchWeatherData: (city: string) => void;
}
