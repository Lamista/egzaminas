import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';
import BackendMessage from './components/BackendMessage';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatchComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import Entity1sContainer from './components/Entity1s/Entity1sContainer';
import Entity1CreationContainer from './components/Entity1Creation/Entity1CreationContainer';

const App = (props) => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={BackendMessage} />
      <Route exact path='/entity1s' component={Entity1sContainer} />
      <Route exact path='/entity1s/new' component={Entity1CreationContainer} />
      <Route path='*' component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
    {props.children}
  </div>
);

export default App;
