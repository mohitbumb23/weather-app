import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchForecastDataRequest,
  fetchForecastDataSuccess,
  fetchForecastDataFailure,
  fetchWeatherDataRequest,
  fetchWeatherDataSuccess,
  fetchWeatherDataFailure,
} from './reducer';
import { getWeatherData, getForecastData } from './services';

function* fetchForecastData(action: any) {
  try {
    const forecast = yield call(getForecastData, action.payload);
    yield put(fetchForecastDataSuccess(forecast));
  } catch (e) {
    yield put(fetchForecastDataFailure(e.message));
    console.log(e);
  }
}

function* fetchWeatherData(action: any) {
  try {
    const weatherData = yield call(getWeatherData, action.payload);
    yield put(fetchWeatherDataSuccess(weatherData));
  } catch (e) {
    yield put(fetchWeatherDataFailure(e.message));
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(fetchForecastDataRequest.type, fetchForecastData);
  yield takeLatest(fetchWeatherDataRequest.type, fetchWeatherData);
}

export default mySaga;
