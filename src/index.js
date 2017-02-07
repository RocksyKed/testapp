import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

import Main from './components/Main/Main';
import Login from './components/Login/Login';
import { Register } from './components/Register/Register';
import { About } from './components/About/About';
import { mainReducer } from './store/redusers';

import './index.less';

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
      <Router history={ history }>
          <Route path="/" component={ App }>
              <IndexRoute component={ Main } />
              <Route path="login" component={ Login } />
              <Route path="register" component={ Register } />
              <Route path="about" component={ About } />
          </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
