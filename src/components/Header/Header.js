import React from 'react';
import { Link, IndexLink } from 'react-router';
import './Header.less';

export const Header = (props) => (
    <header>
        <ul>
            <li><IndexLink to="/" activeClassName="active">Main</IndexLink></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
            <li><Link to="login" activeClassName="active">Login</Link></li>
            <li><Link to="register" activeClassName="active">Register</Link></li>
        </ul>
    </header>
);