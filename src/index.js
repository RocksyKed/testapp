import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import { Main } from './components/Main/Main';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { About } from './components/About/About';

import './index.less';

ReactDOM.render(
  <Router history={ browserHistory }>
      <Route path="/" component={ App }>
          <IndexRoute component={ Main } />
          <Route path="login" component={ Login } />
          <Route path="register" component={ Register } />
          <Route path="about" component={ About } />
      </Route>
  </Router>,
  document.getElementById('root')
);
