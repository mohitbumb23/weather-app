import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'homepage',
  initialState: {
    isLoading: false,
    forecast: [],
    cityWeatherInfo: {},
    weatherError: '',
    forecastError: '',
  },
  reducers: {
    fetchForecastDataRequest(state, action) {
      state.isLoading = true;
      state.forecastError = '';
    },
    fetchForecastDataSuccess(state, action) {
      state.isLoading = false;
      state.forecast = action.payload;
    },
    fetchForecastDataFailure(state, action) {
      state.isLoading = false;
      state.forecast = [];
      state.forecastError = action.payload;
    },
    fetchWeatherDataRequest(state, action) {
      state.isLoading = true;
      state.weatherError = '';
    },
    fetchWeatherDataSuccess(state, action) {
      state.isLoading = false;
      state.cityWeatherInfo = action.payload;
    },
    setCityWeatherForDate(state, action) {
      state.cityWeatherInfo = {
        ...state.cityWeatherInfo,
        ...action.payload,
      };
    },
    fetchWeatherDataFailure(state, action) {
      state.isLoading = false;
      state.cityWeatherInfo = {};
      state.weatherError = action.payload;
    },
  },
});

const { actions, reducer } = configSlice;

export const {
  fetchForecastDataRequest,
  fetchForecastDataSuccess,
  fetchForecastDataFailure,
  fetchWeatherDataRequest,
  fetchWeatherDataSuccess,
  setCityWeatherForDate,
  fetchWeatherDataFailure,
} = actions;

export default reducer;
