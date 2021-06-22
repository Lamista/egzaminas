import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatchComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import ClientListComponent from './components/ClientList/ClientListContainer';
import ClientCreationContainer from './components/ClientCreation/ClientCreationContainer';
import ClientDetailsContainer from './components/ClientDetails/ClientDetailsContainer';
import ItemCreationContainer from './components/ItemCreation/ItemCreationContainer';

const App = (props) => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={ClientListComponent} />
      <Route exact path='/clients/new' component={ClientCreationContainer} />
      <Route exact path='/clients/:id' component={ClientDetailsContainer} />
      <Route exact path='/clients/:id/items/new' component={ItemCreationContainer} />
      <Route path='*' component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
    {props.children}
  </div>
);

export default App;
