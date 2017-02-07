import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { setUserData, setMarkers, setAuthFalse } from '../../store/actions/actions';

import './Header.less';

const Header = (props) => {

    const onLogout = () => {
        props.dispatch(setAuthFalse());
        props.dispatch(setUserData(null, null));
        props.dispatch(setMarkers([]));
        localStorage.removeItem('Auth');
    };

    return (
        <header>
            <ul>
                <li><IndexLink to="/" activeClassName="active">Main</IndexLink></li>
                <li><Link to="about" activeClassName="active">About</Link></li>
                {props.isAuth
                    ? (<li><a onClick={onLogout}>Logout</a></li>)
                    : (<li><Link to="login" activeClassName="active">Login</Link></li>)  }
                <li><Link to="register" activeClassName="active">Register</Link></li>
            </ul>
        </header>
    )
};

export default connect((state, ownProps) => ({
    isAuth: state.user.isAuth
}))(Header);