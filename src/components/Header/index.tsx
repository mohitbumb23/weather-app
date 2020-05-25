import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Home />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Weather app
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
