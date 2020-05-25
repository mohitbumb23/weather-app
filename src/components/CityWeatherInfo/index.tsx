import React from 'react';
import moment from 'moment';
import {
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Card,
} from '@material-ui/core/';
import { connect } from 'react-redux';
import { iconUrl, DATE_FORMAT, TIME_FORMAT } from '../../constant';
import { CityWeatherInfoProps } from './CityWeatherInfo.interface';
import { getSumOfObjectKeyValues } from '../../utils/utility';
import useStyles from './style';

const CityWeatherInfo = (props: CityWeatherInfoProps) => {
  const classes = useStyles();

  const {
    name,
    country,
    sunrise,
    sunset,
    weather,
    main,
    snow,
    rain,
    wind,
    dt_txt,
  } = props.cityWeatherInfo;

  if (!name) return <div />;

  const { description, icon } = weather[0] || {};

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${name}, ${country}`}
        subheader={moment(dt_txt).format(DATE_FORMAT)}
      />
      <CardContent>
        <Grid container direction='row' alignItems='center'>
          <Grid item sm={2} xs={4}>
            <Avatar src={iconUrl(icon)} className={classes.avatar} />
          </Grid>
          <Grid item sm={4} xs={8} className={classes.textCenter}>
            <Typography variant='h4' color='textSecondary'>
              {main.temp} <span>&#8451;</span>
            </Typography>
            <Typography
              variant='h5'
              color='textSecondary'
              className={classes.description}
            >
              {description}
            </Typography>
            {snow && (
              <Typography
                variant='body2'
                color='textPrimary'
                className={classes.description}
              >
                Snow: {getSumOfObjectKeyValues(snow)}mm
              </Typography>
            )}
            {rain && (
              <Typography
                variant='body2'
                color='textPrimary'
                className={classes.description}
              >
                Rain: {getSumOfObjectKeyValues(rain)}mm
              </Typography>
            )}
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'
              className={classes.textCenter}
            >
              <Grid item sm={4} xs={4}>
                <Typography variant='body2' color='textSecondary'>
                  {main.temp_max} <span>&#8451;</span>
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  High
                </Typography>
                <div className={classes.divider} />
                <Typography variant='body2' color='textSecondary'>
                  {main.temp_min} <span>&#8451;</span>
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Low
                </Typography>
              </Grid>

              <Grid item sm={4} xs={4}>
                <Typography variant='body2' color='textSecondary'>
                  {wind.speed} mps
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Wind
                </Typography>
                <div className={classes.divider} />
                <Typography variant='body2' color='textSecondary'>
                  {main.humidity}%
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Humidity
                </Typography>
              </Grid>

              <Grid item sm={4} xs={4}>
                <Typography variant='body2' color='textSecondary'>
                  {moment(sunrise * 1000).format(TIME_FORMAT)}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Sunrise
                </Typography>
                <div className={classes.divider} />
                <Typography variant='body2' color='textSecondary'>
                  {moment(sunset * 1000).format(TIME_FORMAT)}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Sunset
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  const { cityWeatherInfo } = state.homePage;
  return {
    cityWeatherInfo,
  };
};

export default connect(mapStateToProps)(CityWeatherInfo);
