import React, { Component } from 'react';
import http, { setHttpHeader } from './shared/axios';
import { apiPrefix } from '../etc/config.json';
import { setUserData, setAuthTrue, setAuthFalse, setMarkers } from './store/actions/actions';

import Header from './components/Header/Header';

import './App.less';

class App extends Component {

  componentDidMount() {
    let authKey = localStorage.getItem('Auth');

    if(authKey) {
      setHttpHeader(authKey);

      http.get(`${apiPrefix}/login`)
          .then(({ data }) => {
            this.props.dispatch(setUserData(data._id, data.login));
            this.props.dispatch(setAuthTrue());
            this.props.dispatch(setMarkers(data.markers));
          })
          .catch(err => {
            this.props.dispatch(setAuthFalse());
            console.log('Failed auth');
          })
    }
  }

  render() {
    return (
      <div className="App">
         <Header />
          { this.props.children }
      </div>
    );
  }
}

export default App;
