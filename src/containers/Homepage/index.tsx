import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { fetchForecastDataRequest, fetchWeatherDataRequest } from './reducer';
import { AppDispatch } from '../../store';
import SearchCity from '../../components/SearchCity';
import NotFound from '../../components/NotFound';
import CityWeatherInfo from '../../components/CityWeatherInfo';
import Analysis from '../../components/Analysis';
import Forecast from '../../components/Forecast';
import { HomepageProps } from './Homepage.interface';

const Homepage = (props: HomepageProps) => {
  const {
    weatherError,
    forecastError,
    fetchForecastData,
    fetchWeatherData,
  } = props;
  const error = weatherError || forecastError;
  const handelSubmit = (city: string) => {
    fetchForecastData(city);
    fetchWeatherData(city);
  };

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item md={8} xs={11}>
        <SearchCity handelSubmit={handelSubmit} />
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item md={8} xs={11}>
          <CityWeatherInfo />
        </Grid>
        <Grid item md={8} xs={11}>
          <Analysis />
        </Grid>
        <Grid item md={12} xs={11}>
          <Forecast />
        </Grid>
        <Grid item>{error && <NotFound error={error} />}</Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  const { isLoading, forecastError, weatherError } = state.homePage;
  return {
    isLoading,
    forecastError,
    weatherError,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchForecastData: (city: string) =>
      dispatch(fetchForecastDataRequest(city)),
    fetchWeatherData: (city: string) => dispatch(fetchWeatherDataRequest(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
