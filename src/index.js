import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import { Main } from './components/Main/Main';
import { Auth } from './components/Auth/Auth';
import { About } from './components/About/About';

import './index.less';

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
