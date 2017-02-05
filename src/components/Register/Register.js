import React from 'react';

import './Register.less';
import { AuthForm } from '../AuthForm/AuthForm';

export class Register extends React.Component {

    onRegister = () => {
        console.log('login');
    };

    render() {
        return (
            <div className="login">
                <AuthForm onSubmit={ this.onRegister }>
                    <input type="text"
                           ref={ (input) => { this.login = input }}
                           placeholder="Login"/>
                    <input type="password"
                           ref={ (input) => { this.password = input }}
                           placeholder="Password"/>
                    <input type="password"
                           ref={ (input) => { this.passwordConfirm = input }}
                           placeholder="Password confirm.."/>
                </AuthForm>
            </div>
        )
    }
}
