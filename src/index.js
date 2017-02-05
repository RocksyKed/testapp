import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import { Main } from './components/Main';
import { Auth } from './components/Auth';
import { About } from './components/About';

import './index.css';

ReactDOM.render(
  <Router history={ browserHistory }>
      <Route path="/" component={ App }>
          <IndexRoute component={ Main } />
          <Route path="/auth" component={ Auth } />
          <Route path="/about" component={ About } />
      </Route>
  </Router>,
  document.getElementById('root')
);
