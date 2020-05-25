import React from 'react';
import moment from 'moment';
import {
  CardContent,
  Typography,
  Avatar,
  Grid,
  Card,
  Button,
} from '@material-ui/core/';
import { iconUrl, FORECAST_DATE_FORMAT } from '../../constant';
import { ForecastItemProps } from './Forecast.interface';
import useStyles from './style';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

const ForecastItem = (props: ForecastItemProps) => {
  const classes = useStyles();

  const { weather, main, dt_txt } = props;
  const { icon } = weather[0] || {};

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction='row' alignItems='center'>
          <Grid item sm={12} xs={12}>
            <Typography variant='h6' color='textSecondary'>
              {main.temp} <span>&#8451;</span>
            </Typography>
            <Avatar src={iconUrl(icon)} className={classes.avatar} />
            <Typography variant='body2' color='textSecondary'>
              {moment(dt_txt).format(FORECAST_DATE_FORMAT)}
            </Typography>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Button
              className={classes.root}
              startIcon={<ArrowUpward />}
              disabled
            >
              <Typography variant='body2' color='textPrimary'>
                {main.temp_max} <span>&#8451;</span>
              </Typography>
            </Button>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Button
              className={classes.root}
              startIcon={<ArrowDownward />}
              disabled
            >
              <Typography variant='body2' color='textPrimary'>
                {main.temp_min} <span>&#8451;</span>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ForecastItem;
