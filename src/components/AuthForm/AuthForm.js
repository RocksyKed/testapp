import React from 'react';

import './AuthForm.less';

export class AuthForm extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit();
    };

    render() {
        return (
            <div className="auth-form">
                <form onSubmit={this.onSubmit}>
                    {this.props.children}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
