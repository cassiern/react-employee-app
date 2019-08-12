import React, { Component } from 'react';
import CreationEmployee from '../CreateEmployee';
import Login from '../Login/index';
import EmployeeList from '../EmployeeList/index';
import Register from '../Register/index';
class Header extends Component {
    constructor() {
        super();
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginClick = (e) => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick = (e) => {
        this.setState({
            isLoggedIn: false
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const login = await fetch('http://localhost:9000/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedlogin = await login.json();
        console.log(parsedlogin, ' response from login');
        if (parsedlogin.status.message === 'User Logged In') {
            console.log('logged in')
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let show;
        let loginForm;
        if (this.state.isLoggedIn) {
            button = <button action='/' onClick={this.handleLogoutClick}> Logout</button>
            show = <CreationEmployee />
        } else {
            button = <button action='/login' onClick={this.handleLoginClick}> Login</button>
            show = <Register />
            loginForm = <Login />
        }
        return (
            <div>
            </div>
        )
    }
}

export default Header;