import React from 'react';
import axios from 'axios';
import basic from 'basic-authorization-header';
import { apiPrefix } from '../../../etc/config.json';

import './Register.less';
import { AuthForm } from '../AuthForm/AuthForm';

export class Register extends React.Component {

    onRegister = () => {

        if(this.password.value !== this.passwordConfirm.value) {
            return console.log('Passwords aren\'t the same');
        }

        // Set header for request
        axios.defaults.headers.common['Authorization'] = basic(this.login.value, this.password.value);

        axios.post(`${apiPrefix}/register`, {
            login: this.login.value,
            password: this.password.value
        })
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
