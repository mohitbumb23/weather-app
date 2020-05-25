import React from 'react';
import { Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import history from './history';
import routes from '../routes';

const App = () => {
  return (
    <Router history={history}>
      <Container disableGutters maxWidth={false}>
        <Header />
        {routes}
      </Container>
    </Router>
  );
};

export default App;
