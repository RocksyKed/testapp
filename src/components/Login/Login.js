import React from 'react';

import './Login.less';
import { AuthForm } from '../AuthForm/AuthForm';

export class Login extends React.Component {

    onLogin = () => {
        console.log('login');
    };

    render() {
        return (
            <div className="login">
                <AuthForm onSubmit={ this.onLogin }>
                    <input type="text" ref={ (input) => { this.login = input }} placeholder="Login"/>
                    <input type="password" ref={ (input) => {this.password = input}} placeholder="Password"/>
                </AuthForm>
            </div>
        )
    }
}
