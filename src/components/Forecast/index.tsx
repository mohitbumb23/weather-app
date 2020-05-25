import React from 'react';
import { Grid } from '@material-ui/core/';
import { ForecastProps, ForecastItemProps } from './Forecast.interface';
import ForecastItem from './ForecastItem';
import { connect } from 'react-redux';
import { AppDispatch } from '../../store';
import { setCityWeatherForDate } from '../../containers/Homepage/reducer';

const Forecast = (props: ForecastProps) => {
  const { forecast, cityWeatherForDate } = props;

  if (forecast && !forecast.length) {
    return <div />;
  }

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={1}
    >
      {forecast.map((eachItem: ForecastItemProps, index: number) => (
        <Grid
          item
          md={2}
          xs={6}
          key={index}
          onClick={() => cityWeatherForDate(eachItem)}
        >
          <ForecastItem {...eachItem} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  const { forecast } = state.homePage;
  return {
    forecast,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    cityWeatherForDate: (data: ForecastItemProps) =>
      dispatch(setCityWeatherForDate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
