import React from 'react';
import moment from 'moment';
import {
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Card,
} from '@material-ui/core/';
import { connect } from 'react-redux';
import { AnalysisProps } from './Analysis.interface';
import useStyles from './style';
import { getSnowDay, getRainyDay } from '../../utils/utility';
import { DATE_FORMAT } from '../../constant';

const Analysis = (props: AnalysisProps) => {
  const classes = useStyles();

  const { rainyDay, snowDay } = props;

  if (!rainyDay || !snowDay) {
    return <div />;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        subheader={
          <Typography variant='h6' color='textPrimary'>
            Analysis
          </Typography>
        }
      />
      <CardContent>
        <Grid container direction='row' alignItems='flex-start'>
          <Grid item sm={6} xs={12}>
            <Typography variant='body2' color='textSecondary'>
              <b>Best day to sell an umbrella:</b>{' '}
              {moment(rainyDay.dt_txt).format(DATE_FORMAT)}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant='body2' color='textSecondary'>
              <b> Best day to sell a jacket:</b>{' '}
              {moment(snowDay.dt_txt).format(DATE_FORMAT)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  const { forecast } = state.homePage;
  const rainyDay = getRainyDay(forecast);
  const snowDay = getSnowDay(forecast);
  return {
    rainyDay,
    snowDay,
  };
};

export default connect(mapStateToProps)(Analysis);
