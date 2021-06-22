import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatchComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingComponent from './components/LoadingComponent';

const App = (props) => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={LoadingComponent} />
      <Route path='*' component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
    {props.children}
  </div>
);

export default App;
