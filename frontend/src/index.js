import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Details from './Details'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/details/:id" component={Details} />
      </Switch>
  </BrowserRouter>

  , document.getElementById('root')
);
