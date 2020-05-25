import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SearchCityProps } from './SearchCity.interface';
import useStyles from './style';

const SearchCity = (props: SearchCityProps) => {
  const classes = useStyles();
  const [city, setCity] = useState('');

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.handelSubmit(city);
  };

  return (
    <Paper component='form' className={classes.root} onSubmit={submit}>
      <InputBase
        className={classes.input}
        placeholder='Search City'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        inputProps={{ 'aria-label': 'search city' }}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchCity;
