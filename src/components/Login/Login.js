import React from 'react';
import http, { setHttpHeader } from '../../shared/axios';
import basic from 'basic-authorization-header';
import { apiPrefix } from '../../../etc/config.json';
import { connect } from 'react-redux';
import { setUserData, setAuthTrue, setAuthFalse, setMarkers } from '../../store/actions/actions';
import { browserHistory } from 'react-router';

import './Login.less';
import { AuthForm } from '../AuthForm/AuthForm';

class Login extends React.Component {

    resetFields() {
        this.login.value = '';
        this.password.value = '';
    }

    onLogin = () => {

        let authKey = basic(this.login.value, this.password.value);

        setHttpHeader(authKey);

        http.get(`${apiPrefix}/login`)
            .then(({ data }) => {
                this.props.dispatch(setUserData(data._id, data.login));
                this.props.dispatch(setAuthTrue());
                this.props.dispatch(setMarkers(data.markers));
                localStorage.setItem('Auth', authKey);
                this.resetFields();
                browserHistory.push('/');
            })
            .catch(err => {
                this.props.dispatch(setAuthFalse());
                console.log('Failed auth');
            })
    };

    render() {
        return (
            <div className="login">
                <AuthForm onSubmit={ this.onLogin }>
                    <input type="text"
                           ref={ (input) => { this.login = input }}
                           placeholder="Login"/>
                    <input type="password"
                           ref={ (input) => { this.password = input }}
                           placeholder="Password"/>
                </AuthForm>
            </div>
        )
    }
}

export default connect()(Login);