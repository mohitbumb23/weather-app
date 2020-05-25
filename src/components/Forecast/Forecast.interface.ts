export interface ForecastItemProps {
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
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    [key: string]: number;
  };
  snow?: {
    [key: string]: number;
  };
  dt_txt: string;
}

export interface ForecastProps {
  forecast: ForecastItemProps[];
  cityWeatherForDate: (data: ForecastItemProps) => void;
}
