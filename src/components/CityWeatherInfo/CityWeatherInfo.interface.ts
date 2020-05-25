export interface CityWeatherInfoProps {
  cityWeatherInfo: {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
      feels_like?: number;
      pressure?: number;
      sea_level?: number;
      grnd_level?: number;
      temp_kf?: number;
    };
    rain?: {
      [key: string]: number;
    };
    snow?: {
      [key: string]: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    dt_txt: string;
  };
}
