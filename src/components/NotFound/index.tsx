import React from 'react';
import Button from '@material-ui/core/Button';
import { SentimentVeryDissatisfied } from '@material-ui/icons';
import { NotFoundProps } from './NotFound.interface';
import useStyles from './style';

const NotFound = (props: NotFoundProps) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} startIcon={<SentimentVeryDissatisfied />}>
      {props.error}
    </Button>
  );
};

export default NotFound;
