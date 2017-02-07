import React from 'react';
import http, { setHttpHeader } from '../../shared/axios';
import basic from 'basic-authorization-header';
import { apiPrefix } from '../../../etc/config.json';

import './Login.less';
import { AuthForm } from '../AuthForm/AuthForm';

export class Login extends React.Component {

    onLogin = () => {

        setHttpHeader(basic(this.login.value, this.password.value));

        http.get(`${apiPrefix}/login`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
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
