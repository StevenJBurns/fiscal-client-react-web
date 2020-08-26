import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Switch>
        <Route path="/">
          <h1>HOME</h1>
        </Route>
      </Switch>
    </header>
  </div>
);

export default App;
