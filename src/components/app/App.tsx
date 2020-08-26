import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Pages } from 'components/pages';
import { useStyles } from './App.styles.js';

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <header>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/investments">INVESTMENTS</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <h1>HOME</h1>
          </Route>
          <Route exact path="/investments">
            <h1>INVESTMENTS</h1>
          </Route>
          <Route>
            <Pages.Page404 />
          </Route>
        </Switch>
      </main>
    </Container>
  )
};

export default App;
